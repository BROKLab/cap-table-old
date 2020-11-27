import axios, { AxiosError, AxiosResponse } from 'axios';
import { ethers } from 'ethers';
import { Box, Button, Grid, Heading, Select, Text } from 'grommet';
import { Search } from 'grommet-icons';
import React, { useContext, useEffect, useState } from 'react';
import { Controller, useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { SpinnerDiamond } from 'spinners-react/lib/esm/SpinnerDiamond';
import { CapTableQueContext, ERC1400Context, HardhatContext } from "../../hardhat/HardhatContext";
import { formatCurrency } from '../../utils/numbers';
import { getPasswordFromLocalstorage, removePassword } from '../../utils/passwordBlockAPI';

interface Props { }

interface FormData {
    org: OrgData | null
}

export interface OrgData {
    Aksjer: number
    Kapital: number
    Navn: string
    Orgnr: number
    Vedtektsdato: string
}
interface ApiRespons {
    result: OrgData[]
}

const DEFAULT_DATA = [
    {
        "Orgnr": 964785538,
        "Navn": "BLOKKNESSET AS",
        "Kapital": 256000,
        "Aksjer": 500,
        "Vedtektsdato": "04.07.2017"
    },
    {
        "Orgnr": 988492728,
        "Navn": "BLOKKTINN AS",
        "Kapital": 100000,
        "Aksjer": 100,
        "Vedtektsdato": "11.05.2005"
    },
    {
        "Orgnr": 993643831,
        "Navn": "BLOKKSBERGKLINIKKEN AS",
        "Kapital": 100000,
        "Aksjer": 100,
        "Vedtektsdato": "02.01.2009"
    },
    {
        "Orgnr": 921811829,
        "Navn": "BLOKKFABRIKKTOMTA AS",
        "Kapital": 302775.22,
        "Aksjer": 1,
        "Vedtektsdato": "25.09.2018"
    },
    {
        "Orgnr": 923575812,
        "Navn": "BLOKSBJERG AS",
        "Kapital": 30000,
        "Aksjer": 1,
        "Vedtektsdato": "30.09.2019"
    },
    {
        "Orgnr": 921799381,
        "Navn": "BLOKMAR AS",
        "Kapital": 30000,
        "Aksjer": 300,
        "Vedtektsdato": "01.11.2018"
    },
    {
        "Orgnr": 995589753,
        "Navn": "BLOKKHEIM AS",
        "Kapital": 100000,
        "Aksjer": 100,
        "Vedtektsdato": "07.05.2010"
    },
    {
        "Orgnr": 979472579,
        "Navn": "BLOKSBERG INVEST AS",
        "Kapital": 100000,
        "Aksjer": 100000,
        "Vedtektsdato": "05.02.2014"
    },
    {
        "Orgnr": 998315824,
        "Navn": "BLOKSBERG FRIS�R AS",
        "Kapital": 30000,
        "Aksjer": 30,
        "Vedtektsdato": "15.03.2012"
    },
    {
        "Orgnr": 917216037,
        "Navn": "BLOKKTINDEN EIENDOM AS",
        "Kapital": 30000,
        "Aksjer": 3000,
        "Vedtektsdato": "23.03.2016"
    }
]



export const CapTableCreate: React.FC<Props> = () => {
    const { handleSubmit, watch, control, errors, setValue, formState, setError } = useForm<FormData>({
        defaultValues: {
            org: null,
        }
    });
    const history = useHistory();
    const [orgList, setOrgList] = useState<OrgData[]>(() => process.env.NODE_ENV === "development" ? DEFAULT_DATA : []);
    const [isSearchingBrreg, setIsSearchingBrreg] = useState(false);
    const erc1400 = useContext(ERC1400Context)
    const capTableQue = useContext(CapTableQueContext)
    const { init } = useContext(HardhatContext)
    const orgWatch = watch("org")
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        if (process.env.NODE_ENV === "development") {
            setValue("searchInput", "915772137")
        }
    }, [setValue])
    useEffect(() => {
        console.log("orgWatch", orgWatch)
    }, [orgWatch])

    useEffect(() => {
        const timer = setTimeout(async () => {
            try {
                if (!searchQuery) return
                setIsSearchingBrreg(true)
                const password = getPasswordFromLocalstorage()
                const isOrgName = isNaN(+searchQuery)
                if (isOrgName) {
                    const res: AxiosResponse<ApiRespons> = await axios.get("https://auth-oracle.now.sh/api/v1/org", {
                        params: {
                            name: searchQuery,
                            password: password
                        }
                    }).catch((err: AxiosError<ApiRespons>) => {
                        if (err.response?.status === 401) {
                            removePassword()
                        }
                        throw Error("Søk etter navn ga ingen resultater.")
                    })
                    console.debug(res)
                    setOrgList(res.data.result)
                } else {
                    const res: AxiosResponse<ApiRespons> = await axios.get("https://auth-oracle.now.sh/api/v1/org", {
                        params: {
                            orgnr: searchQuery.replace(/\s/g, ''),
                            password: password
                        }
                    }).catch(err => {
                        if (err.response?.status === 401) {
                            removePassword()
                        }
                        throw Error("Søk etter org nr ga ingen resultater.")
                    })
                    setOrgList(res.data.result)
                }
                setIsSearchingBrreg(false)
            } catch (error) {
                setError("org", { message: error.message })
                setOrgList([])
                setIsSearchingBrreg(false)
            }
        }, 500)
        return () => {
            console.log("Cleanup")
            clearTimeout(timer)
            setIsSearchingBrreg(false)
        }
    }, [searchQuery, setError])

    const onSubmit = async (data: FormData) => {
        if (!capTableQue.instance) throw Error("Aksjeregister køen er ikke lastet inn.")
        console.debug("Submitting", data)
        if (!erc1400.factory) {
            return await init()
        }
        if (!data.org) {
            throw Error("Data not defined.")
        }

        const CONTROLLERS = [
            '0xC9901c379E672912D86D12Cb8f182cFaf5951940',
            '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'
        ]
        const DEFAULT_PARTITIONS = [ethers.utils.formatBytes32String("A")]
        const capTable = await erc1400.factory.deploy(data.org.Navn, data.org.Navn.substr(0, 3), 1, CONTROLLERS, DEFAULT_PARTITIONS)
        await capTable.deployed()
        const orgnr = data.org.Orgnr.toString();
        const tx = await capTableQue.instance.add(capTable.address, ethers.utils.formatBytes32String(orgnr))
        await tx.wait()
        history.push("/capTable/" + capTable.address + "/onboard")
    }

    const [selected, setSelected] = useState<OrgData>();
    return (
        <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Heading>Opprett aksjeeierbok</Heading>
                <Box gap="medium" margin="large">

                    <Box gap="small">
                        <Text>Søk</Text>
                        <Grid columns={["flex", "auto"]}>
                            <Controller
                                render={({ value, onChange }) =>
                                    <Select
                                        options={orgList}
                                        value={selected}
                                        size="small"
                                        placeholder="Velg et selskap"
                                        emptySearchMessage={isSearchingBrreg ? "Søker..." : "Søk etter selskap med navn eller org nr."}
                                        focusIndicator={false}
                                        onSearch={(query) => setSearchQuery(query)}
                                        labelKey={(option: OrgData) => option.Navn + " | " + option.Orgnr}
                                        onChange={({ option }) => {
                                            setValue("org", option)
                                            setSelected(option)
                                            return option
                                        }}
                                        disabled={isSearchingBrreg}
                                    />
                                }
                                defaultValue={null}
                                name="org"
                                control={control}
                                rules={{ required: true }}
                            />

                            <Button size="small" icon={isSearchingBrreg ? <SpinnerDiamond color="brand" size="20"></SpinnerDiamond> : <Search></Search>}></Button>
                        </Grid>
                        <Box>
                            {errors.org && <Text color="red" size="small">* {errors.org.message}</Text>}
                        </Box>


                        {orgWatch && !isSearchingBrreg &&
                            <Box background="brand" pad="small">
                                <Grid columns={["1/3", "2/3"]} fill="horizontal" gap="small">
                                    <Text size="xsmall">Org nr.</Text>
                                    <Text size="small" weight="bold">{orgWatch.Orgnr}</Text>

                                    <Text size="xsmall">Navn</Text>
                                    <Text size="small" weight="bold">{orgWatch.Navn}</Text>

                                    <Text size="xsmall">Kapital</Text>
                                    <Text size="xsmall">{formatCurrency(orgWatch.Kapital)}</Text>

                                    <Text size="xsmall">Aksjer</Text>
                                    <Text size="xsmall">{orgWatch.Kapital / orgWatch.Aksjer}</Text>

                                    <Text size="xsmall">Vedtektsdato</Text>
                                    <Text size="xsmall">{orgWatch.Vedtektsdato}</Text>
                                </Grid>
                            </Box>
                        }

                    </Box>

                    {orgWatch &&
                        <Button
                            type="submit"
                            disabled={formState.isSubmitting /* || Object.keys(formState.touched).length === 0 */}
                            color="brand"
                            label="Opprett aksjeeierbok"
                            margin={{ /* top: "medium" */ }}
                            size="large"
                        ></Button>
                    }
                </Box>
            </form >
        </Box>
    )
}
