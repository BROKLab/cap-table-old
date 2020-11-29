import { ethers } from 'ethers';
import { Box, Grid, Heading, Text } from 'grommet';
import React, { useContext, useEffect, useState } from 'react';
import { defaultProps } from 'spinners-react/lib/esm/style-inject.es-bc4b7987';
import { CapTableQueContext, CapTableRegistryContext } from '../../hardhat/HardhatContext';
import { ERC1400 } from '../../hardhat/typechain/ERC1400';
import { Balances } from './Balances';
import { Info } from './Info';
import { CapTableQueDetails } from './Que/CapTableQueDetails';

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


export const Details: React.FC<Props> = ({ ...props }) => {

    return (
        <Box>
            <Heading level={3}>Details</Heading>
            <Info capTable={props.capTable}></Info>
            <Heading level={3}>Aksjeliste</Heading>
            <Balances capTable={props.capTable}></Balances>
        </Box>
    )
}