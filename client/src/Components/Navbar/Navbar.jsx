import React from "react";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { lightTheme } from "../../Theme/LightTheme";

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 7.4rem;
  max-height: 5rem;
  width: 100%;
`;
const IconWrapper = styled.span`
  &:hover {
    cursor: pointer;
  }
`;
const FlexWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const ButtonBox = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;
const Button = styled.a`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 1rem 0.5rem;
  color: #333;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    color: ${lightTheme.main};
  }
`;

const Para = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  letter-spacing: 0.07em;
  font-weight: 500;
`;
const Navbar = () => {
  return (
    <Wrapper>
      <IconWrapper>
        <FaBars size={25} />
      </IconWrapper>

      <IconWrapper>SHOPILIVE</IconWrapper>
      <ButtonBox>
        <Button href="#!">
          <Para>HOME</Para>
          <RiArrowDropDownLine size={28} />
        </Button>
        <Button href="#!">
          <Para>SHOP</Para>
          <RiArrowDropDownLine size={28} />
        </Button>
        <Button href="#!">
          <Para>PRODUCTS</Para>
          <RiArrowDropDownLine size={28} />
        </Button>
        <Button href="#!">
          <Para>FEATURES</Para>
          <RiArrowDropDownLine size={28} />
        </Button>
        <Button href="#!">
          <Para>PAGES</Para>
          <RiArrowDropDownLine size={28} />
        </Button>
        <Button href="#!">
          <Para>BLOGS</Para>
          <RiArrowDropDownLine size={28} />
        </Button>
      </ButtonBox>
      <FlexWrapper>
        <IconWrapper>
          <MdSearch size={28} />
        </IconWrapper>
        <IconWrapper>
          <IoSettingsOutline size={28} />
        </IconWrapper>
        <IconWrapper>
          <AiOutlineShoppingCart size={28} />
        </IconWrapper>
      </FlexWrapper>
    </Wrapper>
  );
};

export default Navbar;
