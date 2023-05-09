import React, { useState } from "react";
import styled from "styled-components";

const LayoutContainer = styled.div`
  padding: 10px 100px;
`;

const Products = styled.div`
  padding: 10px;
  display: flex;
  font-size: 15px;
  align-items: center;
  border-bottom: 1px solid #ededed;
`;

const Product = styled.div`
  padding: 20px;
  color: #626262;
`;

const SortBy = styled.div`
  padding: 10px;
  color: #aeaeae;
  font-size: 15px;
`;

interface ButtonProps {
  selected: boolean;
}

const Button = styled.button<ButtonProps>`
  padding: 8px 8px;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? "#0ad4fa" : "#ededed")};
  color: ${({ selected }) => (selected ? "white" : "#acacac")};
  margin: 0 10px;
  border-radius: 13px;
  border: none;
  font-size: 15px;
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
        <SortBy>Sort by: </SortBy>
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
