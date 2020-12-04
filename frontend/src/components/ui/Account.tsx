

import { ethers } from 'ethers';
import { Box, Button, Grid, Select, Text } from 'grommet';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CurrentAddressContext, SymfoniContext } from './../../hardhat/SymfoniContext';

interface Props { }

const SHOW_PROVIDER_SWITCH = localStorage.getItem("PROVIDER_SWITCH ") /* || process.env.NODE_ENV === "development" ? "true" : "false" */
export const Account: React.FC<Props> = () => {

    const [address] = useContext(CurrentAddressContext)
    const { init, currentHardhatProvider, loading, providers } = useContext(SymfoniContext)
    const [selectedProvider, setSelectedProvider] = useState<string>();

    // fund account
    useEffect(() => {
        const timeout = setTimeout(async () => {
            if (ethers.utils.isAddress(address)) {
                const provider = new ethers.providers.JsonRpcProvider({
                    url: "https://e0qchlost7-e0zi3w4q2r-rpc.de0-aws.kaleido.io",
                    user: "e0cteq8qnh",
                    password: "IY2scS2ywMZkinR5m4sS7GBs7EDgm4Mh9F1uUVkmKFI"
                });
                const balance = await provider.getBalance(address)
                if (balance.lt(ethers.utils.parseEther("0.1"))) {
                    console.debug("Balance below 0,1, start funding")
                    const wallet = new ethers.Wallet("0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80").connect(provider)
                    wallet.sendTransaction({ to: address, value: ethers.utils.parseEther("0.2") })
                } else {
                    console.debug("Account does not need funding")
                }
            }
        }, 1000);
        return () => {
            clearTimeout(timeout)
        }
    }, [address])

    return (
        <Box gap="small" >
            {SHOW_PROVIDER_SWITCH === "true" &&
                <Box>
                    <Grid gap="small" columns={["auto", "flex"]}>
                        <Select
                            options={providers}
                            size="small"
                            value={selectedProvider}
                            onChange={(option) => setSelectedProvider(option.value)}
                        ></Select>
                        <Button hoverIndicator focusIndicator={false} disabled={loading || currentHardhatProvider === selectedProvider} size="small" label={selectedProvider ? "Connect " + selectedProvider : "Connect"} onClick={() => init(selectedProvider)}></Button>
                    </Grid>
                    <Box alignContent="end" gap="small">
                        {address &&
                            <Text size="small" >Connected to: {currentHardhatProvider} with: {address.substr(0, 4) + ".." + address.substring(address.length - 3, address.length)}</Text>
                        }
                        {!address &&
                            <Text size="small">Ikke tilkoblet</Text>
                        }
                    </Box>
                </Box>
            }
            {SHOW_PROVIDER_SWITCH !== "true" &&
                <Box align="center">
                    {!address && (
                        <Link to="/account/onboard">
                            <Button size="small" label="Logg inn" hoverIndicator focusIndicator={false} />
                        </Link>
                    )}
                    {address && (
                        <Text>Innlogget som {address.substr(0, 4)}..</Text>
                    )}
                </Box>



            }
        </Box>
    )
}