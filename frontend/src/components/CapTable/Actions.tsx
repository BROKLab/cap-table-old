import React, { useContext, useState } from 'react';
import { Box, Button } from 'grommet';
import { ERC1400 } from '../../hardhat/typechain/ERC1400';
import { Modal } from '../ui/Modal';
import { Transfer } from './Transfer';
import { HardhatContext } from '../../hardhat/HardhatContext';
import { BatchIssue } from './BatchIssue';

interface Props {
    capTable: ERC1400
}

export const Actions: React.FC<Props> = ({ ...props }) => {
    const { init } = useContext(HardhatContext)
    const [showTransfers, setShowTransfers] = useState(false);
    const [showIssue, setShowIssue] = useState(false);

    return (
        <Box gap="small" direction="row">
            <Button label={"Overføre"} onClick={() => setShowTransfers(!showTransfers)}></Button>
            <Button label={"Utestede"} onClick={() => setShowIssue(!showTransfers)}></Button>
            <Modal show={showTransfers} setShow={setShowTransfers}>
                <Transfer capTable={props.capTable} done={() => {
                    setShowTransfers(false)
                    init()
                }}></Transfer>
            </Modal>
            <Modal show={showIssue} setShow={setShowIssue}>
                <BatchIssue capTable={props.capTable} done={() => {
                    setShowTransfers(false)
                    init()
                }}></BatchIssue>
            </Modal>
        </Box>

    )
}