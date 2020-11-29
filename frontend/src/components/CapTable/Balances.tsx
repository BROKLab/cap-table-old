import { ethers } from 'ethers';
import { Box, DataTable, Select, Text } from 'grommet';
import React, { useEffect, useState } from 'react';
import { ERC1400 } from '../../hardhat/typechain/ERC1400';

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


export const Balances: React.FC<Props> = ({ ...props }) => {
    const [partitions, setPartitions] = useState<string[]>([]);

    // Get partitions
    useEffect(() => {
        let subscribed = true
        const doAsync = async () => {
            const partitionsBytes32 = await props.capTable.totalPartitions()
            if (subscribed) {
                setPartitions(partitionsBytes32)
            }
        };
        doAsync();
        return () => { subscribed = false }
    }, [])

    return (
        <Box gap="small">
            <Select
                options={partitions}
                labelKey={option => ethers.utils.parseBytes32String(option)}
            ></Select>
            <DataTable
                data={[]}
                columns={[
                    {
                        property: 'address',
                        header: <Text>Adress</Text>,
                        primary: true,

                    },
                    {
                        property: 'balance',
                        header: <Text>Aksjer</Text>,

                    },
                    {
                        property: 'balanceByPartition',
                        header: <Text>Aksjeklasser</Text>,
                    },
                    {
                        property: 'collateral',
                        header: <Text>Sikkerhet</Text>,
                    }
                ]}
            ></DataTable>

        </Box>
    )
}