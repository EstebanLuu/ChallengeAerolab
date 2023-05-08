import React, { useState } from "react";
import styled from "styled-components";

const LayoutContainer = styled.div`
  padding: 50px 100px;
  background-color: red;
`;

const Products = styled.div`
  padding: 20px;
  background-color: blue;
  display: flex;
  align-items: center;
`;

const Product = styled.div`
  padding: 20px;
  background-color: green;
`;
//

interface ButtonProps {
  selected: boolean;
}

const Button = styled.button<ButtonProps>`
  padding: 20px;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? "#6ee8ff" : "grey")};
  color: white;
`;

const Layout = () => {
  const [selectedButton, setSelectedButton] = useState<number>(0);

  const handleButtonClick = (buttonIndex: number) => {
    setSelectedButton(buttonIndex);
  };

  return (
    <LayoutContainer>
      <Products>
        <Product>16 of 32 products</Product>
        <Product>Sort by: </Product>
        <Button
          selected={selectedButton === 0}
          onClick={() => handleButtonClick(0)}
        >
          Most recent
        </Button>
        <Button
          selected={selectedButton === 1}
          onClick={() => handleButtonClick(1)}
        >
          Lowest price
        </Button>
        <Button
          selected={selectedButton === 2}
          onClick={() => handleButtonClick(2)}
        >
          {" "}
          Highest price
        </Button>
      </Products>
    </LayoutContainer>
  );
};

export default Layout;
