import React from 'react';
import { Box, Heading } from 'grommet';
import { BatchIssue } from './BatchIssue';
import { ERC1400 } from '../../hardhat/typechain/ERC1400';

interface Props {
    capTable: ERC1400
}

export const OnBoard: React.FC<Props> = ({ ...props }) => {

    return (
        <Box>
            <Heading level={3}>Kom igang</Heading>
            <Box elevation="large" gap="small" pad="small" margin={{ top: "large" }}>
                <BatchIssue capTable={props.capTable}></BatchIssue>
            </Box>
        </Box>
    )
}