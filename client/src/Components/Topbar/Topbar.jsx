import React from 'react';
import styled from 'styled-components';
import { MdPhone } from 'react-icons/md';
import { FaUser, FaHeart } from 'react-icons/fa';
import { lightTheme } from '../../Theme/LightTheme';
const Wrapper = styled.header`
  display: flex;
  align-items: center;
  /* justify-content: space-around; */
  justify-content: space-between;
  padding: 1.6rem 7.4rem;
  max-height: 2rem;
  width: 100%;
  /* gap: 2rem; */
  background-color: #f8f8f8;
`;
const FlexWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
const Para = styled.p`
  font-family: 'Lato', sans-serif;
  color: #999;
  font-size: 0.92rem;
`;

const Button = styled.a`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 1rem 0.5rem;
  color: #999;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    color: ${lightTheme.main};
  }
`;

const Topbar = () => {
  return (
    <Wrapper>
      <FlexWrapper>
        <Para>Welcome to Our store Multikart</Para>
        <Button href='tel:123-456-7890'>
          <MdPhone style={{ color: `${lightTheme.main}` }} />
          <Para>Call Us: 123 - 456 - 7890</Para>
        </Button>
      </FlexWrapper>
      <FlexWrapper>
        <Button>
          <FaHeart size={14} />
          <Para>Wishlist</Para>
        </Button>
        <Button>
          <FaUser size={14} />
          <Para>My Account</Para>
        </Button>
      </FlexWrapper>
    </Wrapper>
  );
};

export default Topbar;
