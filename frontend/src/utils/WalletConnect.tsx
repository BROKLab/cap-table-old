import React, { useEffect, useState } from 'react';
import { Box } from 'grommet';

import WalletConnectClient from "@walletconnect/client";
import { CLIENT_EVENTS } from "@walletconnect/client";
import { PairingTypes } from "@walletconnect/types";
import { Image } from "grommet";

interface Props { }

export const WalletConnect: React.FC<Props> = ({ ...props }) => {
    const [walletConnectClient, setWalletConnectClient] = useState<WalletConnectClient>();
    const [walletConnectURL, setWalletConnectURL] = useState("");

    useEffect(() => {
        let subscribed = true
        const doAsync = async () => {
            const client = await WalletConnectClient.init({ relayProvider: "wss://staging.walletconnect.org" });
            console.log("Client", client)
            if (subscribed) {
                setWalletConnectClient(client)
            }
            client.on(CLIENT_EVENTS.pairing.proposal, async (proposal: PairingTypes.Proposal) => {
                // uri should be shared with the Wallet either through QR Code scanning or mobile deep linking
                const { uri } = proposal.signal.params;
                console.log("WalletConnect URL =>", uri)
                setWalletConnectURL(uri)
            });
            const session = await client.connect({
                metadata: {
                    name: "Brreg - Forvalt",
                    description: "Example Dapp",
                    url: "#",
                    icons: ["https://walletconnect.org/walletconnect-logo.png"],
                },
                permissions: {
                    blockchain: {
                        chains: ["eip155:55577"],
                    },
                    jsonrpc: {
                        methods: ["eth_sendTransaction", "personal_sign", "eth_signTypedData"],
                    },
                },
            });
        };
        doAsync();
        return () => { subscribed = false }
    }, [])
    return (
        <Box>
            {walletConnectURL &&
                <div>
                    <p>fagdsgdsg</p>
                    <Image src={`${"https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=" + walletConnectURL}`} ></Image>
                </div>
            }
        </Box>
    )
}