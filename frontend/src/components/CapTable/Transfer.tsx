import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, Select, TextInput, Text } from 'grommet';
import { BigNumberish, BytesLike, ethers } from 'ethers';
import { ERC1400 } from '../../hardhat/typechain/ERC1400';
import { SignerContext, SymfoniContext } from '../../hardhat/SymfoniContext';

interface Props {
    capTable: ERC1400
    done?: () => void
}


export const Transfer: React.FC<Props> = ({ ...props }) => {
    const [partitions, setPartitions] = useState<BytesLike[]>([]);
    const [partition, setPartition] = useState<BytesLike>();
    const [to, setTo] = useState<string>("");
    const [amount, setAmount] = useState<BigNumberish>(ethers.constants.Zero);
    const [signer] = useContext(SignerContext)
    const { init } = useContext(SymfoniContext)
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
    }, [props.capTable])

    const transfer = async () => {
        if (!signer)
            return init()
        if (!partition) return alert("Sett aksjeklasse")
        if (!to) return alert("Sett til addresse")
        if (amount === ethers.constants.Zero) return alert("Kan ikke overføre 0 beløp")
        const tx = await props.capTable.transferByPartition(partition, to, amount, "0x11",)
        await tx.wait()
        if (props.done) props.done()
    }

    return (
        <Box gap="small">
            <Box direction="row" gap="small">
                <Box basis="100%">
                    <Text size="small">Til Addresse</Text>
                    <TextInput
                        style={{ minWidth: "100%" }}
                        placeholder="Til addresse"
                        value={to}
                        onChange={event => setTo(event.target.value)}
                    />
                </Box>

            </Box>
            <Box direction="row" gap="small">
                <Box basis="2/3">
                    <Text size="small">Aksjeklasse</Text>
                    <Select
                        placeholder="Aksjeklasse"
                        options={partitions}
                        labelKey={option => ethers.utils.parseBytes32String(option)}
                        onChange={({ option }) => setPartition(option)}
                    />
                </Box>
                <Box basis="1/3">
                    <Text size="small">Beløp</Text>
                    <TextInput
                        placeholder="Antall aksjer"
                        value={ethers.utils.formatEther(amount.toString())}
                        type="number"
                        onChange={event => setAmount(ethers.utils.parseEther(event.target.value.toString()))}
                    />
                </Box>
            </Box>

            <Box>
                <Button label="Overfør aksjer" onClick={() => transfer()}></Button>
            </Box>
        </Box>
    )
}