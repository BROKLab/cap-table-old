import { Accordion, AccordionPanel, Anchor, Box, Heading, Image, Paragraph, Text } from 'grommet';
import { Checkmark } from 'grommet-icons';
import React, { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { setInterval } from 'timers';
import { Loading } from '../components/ui/Loading';

interface Props {
}

interface RouteParams {
    address: string
}
export const AccountPage: React.FC<Props> = ({ ...props }) => {
    const { path } = useRouteMatch()

    const [hasWallet, sethasWallet] = useState(false);
    const [isCorrectChain, setIsCorrectChain] = useState(false);

    const checkWallet = (): boolean => {
        return "ethereum" in window
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if ("ethereum" in window) {
                sethasWallet(true)
                if (parseInt(window.ethereum.chainId, 16) === 55577) {
                    setIsCorrectChain(true)
                }
            }
        }, 2000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <Box>
            <Switch>
                <Route path={`${path}/onboard`} exact={true}>
                    <Heading level="2">Kom igang</Heading>
                    <Box>
                        <Accordion animate={true} multiple={true}>

                            <AccordionPanel label={<Text margin="small" size="large">Sette opp digital lommebok <span role="img" aria-label="fox">🦊</span></Text>} >
                                <Box margin={{ left: "large" }} pad="small" >

                                    <Paragraph fill>1. Installer <Anchor href="https://metamask.io/download.html" target="_blank" label="Metamask"></Anchor>. {hasWallet ? <Checkmark></Checkmark> : <Loading size={20}></Loading>} </Paragraph>
                                    <Paragraph fill>2. Metamask-oppsettet åpner en nettside. Velg «Kom i gang»</Paragraph>
                                    <Image style={{ maxHeight: "200px" }} alignSelf="start" src={require("./../assets/metamask/getStarted.png")} fit="contain"></Image>
                                    <Paragraph fill>3. Velg «Opprett en lommebok»</Paragraph>
                                    <Image style={{ maxHeight: "200px" }} alignSelf="start" src={require("./../assets/metamask/createWallet.png")} fit="contain"></Image>
                                    <Paragraph fill>4. Velg om du vil dele data med Metamask eller ikke</Paragraph>
                                    <Paragraph fill>5. Sett et passord, godkjenn brukervilkårene og velg «Opprett»</Paragraph>
                                    <Paragraph fill>6. Ta vare på den hemmelige sikkerhetskopifrasen. Dette er ikke essensielt nå siden dette er en prototype. Man står ikke i reel fare for å miste tilgangen til noe.</Paragraph>

                                </Box>
                            </AccordionPanel>

                            <AccordionPanel label={<Text margin="small" size="large">Koble til Brønnøysundregistrene nettverket<span role="img" aria-label="network">🕸</span></Text>}>
                                <Box margin={{ left: "large" }} pad="small" >
                                    <Paragraph fill>Metamask er i utgangspunktet koblet til «Offentlig Ethereum». Her må man ha kryptovalutaen «ether» for å operere. Patentstyrets blokkjedeløsning kjører ikke på offentlig Ethereum, men på en Symfoni Solutions-kjede sammen med Brønnøysundregistrene.</Paragraph>
                                    <Paragraph fill>1. Klikk på «Ethereum hovednettverk»</Paragraph>
                                    <Image style={{ maxHeight: "200px" }} alignSelf="start" src={require("./../assets/metamask/rpcMainnet.png")} fit="contain"></Image>
                                    <Paragraph fill>2. Velg «Tilpasset RPC»</Paragraph>
                                    <Image style={{ maxHeight: "200px" }} alignSelf="start" src={require("./../assets/metamask/customRpc.png")} fit="contain"></Image>
                                </Box>
                            </AccordionPanel>

                            <AccordionPanel label={<Text margin="small" size="large">Ferdig <span role="img" aria-label="document">🧾</span></Text>}>
                                <Box margin={{ left: "large" }} pad="small" >
                                    <Paragraph fill></Paragraph>
                                </Box>
                            </AccordionPanel>

                        </Accordion>
                    </Box>

                </Route>
            </Switch>
        </Box >
    )
}