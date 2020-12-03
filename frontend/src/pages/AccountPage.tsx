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

    return (
        <Box>
            <Switch>
                <Route path={`${path}/onboard`} exact={true}>
                </Route>
            </Switch>

        </Box >
    )
}