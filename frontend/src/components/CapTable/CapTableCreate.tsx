import React, { useContext, useEffect, useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import { Box, Button, Grid, Heading, Text, TextInput } from 'grommet';
import { ERC1400Context } from "../../hardhat/HardhatContext";
import { SpinnerDiamond } from 'spinners-react/lib/esm/SpinnerDiamond';
import { formatCurrency } from '../../utils/numbers';
import { getPasswordFromLocalstorage, removePassword } from '../../utils/passwordBlockAPI';
import axios from 'axios';

interface Props { }

interface FormData {
    searchInput: string
    name: string
    symbol: string
    orgNr: string
}

export interface OrgData {
    Aksjer: number
    Kapital: number
    Navn: string
    Orgnr: number
    Vedtektsdato: string
}


export const CapTableCreate: React.FC<Props> = () => {
    const { handleSubmit, watch, control, errors, setValue, formState } = useForm<FormData>({
        defaultValues: {
            name: "",
            searchInput: "",
            symbol: "",
            orgNr: ""
        }
    });

    const [orgData, setOrgData] = useState<OrgData>();
    const [isSearchingBrreg, setIsSearchingBrreg] = useState(false);
    const erc1400 = useContext(ERC1400Context)
    const searchInputWatch = watch("searchInput", "")

    useEffect(() => {
        if (process.env.NODE_ENV === "development") {
            setValue("searchInput", "915772137")
        }
    }, [setValue])

    useEffect(() => {
        const timer = setTimeout(async () => {
            if (searchInputWatch && !orgData) {
                setIsSearchingBrreg(true)
                const maybeOrgNr = +searchInputWatch
                setOrgData(undefined)

                const password = getPasswordFromLocalstorage()
                const res = isNaN(maybeOrgNr)
                    ?
                    await axios.get("https://auth-oracle.now.sh/api/v1/org", {
                        params: {
                            name: searchInputWatch,
                            password: password
                        }
                    }).catch(err => {
                        console.debug(err.message === "Request failed with status code 401");
                        if (err.message === "Request failed with status code 401") {
                            removePassword()
                        }
                        setIsSearchingBrreg(false)
                        console.debug("Fant ingen med navn", searchInputWatch);
                        return {
                            data: {
                                result: []
                            }
                        }
                    })
                    :
                    await axios.get("https://auth-oracle.now.sh/api/v1/org", {
                        params: {
                            orgnr: searchInputWatch.replace(/\s/g, ''),
                            password: password
                        }
                    }).catch(err => {
                        setIsSearchingBrreg(false)
                        console.log("Fant ingen med org nummer " + searchInputWatch.replace(/\s/g, ''));
                        return {
                            data: {
                                result: []
                            }
                        }
                    })
                console.log("Found in Brreg => ", res.data.result[0]);
                if (res.data.result[0])
                    setOrgData(res.data.result[0])
                setIsSearchingBrreg(false)
            }
        }, 500)
        return () => {
            clearTimeout(timer)
            setIsSearchingBrreg(false)
        }
    }, [orgData, searchInputWatch, setValue])


    const onSubmit = async (data: FormData) => {

    }

    return (
        <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Heading>Opprett aksjeeierbok</Heading>
                <Box gap="medium" margin="large">

                    <Box >
                        <Text>Søk</Text>
                        <Controller as={<TextInput />} name="searchInput" control={control} rules={{ required: true }} placeholder="Skriv selskapets navn eller org nummer for å søke..." />
                        {errors.searchInput && <Text color="red" size="small">* {errors.searchInput.message}</Text>}
                        {isSearchingBrreg &&
                            <Box align="center" >
                                <SpinnerDiamond color="brand" size="50"></SpinnerDiamond>
                                <Text>Søker i Brønnøysundregistrene...</Text>
                            </Box>
                        }

                        {orgData && !isSearchingBrreg &&
                            <Box margin="medium" background="brand" pad="small">
                                <Grid columns={["1/3", "2/3"]} fill="horizontal" gap="small">
                                    <Text size="xsmall">Org nr.</Text>
                                    <Text size="small" weight="bold">{orgData.Orgnr}</Text>

                                    <Text size="xsmall">Navn</Text>
                                    <Text size="small" weight="bold">{orgData.Navn}</Text>

                                    <Text size="xsmall">Kapital</Text>
                                    <Text size="xsmall">{formatCurrency(orgData.Kapital)}</Text>

                                    <Text size="xsmall">Aksjer</Text>
                                    <Text size="xsmall">{orgData.Kapital / orgData.Aksjer}</Text>

                                    <Text size="xsmall">Vedtektsdato</Text>
                                    <Text size="xsmall">{orgData.Vedtektsdato}</Text>
                                </Grid>
                            </Box>
                        }

                    </Box>

                    <Controller as={<TextInput hidden />} name="symbol" control={control} rules={{ required: true }} placeholder="Symbol for selskap..." />
                    {errors.symbol && <Text color="red" size="small">* {errors.symbol.message}</Text>}

                    <Controller as={<TextInput hidden />} name="name" control={control} rules={{ required: true }} placeholder="Navn på selskap..." />
                    {errors.name && <Text color="red" size="small">* {errors.name.message}</Text>}


                    <Button
                        type="submit"
                        disabled={formState.isSubmitting /* || Object.keys(formState.touched).length === 0 */}
                        color="brand"
                        label="Opprett aksjeeierbok"
                        margin={{ /* top: "medium" */ }}
                        size="large"
                    ></Button>
                </Box>
            </form >
        </Box>
    )
}