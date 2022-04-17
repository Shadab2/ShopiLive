import React from "react";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 0.6rem 2rem;
  max-height: 5rem;
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
  gap: 1rem;
`;
const Button = styled.li`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 1rem 2rem;
  color: #333;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const Para = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Navbar = () => {
  return (
    <Wrapper>
      <span>
        <FaBars size={28} />
      </span>
      <span>MULTIKART</span>
      <ButtonBox>
        <Button href="#!">
          <Para>HOME</Para>
          <RiArrowDropDownLine size={40} />
        </Button>
        <Button href="#!">SHOP</Button>
        <Button href="#!">PRODUCTS</Button>
        <Button href="#!">FEATURES</Button>
        <Button href="#!">PAGES</Button>
        <Button href="#!">BLOGS</Button>
      </ButtonBox>
      <FlexWrapper>
        <MdSearch size={28} />
        <IoSettingsOutline size={28} />
        <AiOutlineShoppingCart size={28} />
      </FlexWrapper>
    </Wrapper>
  );
};

export default Navbar;
