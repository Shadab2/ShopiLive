import React from "react";
import styled from "styled-components";
import { lightTheme } from "../../Theme/LightTheme";

function Parallax() {
  return (
    <Container>
      <Wrapper>
        <span style={{ color: "red", fontSize: "4rem" }}>2021</span>
        <Title>FASHION TRENDS</Title>
        <SubTitle>SPECIAL OFFER</SubTitle>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  background: transparent;
  height: 100vh;
`;

const Wrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-weight: 600;
  font-size: 3.5rem;
  margin-bottom: 10px;
`;
const SubTitle = styled.span`
  font-size: 2rem;
  line-height: 1rem;
  letter-spacing: 4px;
  color: ${lightTheme.grayDark};
`;

export default Parallax;
