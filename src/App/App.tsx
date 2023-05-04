import * as React from "react";
import LandingPage from "../Pages/LandingPage";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import "./app.css";

const AppContainer = styled.div`
  height: 100vh;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <Navbar />
      <LandingPage />
    </AppContainer>
  );
};

export default App;
