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

interface ShadowedProps {
  readonly isActive: boolean;
  readonly isActive2: boolean;
  readonly isActive3: boolean;
}

const Filter = styled.div<ShadowedProps>`
  padding: 20px;
  cursor: pointer;
  background-color: ${(props) =>
    props.isActive === true ? "#0ad4fa" : "rgba(0,0,0,1)"};
  background-color: ${(props) =>
    props.isActive2 === true ? "#0ad4fa" : "rgba(0,0,0,1)"};
  background-color: ${(props) =>
    props.isActive3 === true ? "#0ad4fa" : "rgba(0,0,0,1)"};
`;

const Layout = () => {
  const [active, setActive] = useState<number>(1);
// 
  const handleClick = (n = 1) => {
    setActive(n);
    console.log(n);
  };

  return (
    <LayoutContainer>
      <Products>
        <Product>16 of 32 products</Product>
        <Product>Sort by: </Product>

        <Filter isActive={true} isActive2={false} isActive3={false}>
          Most recent
        </Filter>
        <Filter isActive={false} isActive2={true} isActive3={false}>
          Lowest price
        </Filter>
        <Filter isActive={false} isActive2={false} isActive3={true}>
          Highest price
        </Filter>
      </Products>
    </LayoutContainer>
  );
};

export default Layout;
