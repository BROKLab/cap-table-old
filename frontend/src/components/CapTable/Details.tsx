import React, { useContext, useEffect, useState } from 'react';
import { Box, Grid, Heading, Text } from 'grommet';
import { ERC1400 } from '../../hardhat/typechain/ERC1400';
import { ethers } from 'ethers';
import { CapTableQueContext, CapTableRegistryContext } from '../../hardhat/HardhatContext';
import { CapTableQueDetails } from './Que/CapTableQueDetails';
import { defaultProps } from 'spinners-react/lib/esm/style-inject.es-bc4b7987';

interface Props {
    capTable: ERC1400
}
interface CapTableData {
    name: string
    totalSupply: string
}
interface CapTableRegistryData {
    uuid: string
    active: boolean
}


export const Details: React.FC<Props> = ({ capTable, ...pops }) => {
    const [data, setData] = useState<CapTableData>();
    const [registryData, setRegistryData] = useState<CapTableRegistryData>();
    const [uuid, setUuid] = useState("");
    const capTableRegistry = useContext(CapTableRegistryContext)
    const capTableQue = useContext(CapTableQueContext)

    useEffect(() => {
        let subscribed = true
        const doAsync = async () => {
            const name = await capTable.name().catch(() => "No company found");
            const totalSupplyBN = await capTable
                .totalSupply()
                .catch(() => ethers.constants.Zero);
            const totalSupply = ethers.utils.formatEther(totalSupplyBN);
            if (subscribed) {
                setData({ name, totalSupply });
            }
            if (capTableRegistry.instance) {
                const { uuid, active } = await capTableRegistry.instance.info(capTable.address)
                if (subscribed) {
                    setRegistryData({
                        uuid: uuid === ethers.constants.HashZero ? "Ikke opprettet" : uuid,
                        active: active
                    })
                }
            }
        };
        doAsync();
        return () => { subscribed = false }
    }, [])

    return (
        <Box>
            <Heading level={3}>Details</Heading>
            <Box gap="small">
                {data &&
                    <Grid columns={["small", "flex"]}>
                        <Text>Name</Text>
                        <Text weight="bold">{data.name}</Text>
                    </Grid>
                }
                {registryData &&
                    <Grid columns={["small", "flex"]}>
                        <Text >Orginisasjonsnummer</Text>
                        <Text weight="bold">{registryData.uuid}</Text>
                    </Grid>
                }
                {registryData &&
                    <Grid columns={["small", "flex"]}>
                        <Text >Aktivt</Text>
                        <Text weight="bold">{registryData.active ? "Ja" : "Nei"}</Text>
                    </Grid>
                }
                {data &&
                    <Grid columns={["small", "flex"]}>
                        <Text >Antall aksjer</Text>
                        <Text weight="bold">{data.totalSupply}</Text>
                    </Grid>
                }
                {registryData && !registryData.active && capTableQue.instance &&
                    <CapTableQueDetails capTableQue={capTableQue.instance} capTableAddress={capTable.address}></CapTableQueDetails>
                }

            </Box>
        </Box>
    )
}