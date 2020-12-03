import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, Grid, Text, TextInput } from 'grommet';
import { CapTableQue } from '../../hardhat/typechain/CapTableQue';
import { CurrentAddressContext, SymfoniContext } from '../../hardhat/SymfoniContext';
import { Checkmark, Clear } from 'grommet-icons';
import { ethers } from 'ethers';

interface Props {
    capTableQue: CapTableQue,
    capTableAddress: string,
}

export const ProcessQue: React.FC<Props> = ({ ...props }) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [currentAddress] = useContext(CurrentAddressContext)
    const { init } = useContext(SymfoniContext)
    const [reason, setReason] = useState("");

    useEffect(() => {
        let subscribed = true
        const doAsync = async () => {
            const controllers = await props.capTableQue.controllers()
            if (subscribed) {
                setIsAdmin(controllers.indexOf(currentAddress) !== -1)
            }
        };
        doAsync();
        return () => { subscribed = false }
    }, [currentAddress, props.capTableQue])

    const processQue = async (decision: boolean) => {
        const reasonBytes32 = ethers.utils.formatBytes32String(reason)

        const tx = await props.capTableQue.process(props.capTableAddress, decision, reasonBytes32)
        await tx.wait()
        init()
    }

    return (
        <Box>
            {!isAdmin &&
                <Text>Du er ikke administrator for Aksjeregister kø</Text>
            }
            {isAdmin &&
                <Grid gap="small">
                    <TextInput
                        placeholder="Årsak..."
                        value={reason}
                        onChange={event => setReason(event.target.value)}
                        size="small"
                    />
                    <Button
                        icon={<Clear />}
                        color="red"
                        label="Avslå"
                        onClick={() => processQue(false)}
                        size="small"
                        disabled={!reason || reason === ""}
                    />
                    <Button
                        icon={<Checkmark />}
                        color="green"
                        label="Godkjenn"
                        onClick={() => processQue(true)}
                        size="small"
                        disabled={!reason || reason === ""}
                    />
                </Grid>
            }
        </Box>
    )
}