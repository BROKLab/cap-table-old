import { BigNumberish, BytesLike, ethers } from 'ethers';
import { Box, Button, Select, Text, TextInput } from 'grommet';
import React, { useContext, useEffect, useState } from 'react';
import { AuthProviderContext, CurrentAddressContext, SignerContext, SymfoniContext } from '../../hardhat/SymfoniContext';
import { ERC1400 } from '../../hardhat/typechain/ERC1400';

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
    const [currentAddress] = useContext(CurrentAddressContext)
    const authProvider = useContext(AuthProviderContext).instance?.attach(process.env.REACT_APP_AUTH_PROVIDER_ADDRESS ? process.env.REACT_APP_AUTH_PROVIDER_ADDRESS : ethers.constants.AddressZero)
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

    useEffect(() => {
        let subscribed = true
        const doAsync = async () => {
            if (authProvider) {
                const auth = await authProvider.hasAuthenticated(currentAddress, Math.floor(Date.now() / 1000))
                console.log(auth)
            }
            if (subscribed) {
            }
        };
        doAsync();
        return () => { subscribed = false }
    }, [authProvider, currentAddress])

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