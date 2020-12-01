import React from 'react';
import { Box, Text, Heading } from 'grommet';
import { BatchIssue } from './BatchIssue';
import { ERC1400 } from '../../hardhat/typechain/ERC1400';

interface Props {
    capTable: ERC1400
}

export const OnBoard: React.FC<Props> = ({ ...props }) => {

    return (
        <Box>
            <Heading>Opprett aksjeeierbok</Heading>

            <Text>
                <p>Kun selskapets <strong>styreleder</strong> kan flytte aksjeeierboken til Brønnøysundregistrene Aksjeeierbok.
                Når selskapet bruker denne løsningen, vil dette være en offisielle aksjeeierboken,
                og den tidligere aksjeeierboken selskapet hadde er ikke lengre gyldig.</p>

                <p>Aksjonærer i selskapet vil kunne sende aksjene sine til andre uten styrets samtykke,
                    og aksjeeierboken vil automatisk oppdateres fortløpende.
                </p>

                <strong>Ved å fortsette, bekrefter du følgende:</strong>

                <p>✔️ Jeg er styreleder i selskapet jeg valgte i forrige steg.</p>
                <p>✔️ Jeg er inneforstått med at løsningen ikke automatisk innrapporterer noe til offentlig sektor,
                    og at innrapportering forstatt må gjøres som før.</p>
                <p>✔️ Jeg er inneforstått med at løsningen er i Brønnøysundregistrene Sandkasse,
                    som betyr at Brønnøysundregistrene kan slutte å drifte løsningen. Det vil da være mulig å laste need aksjeeierboken i csv-format.</p>
                <p>✔️ Jeg er inneforstått med at løsningen er i Brønnøysundregistrene Sandkasse, som betyr at det kan være feil i løsningen.</p>
                <p>✔️ Jeg er inneforstått med at aksjeeierboken blir liggende offentlig tilgjengelig på nett.</p>
            </Text>
            <Box elevation="large" gap="small" pad="small" margin={{ top: "large" }}>
                <BatchIssue capTable={props.capTable}></BatchIssue>
            </Box>
        </Box>
    )
}