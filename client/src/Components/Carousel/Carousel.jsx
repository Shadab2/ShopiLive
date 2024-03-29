import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { lightTheme } from "../../Theme/LightTheme";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Button } from "../Utils/Button";

const Data = [
  {
    title: "MEN FASHION",
    src: "/images/model5.png",
    color: `${lightTheme.main}`,
  },
  {
    title: "WOMEN FASHION",
    src: "/images/model4.png",
    color: `${lightTheme.green}`,
  },
  {
    title: "WINTER SALES",
    src: "/images/model1.png",
    color: `${lightTheme.indigo}`,
  },
  {
    title: "SUMMER SALES",
    src: "/images/model3.png",
    color: `${lightTheme.blue}`,
  },
];
const LEN = Data.length;

function Carousel() {
  const [index, setIndex] = useState(0);
  const handleSlide = (val) => {
    setIndex((prev) => (prev + val + LEN) % LEN);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleSlide(1);
    }, 8000);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <Container>
      <Arrow className="arrow" direction="left" onClick={() => handleSlide(-1)}>
        <AiOutlineLeft size={24} />
      </Arrow>
      {Data.map((item, idx) => {
        return (
          <ContentWrapper
            active={index === idx}
            prevSlide={(index - 1 + LEN) % LEN === idx}
            key={idx}
          >
            <Content key={idx}>
              <InfoContainer>
                <SubHeader>Welcome to Fashion</SubHeader>
                <Title>{item.title}</Title>
                <Button color={item.color}>SHOP NOW</Button>
              </InfoContainer>
              <ImgContainer color={item.color}>
                <Image src={item.src} />
              </ImgContainer>
            </Content>
          </ContentWrapper>
        );
      })}
      <Arrow className="arrow" direction="right" onClick={() => handleSlide(1)}>
        <AiOutlineRight size={24} />
      </Arrow>
      <Dots>
        {Data.map((item, ind) => (
          <Dot color={item.color} active={ind === index} key={ind} />
        ))}
      </Dots>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: calc(80vh);
  max-width: 100%;
  display: flex;
  background-color: ${lightTheme.light};
  position: relative;
  overflow: hidden;
  &:hover {
    & > .arrow {
      transform: translateX(0);
    }
  }
`;

const ContentWrapper = styled.div`
  height: 100%;
  position: absolute;
  inset: 0;
  visibility: ${(props) => (props.active ? "visible" : "hidden")};
  opacity: ${(props) => (props.active ? 1 : 0)};
  transform: translateX(
    ${({ active, prevSlide }) => {
      if (active) return 0;
      return prevSlide ? -100 : 100;
    }}vw
  );
  transition: all 0.5s ease-in-out;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${lightTheme.white};
  border-radius: 50%;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  cursor: pointer;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  transform: translateX(
    ${(props) => (props.direction === "left" ? "-80px" : "80px")}
  );
  margin: auto;
  transition: all 0.3s ease-in-out;
  opacity: 0, 5;
`;

const Content = styled.div`
  display: flex;
  height: 100%;
  width: 100vw;
  padding: 30px;
  padding-bottom: 0px;
  position: relative;
  &:before {
    content: " ";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url("/images/bg1.jpg");
    background-position: 0% 80%;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
const SubHeader = styled.span`
  color: ${lightTheme.gray};
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.4em;
`;
const InfoContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  position: relative;
  isolation: isolate;
  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    transform: translate(10%, 30%);
    width: 350px;
    height: 350px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    opacity: 0.7;
    z-index: -1;
  }
`;
const Image = styled.img`
  height: 100%;
  position: relative;
`;
const Title = styled.h1`
  font-size: 50px;
  font-weight: 600;
  margin: 10px 0px 20px 0px;
`;

const Dots = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  position: absolute;
  bottom: 30px;
  left: 30%;
`;

const Dot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  opacity: ${(props) => (props.active ? "1" : "0.5")};
  margin-right: 8px;
  background-color: ${(props) => props.color};
  transform: scale(${(props) => (props.active ? "1.4" : "1")});
  transition: all 0.3s ease-in-out;
`;
export default Carousel;
