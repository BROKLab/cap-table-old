import { Box, Text } from 'grommet';
import React, { useContext } from 'react';
import { Route, Switch, useParams, useRouteMatch } from 'react-router-dom';
import { Details } from '../components/CapTable/Details';
import { OnBoard } from '../components/CapTable/OnBoard';
import { Loading } from '../components/ui/Loading';
import { ERC1400Context } from '../hardhat/SymfoniContext';

interface Props {
}

interface RouteParams {
    address: string
}
export const CapTablePage: React.FC<Props> = ({ ...props }) => {
    const { address } = useParams<RouteParams>();
    const { path } = useRouteMatch()

    const erc1400 = useContext(ERC1400Context);
    const capTable = erc1400.instance?.attach(address)

    return (
        <Box>
            {!capTable &&
                <Box align="center">
                    <Loading size={50}>
                        <Text>Laster aksjeeierboken...</Text>
                    </Loading>
                </Box>
            }
            {capTable &&
                <Switch>
                    <Route path={`${path}`} exact={true} render={() => <Details capTable={capTable} />} />
                    <Route path={`${path}/onboard`} exact={true} render={() => <OnBoard capTable={capTable} />} />
                </Switch>
            }
        </Box >
    )
}