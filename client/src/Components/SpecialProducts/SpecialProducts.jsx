import React, { useState } from "react";
import NewArrival from "../../Components/NewArrival/NewArrival";
import { cardData } from "../../Data/cardData";
import styled from "styled-components";
import { lightTheme } from "../../Theme/LightTheme";

function SpecialProducts() {
  const [index, setIndex] = useState(0);
  return (
    <Container>
      <div style={{ position: "relative" }}>
        <Title>Special Products</Title>
        <Border />
      </div>
      <LinkContainer>
        <CategoryButton active={index === 0} onClick={() => setIndex(0)}>
          New Arrivals
        </CategoryButton>
        <CategoryButton active={index === 1} onClick={() => setIndex(1)}>
          Featured
        </CategoryButton>
        <CategoryButton active={index === 2} onClick={() => setIndex(2)}>
          Special
        </CategoryButton>
      </LinkContainer>
      <NewArrival data={cardData} />
    </Container>
  );
}

const Container = styled.div`
  padding: 40px 0px;
  background-color: ${lightTheme.white};
`;
const Title = styled.h1`
  margin: 20px 0px;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
`;

const Border = styled.div`
  width: 80px;
  height: 4px;
  background: ${lightTheme.main};
  position: absolute;
  bottom: -10px;
  left: 47%;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
  padding: 10px;
  gap: 1rem;
  text-transform: uppercase;
`;

const CategoryButton = styled.div`
  max-width: 250px;
  padding: 20px;
  font-size: 1.3rem;
  color: ${(props) => (props.active ? lightTheme.main : "black")};
  cursor: pointer;
`;

export default SpecialProducts;
