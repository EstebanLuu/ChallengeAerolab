import React from "react";
import styled from "styled-components";
import header from "../assets/header.png";

const LandingContainer = styled.div``;

const Header = styled.div`
  width: 100%;
  img {
    width: 100%;
  }
  height: 400px;
  position: relative;
  overflow: hidden;
`;

const Electronics = styled.span`
  position: absolute;
  left: 100px;
  bottom: 50px;
  color: #ffffff;
  font-size: 50px;
  font-weight: 600;
`;

const LandingPage = () => {
  return (
    <LandingContainer>
      <Header>
        <img src={header} alt="" />
        <Electronics>Electronics</Electronics>
      </Header>
    </LandingContainer>
  );
};

export default LandingPage;
