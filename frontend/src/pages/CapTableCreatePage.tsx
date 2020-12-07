import { ethers } from 'ethers';
import { Accordion, AccordionPanel, Box, Button, Heading, Paragraph } from 'grommet';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { BatchIssue } from '../components/CapTable/BatchIssue';
import { CapTableCreate } from '../components/CapTable/CapTableCreate';
import { Loading } from '../components/ui/Loading';
import { ERC1400Context, SignerContext, SymfoniContext } from '../hardhat/SymfoniContext';
import { Transaction } from '../utils/ethers-helpers';

interface Props {
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
    const [capTableAddress, setcapTableAddress] = useState(ethers.constants.AddressZero);
    const capTable = useContext(ERC1400Context)
    const [deploying, setDeploying] = useState(false);

    const history = useHistory()

    useEffect(() => {
        console.log(capTableAddress)

    }, [capTableAddress])

    const handleCapTableTransactions = async (capTableAddress: string, txs: Transaction[]) => {
        setcapTableAddress(capTableAddress)
        handleTransactions(txs, STEP.SELECT_COMPANY)
    }
    const handleTransactions = async (txs: Transaction[], step: STEP) => {
        if (!signer) throw Error("NO signer")
        setStep(step + 1)
        setTransactions(old => ({ ...old, [step]: [...txs] }))
    }

    const deploy = async () => {
        if (!signer) return init()
        setDeploying(true)
        let deployedContract: string | undefined = undefined
        await Object.values(transactions).reduce(async (prev, txs) => {
            await prev
            for (const tx of txs) {
                const txRes = await signer.sendTransaction(tx)
                const receipt = await txRes.wait()
                if (receipt.contractAddress) {
                    deployedContract = receipt.contractAddress
                }
            }
            return Promise.resolve()
        }, Promise.resolve())
        setDeploying(false)
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
                        <CapTableCreate capTableTransactions={handleCapTableTransactions}></CapTableCreate>
                    </Box>
                </AccordionPanel>
                <AccordionPanel label="2. Utsted aksjer" onClickCapture={() => setStep(STEP.ISSUE_SHARES)}>
                    <Box pad="medium">
                        {capTable.instance && capTableAddress !== ethers.constants.AddressZero
                            ? <BatchIssue transactions={(txs) => handleTransactions(txs, STEP.ISSUE_SHARES)} capTable={capTable.instance.attach(capTableAddress)} actions={<Button type="button" size="medium" label="Hopp over" onClick={() => handleTransactions([], STEP.ISSUE_SHARES)}></Button>}></BatchIssue>
                            : <Paragraph fill>Ingen kobling til aksjeeierboken</Paragraph>
                        }
                    </Box>
                </AccordionPanel>
                <AccordionPanel label="3. Bekreft" onClickCapture={() => setStep(STEP.CONFIRM)}>
                    <Box margin="small">
                        <Paragraph fill>Det kreves {totalTransactions} signereing for å opprette dette selskapet og utstede aksjene. Metamask vil forslå signering for deg.</Paragraph>
                    </Box>
                </AccordionPanel>
            </Accordion>
            <Button size="large" label="Opprett aksjeeierbok" disabled={step !== STEP.CONFIRM || transactions[0].length !== 2 || deploying} onClick={() => deploy()}></Button>
            {deploying &&
                <Box align="center" >
                    <Loading size={50}></Loading>

                </Box>
            }
        </Box >
    )
}