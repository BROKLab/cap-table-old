

import { ethers } from 'ethers';
import { Anchor, Box, Button, DropButton, Grid, Image, Paragraph, Select, Text } from 'grommet';
import { User } from 'grommet-icons';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../utils/AuthContext';
import { CurrentAddressContext, SymfoniContext } from './../../hardhat/SymfoniContext';
import { Modal } from './Modal';

interface Props { }

const SHOW_PROVIDER_SWITCH = localStorage.getItem("PROVIDER_SWITCH") === "true" /* || process.env.NODE_ENV === "development" ? "true" : "false" */
export const Account: React.FC<Props> = () => {

    const [address] = useContext(CurrentAddressContext)
    const { init, currentHardhatProvider, loading, providers } = useContext(SymfoniContext)
    const [selectedProvider, setSelectedProvider] = useState<string>();
    const { user, logOut } = useContext(AuthContext)

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


    const [showDisconnect, setShowDisconnect] = useState(false);
    return (
        <Box pad="small">
            {SHOW_PROVIDER_SWITCH &&
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
            {!SHOW_PROVIDER_SWITCH &&
                <Box align="center">
                    {!user && (
                        <Link to="/account/onboard">
                            <Button size="small" label="Logg inn" hoverIndicator focusIndicator={false} />
                        </Link>
                    )}
                    {user && (
                        <Box pad="small">

                            <DropButton
                                label={user ? user.name : `${address.substr(0, 4)}..`}
                                icon={<User></User>}
                                size="medium"
                                reverse={true}
                                dropAlign={{ top: 'bottom', right: 'right' }}
                                dropContent={
                                    <Box pad="small" elevation="large" align="start">
                                        {logOut &&
                                            <Anchor label="Log ut" onClick={() => logOut()}></Anchor>
                                        }
                                    </Box>
                                }
                            />
                        </Box>
                        // <Grid columns={["flex", "flex"]} gap="small">
                        //     <Box border="all" alignContent="end" round={"full"}>

                        //     </Box>
                        //     {/* <Button size="small" icon={<User></User>} label={`${address.substr(0, 4)}..`} hoverIndicator={false} style={{ cursor: "not-allowed" }}></Button>
                        //     <Button size="small" label={"Logg ut"} onClick={() => setShowDisconnect(true)}></Button> */}
                        // </Grid>
                    )}
                </Box>
            }
            <Modal setShow={setShowDisconnect} show={showDisconnect}>
                <Box margin="small">
                    <Paragraph fill>Gå inn i Metamask.</Paragraph>
                    <Paragraph fill>Klikk på der det står tilkoblet</Paragraph>
                    <Paragraph fill>Koble fra den addressen du ønsker</Paragraph>
                    <Image style={{ maxHeight: "300px" }} alignSelf="center" src={require("./../../assets/metamask/disconnect.png")} fit="contain"></Image>
                </Box>
            </Modal>
        </Box>
    )
}