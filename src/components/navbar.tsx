import React from "react";
import Logo from "../assets/logo.svg";
import Coin from "../assets/icons/coin.svg";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  img {
    width: 30px;
    height: 30px;
  }
`;

const PersonalData = styled.div`
  width: 200px;
  height: 50px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: hsl(0deg 0% 45.1%);
`;

const Puntos = styled.div`
  width: 90px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 17px;
  color: hsl(0deg 0% 45.1%);
  gap: 5px;
  background-color: hsl(0deg 0% 92.94%);
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <img alt="Aerolab" src={Logo} />
      <PersonalData>
        <p>John Kite</p>
        <Puntos>
          <p>6000</p>
          <img alt="" src={Coin} />
        </Puntos>
      </PersonalData>
    </NavbarContainer>
  );
};

export default Navbar;
