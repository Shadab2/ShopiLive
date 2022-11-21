import React from "react";
import styled from "styled-components";
import { MdPhone } from "react-icons/md";
import { FaUser, FaHeart } from "react-icons/fa";
import { lightTheme } from "../../Theme/LightTheme";
import { Link } from "react-router-dom";
const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 7.4rem;
  max-height: 2rem;
  width: 100%;
  background-color: #f8f8f8;
`;
const FlexWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
const Para = styled.p`
  font-family: "Lato", sans-serif;
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

const AccntButton = styled.a`
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
  &:hover .activecolor {
    color: ${lightTheme.main};
  }
  &: hover .activestate{
    visibility: visible;
    transform:translateY(0rem);
  }
`;

const LoginContainer = styled.div`
    position:absolute;
    background-color: #fff;
    padding : 0.8rem;
    width: 8.4rem;
    top: 3.2rem;
    color: #999;
    box-shadow: 0 0 1px 0 #ebebeb;
    visibility:hidden;
    transition : all 0.3s linear;
    transform:translateY(4rem);
`;

const Topbar = () => {
  return (
    <Wrapper>
      <FlexWrapper>
        <Para>Welcome to Our store ShopiLive</Para>
        <Button href="tel:123-456-7890">
          <MdPhone style={{ color: `${lightTheme.main}` }} />
          <Para>Call Us: 123 - 456 - 7890</Para>
        </Button>
      </FlexWrapper>
      <FlexWrapper>
        <Button>
          <FaHeart size={14} />
          <Para>Wishlist</Para>
        </Button>
        <AccntButton >
          <FaUser className="activecolor" size={14} />
          <Para>My Account</Para>
          <LoginContainer className="activestate">
            <div>
              <Link to="/user/login">Login</Link>
            </div>
            <div>
              <Link to="/user/register">Register</Link>
            </div>
          </LoginContainer>
        </AccntButton>
      </FlexWrapper>

    </Wrapper>
  );
};

export default Topbar;
