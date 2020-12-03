

import { Box, Button, Grid, Select, Text } from 'grommet';
import React, { useContext, useState } from 'react';
import { CurrentAddressContext, SymfoniContext } from './../../hardhat/SymfoniContext';

interface Props { }

const SHOW_PROVIDER_SWITCH = localStorage.getItem("PROVIDER_SWITCH ") || process.env.NODE_ENV === "development"

export const Account: React.FC<Props> = () => {

    const [address] = useContext(CurrentAddressContext)
    const { init, currentHardhatProvider, loading, providers } = useContext(SymfoniContext)
    const [selectedProvider, setSelectedProvider] = useState<string>();

    return (
        <Box gap="small" >
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
        </Box>
    )
}