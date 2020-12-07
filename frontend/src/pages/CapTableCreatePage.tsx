import { ethers } from 'ethers';
import { Accordion, AccordionPanel, Box, Button, Heading, Paragraph } from 'grommet';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { BatchIssue } from '../components/CapTable/BatchIssue';
import { CapTableCreate } from '../components/CapTable/CapTableCreate';
import { ERC1400Context, SignerContext, SymfoniContext } from '../hardhat/SymfoniContext';
import { Transaction } from '../utils/ethers-helpers';

interface Props {
}

interface RouteParams {

}

enum STEP {
    SELECT_COMPANY = 0,
    ISSUE_SHARES = 1,
    CONFIRM = 2
}

export const CapTableCreatePage: React.FC<Props> = ({ ...props }) => {
    const [signer] = useContext(SignerContext)
    const { init } = useContext(SymfoniContext)
    const [step, setStep] = useState(STEP.SELECT_COMPANY);
    const [transactions, setTransactions] = useState<{ [step in STEP]: Transaction[] }>({
        0: [],
        1: [],
        2: []
    });
    const totalTransactions = Object.values(transactions).flat(1).length
    const capTable = useContext(ERC1400Context)
    const history = useHistory()


    const handleTransactions = async (txs: Transaction[], step: STEP) => {
        if (!signer) throw "NO signer"
        setStep(step + 1)
        setTransactions(old => ({ ...old, [step]: [...txs] }))
    }

    const deploy = async () => {
        if (!signer) return init()
        let deployedContract: string | undefined = undefined
        await Promise.all(Object.values(transactions).flat().map(async (tx) => {
            const txRes = await signer.sendTransaction(tx)
            const receipt = await txRes.wait()
            console.log(receipt.contractAddress)
            if (receipt.contractAddress) {
                deployedContract = receipt.contractAddress
            }
        }))
        if (deployedContract) {
            history.push("/captable/" + deployedContract)
        }
    }

    return (
        <Box gap="small" >
            <Heading>Opprett aksjeeierbok</Heading>
            <Accordion justify="start" activeIndex={step} gap="small">
                <AccordionPanel label="1. Velg selskap" onClickCapture={() => setStep(STEP.SELECT_COMPANY)}>
                    <Box pad="small">
                        <CapTableCreate transactions={(txs) => handleTransactions(txs, STEP.SELECT_COMPANY)}></CapTableCreate>
                    </Box>
                </AccordionPanel>
                <AccordionPanel label="2. Utsted aksjer" onClickCapture={() => setStep(STEP.ISSUE_SHARES)}>
                    <Box pad="medium">
                        {capTable.instance
                            ? <BatchIssue transactions={(txs) => handleTransactions(txs, STEP.ISSUE_SHARES)} capTable={capTable.instance} actions={<Button type="button" size="medium" label="Hopp over" onClick={() => handleTransactions([], STEP.ISSUE_SHARES)}></Button>}></BatchIssue>
                            : <Paragraph fill>Ingen kobling til aksjeeierboken</Paragraph>
                        }
                    </Box>
                </AccordionPanel>
                <AccordionPanel label="3. Bekreft" onClickCapture={() => setStep(STEP.CONFIRM)}>
                    <Box margin="small">
                        <Paragraph fill>Det kreves {totalTransactions} signereing for å opprette dette selskapet.</Paragraph>
                    </Box>
                </AccordionPanel>
            </Accordion>
            <Button size="large" label="Opprett aksjeeierbok" disabled={step !== STEP.CONFIRM || transactions[0].length !== 2} onClick={() => deploy()}></Button>
        </Box >
    )
}