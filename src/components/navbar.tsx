import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.svg";
import Coin from "../assets/icons/coin.svg";
import styled from "styled-components";
import { User } from "~/types";

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
  const [userData, setUserData] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://private-e7225d3-aerolabchallenge.apiary-mock.com/user/me`
        );
        const data = await response.json();
        setUserData([data]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <NavbarContainer>
      <img alt="Aerolab" src={Logo} />
      {userData.map((ele: User) => {
        return (
          <PersonalData key={ele.id}>
            <p>{ele.name}</p>
            <Puntos>
              <p>{ele.points}</p>
              <img alt="" src={Coin} />
            </Puntos>
          </PersonalData>
        );
      })}
    </NavbarContainer>
  );
};

export default Navbar;
