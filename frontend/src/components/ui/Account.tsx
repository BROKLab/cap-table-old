

import { Box, Button, Grid, Select, Text } from 'grommet';
import React, { useContext, useState } from 'react';
import { CurrentAddressContext, HardhatContext } from './../../hardhat/HardhatContext';

interface Props { }

export const Account: React.FC<Props> = () => {

    const [address] = useContext(CurrentAddressContext)
    const { init, currentHardhatProvider, loading, providers } = useContext(HardhatContext)
    const [selectedProvider, setSelectedProvider] = useState<string>();

    return (
        <Box gap="small" >

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
            </Box>
        </Box>
    )
}