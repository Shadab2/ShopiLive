import React from 'react';
import styled from 'styled-components';

const Anchor = styled.a`
  text-decoration: none;
  color: #000;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    background-color: red;
    height: 2px;
    width: 0;
    left: 0;
    bottom: -0.5rem;
    transition: all 0.5s ease;
  }
  &:hover:after {
    width: 20%;
  }
`;

const SimpleLink = (prop) => {
  return (
    <li>
      <Anchor href='!#'>
        <p>{prop.text}</p>
      </Anchor>
    </li>
  );
};

export default SimpleLink;
