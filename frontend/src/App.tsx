import { Box, Footer, Grommet, Heading, Main } from "grommet";
import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Hardhat } from "./hardhat/HardhatContext";

import { Navigation } from './components/ui/Navigation';
import { Theme } from "./assets/Theme";
import { Home } from "./pages/Home";


function App() {

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Grommet theme={Theme}>
        <Hardhat autoInit={true} showLoading={false}>
          <Box height={{ min: "100vh" }}>
            {/* Navigation */}
            <Navigation></Navigation>
            {/* Content swtich */}
            <Main pad="xlarge" height={{ min: "75vh" }} >
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
              </Switch>
            </Main>
            {/* footer */}
            <Footer background="brand" pad="medium" height={{ min: "10vh" }}>
              <Box align="center" justify="center" alignContent="center" fill="horizontal" >
                <Heading level="4">Laget av Brønnøysundregistrene</Heading>
              </Box>
            </Footer>

          </Box>
        </Hardhat>
      </Grommet>
    </BrowserRouter >
  );
}

export default App;
