import logo from './logo.svg';
import './App.css';
import "@aws-amplify/ui-react/styles.css";
import {
  Button,
  Flex,
  Heading,
  Text,
  TextField,
  View,
  withAuthenticator,
  Image,
  Card
} from "@aws-amplify/ui-react";

import { Box, ChakraProvider } from "@chakra-ui/react";
import Header from "./comps/Header";
import Sidebar from "./comps/Sidebar";
import Home from "./Pages/home/Home";
import Settings from "./Pages/settings/Settings";
import WellbeingApps from "./Pages/wellbeingApps/WellbeingApps";
import CompanyView from "./Pages/companyView/CompanyView"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Teams from "./Pages/teams/Teams";


function App({ signOut }) {
  return (
    <ChakraProvider>
      <div className="App">
        <BrowserRouter>
          <Box>
            {/* <Show breakpoint="(min-width: 769px)"> */}
              <Sidebar />
            {/* </Show> */}
            <Box className="dashboardContent">
              <Header />
              <Box>
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route path="/teams" element={<Teams />} />
                  <Route path="/company-view" element={<CompanyView />} />
                  <Route path="/wellbeing-apps" element={<WellbeingApps />} />
                  <Route path="/settings" element={<Settings />} />
                </Routes>
              </Box>
            </Box>
          </Box>
        </BrowserRouter>
      </div>
    </ChakraProvider>
  );
}

export default withAuthenticator(App);
// export default App
