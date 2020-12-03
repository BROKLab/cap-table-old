import { Box, Footer, Grommet, Text, Main, Paragraph } from "grommet";
import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Symfoni } from "./hardhat/SymfoniContext";

import { Navigation } from './components/ui/Navigation';
import { Theme } from "./assets/Theme";
import { Home } from "./pages/Home";
import { CapTableCreate } from "./components/CapTable/CapTableCreate";
import { CapTablePage } from "./pages/CapTablePage";
import { CapTableQuePage } from "./pages/CapTableQuePage";
import { CapTableRegistryPage } from "./pages/CapTableRegistryPage";


function App() {

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Grommet theme={Theme}>
        <Symfoni autoInit={true} showLoading={true}>
          <Box height={{ min: "100vh" }}>
            {/* Navigation */}
            <Navigation></Navigation>
            {/* Content swtich */}
            <Main pad="xlarge" height={{ min: "75vh" }} >
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/captable/create" component={CapTableCreate} />
                <Route path="/capTable/:address" component={CapTablePage} />
                <Route path="/que" component={CapTableQuePage} />
                <Route path="/register" component={CapTableRegistryPage} />
              </Switch>
            </Main>
            {/* footer */}
            <Footer background="brand" pad="medium" height={{ min: "10vh" }}>
              <Box align="center" justify="center" alignContent="center" fill="horizontal" >
                <Text textAlign="center" size="small">
                  <Paragraph>Brønnøysundregistrene Aksjeeierbok</Paragraph>
                  <Paragraph>Del av Brønnøysundregistrene Sandkasse</Paragraph>
                </Text>
              </Box>
            </Footer>

          </Box>
        </Symfoni>
      </Grommet>
    </BrowserRouter >
  );
}

export default App;
