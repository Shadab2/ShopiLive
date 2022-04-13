import React from "react";
import styled from "styled-components";

function FlexContainer({ children, props }) {
  return <Container {...props}>{children}</Container>;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ column }) =>
    column &&
    `
    flex-direction:column;
  `}
`;

export default FlexContainer;
