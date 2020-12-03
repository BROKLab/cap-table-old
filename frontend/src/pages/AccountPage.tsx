import { Accordion, AccordionPanel, Anchor, Box, Button, Heading, Image, Paragraph, Text } from 'grommet';
import { Checkmark } from 'grommet-icons';
import React, { useEffect, useState } from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import { setInterval } from 'timers';
import { Loading } from '../components/ui/Loading';

interface Props {
}

interface RouteParams {
    address: string
}
export const AccountPage: React.FC<Props> = ({ ...props }) => {
    const { path } = useRouteMatch()
    const [steps] = useState([
        {
            active: true,
            step: 0,
            title: "Sette opp digital lommebok 🦊",
            content: () => (
                <Box>
                    <Paragraph fill>1. Installer <Anchor href="https://metamask.io/download.html" target="_blank" label="Metamask"></Anchor>. (søker etter Metamask {hasWallet ? <Checkmark></Checkmark> : <Loading size={20}></Loading>}) </Paragraph>
                    <Paragraph fill>2. Metamask-oppsettet åpner en nettside. Velg «Kom i gang»</Paragraph>
                    <Image style={{ maxHeight: "200px" }} alignSelf="start" src={require("./../assets/metamask/getStarted.png")} fit="contain"></Image>
                    <Paragraph fill>3. Velg «Opprett en lommebok»</Paragraph>
                    <Image style={{ maxHeight: "200px" }} alignSelf="start" src={require("./../assets/metamask/createWallet.png")} fit="contain"></Image>
                    {isCorrectChain ? "Correctchain" : "No chain"}
                </Box>
            )
        },
        {
            active: false,
            step: 1,
            title: "2. Koble til Brønnøysundregistrene nettverket 🕸",
            content: () => (
                <Box >
                    <Paragraph>1. Installer <Anchor href="https://metamask.io/download.html" target="_blank" label="Metamask"></Anchor></Paragraph>
                </Box>
            )
        },
        {
            active: true,
            step: 2,
            title: "3. Ferdig 🧾",
            content: () => (
                <Box >
                    <Link to="/register/list">
                        <Button size="small" label="Gå til Aksjeeierbokregisteret" hoverIndicator focusIndicator={false} />
                    </Link>
                </Box>
            )
        }
    ]);

    const [hasWallet, sethasWallet] = useState(false);
    const [isCorrectChain, setIsCorrectChain] = useState(false);


    useEffect(() => {
        let subscribed = true
        let foundWallet = false
        const interval = setInterval(() => {
            console.log("Checking for Metamask")
            if ("ethereum" in window) {
                foundWallet = true
                if (subscribed) {
                    sethasWallet(true)
                }
                if (parseInt(window.ethereum.chainId, 16) === 55577) {
                    setIsCorrectChain(true)
                }
            }
        }, 2000)
        if (foundWallet) {
            clearInterval(interval)
        }
        return () => {
            subscribed = false;
            clearInterval(interval)
        }
    }, [])

    const stepTitle = (text: string) => (
        <Text margin="small" size="large" >{text}</Text>
    )

    return (
        <Box>
            <Switch>
                <Route path={`${path}/onboard`} exact={true}>
                    <Heading level="2">Kom igang</Heading>
                    <Box>
                        <Accordion animate={true} multiple={true} activeIndex={steps.filter(a => a.active).map((a) => a.step)}>
                            {steps.map(step => (
                                <AccordionPanel label={stepTitle(step.title)}>
                                    <Box margin={{ left: "large" }} pad="small" >
                                        {step.content()}
                                    </Box>
                                </AccordionPanel>
                            ))}
                        </Accordion>
                    </Box>

                </Route>
            </Switch>
        </Box >
    )
}