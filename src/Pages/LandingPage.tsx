import * as React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import "./LandingPage.css";
import Layout from "~/components/Layout";
import Myslider from "components/"

const LandingPageContainer = styled.div`
  height: 100vh;
`;

const LandingPage: React.FC = () => {
  return (
    <LandingPageContainer>
      <Navbar />
      <Header />
      <Layout />
      <MySlider />
      {/*  */}
    </LandingPageContainer>
  );
};

export default LandingPage;
