import React from "react";
import { FaInstagram } from "react-icons/fa";

import styled from "styled-components";

const MContainer = styled.div`
  padding-top: 70px;
  display: flex;
  background-color: white;
`;
const Text = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  transform: translate(0px, 0px) rotate(270deg);
  transition: all 0.6s 0s ease-in-out;
  opacity: 0;
`;
const Container = styled.div`
  position: relative;
  display: flex;
  height: 225px;
  overflow: hidden;
  &:hover {
    & > .rotate {
      color: rgba(255, 255, 255, 0.805);
      opacity: 1;
      transform: translate(0px, 0px) scale(0.25);

      transition-delay: 0s;
    }
  }
`;

const Img = styled.img`
  display: flex;
  align-items: flex-start;
`;
const Overlay = styled.div`
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: #ff946bbd;
  position: absolute;
  opacity: 0;
  transition: all 0.3s ease;
  background-color: #ff4b3b8c;

  &:hover {
    & .rotate {
      color: rgba(255, 255, 255, 0.805);
      opacity: 1;
      transform: translate(0px, 0px) scale(0.25);

      transition-delay: 0s;
    }
    opacity: 1;
  }
`;
const Instagram = () => {
  const Data = [
    {
      id: 1,
      img: "./assets/1st.jpg",
    },
    {
      id: 2,
      img: "./assets/2nd.jpg",
    },
    {
      id: 3,
      img: "./assets/3rd.jpg",
    },
    {
      id: 4,
      img: "./assets/4.jpg",
    },
    {
      id: 5,
      img: "./assets/5.jpg",
    },
    {
      id: 6,
      img: "./assets/6th.jpg",
    },
  ];
  return (
    <>
      <MContainer>
        {Data.map((curr) => {
          return (
            <Container key={curr.id}>
              <Img src={curr.img} alt="Avatar" />
              <Overlay>
                <Text className="rotate">
                  <FaInstagram fontSize={200} />
                </Text>
              </Overlay>
            </Container>
          );
        })}
      </MContainer>
    </>
  );
};

export default Instagram;
