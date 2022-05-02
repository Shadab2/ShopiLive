import React from "react";
import styled from "styled-components";

const MContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  padding: 70px 0px 70px;
`;
const Img = styled.img`
  display: flex;
  height: 125px;
  width: 125px;
  opacity: 0.5;
  transition: 0.5s ease;

  margin: 0 auto;
  margin: 0px 48.5px;
  align-items: flex-start;
  &:hover {
    opacity: 1;
  }
`;
const Clients = styled.a`
  padding-left: 15px;
  padding-right: 15px;
  width: 222px;
  height: 125px;
`;

const Instagramb = () => {
  const Data = [
    {
      id: 1,
      img: "./assets/1a.png",
    },
    {
      id: 2,
      img: "./assets/2a.png",
    },
    {
      id: 3,
      img: "./assets/3a.png",
    },
    {
      id: 4,
      img: "./assets/4a.png",
    },
    {
      id: 5,
      img: "./assets/5a.png",
    },
  ];
  return (
    <>
      <MContainer>
        {Data.map((curr) => {
          return (
            <Container key={curr.id}>
              <Clients href="#">
                <Img src={curr.img} alt="Avatar" />
              </Clients>
            </Container>
          );
        })}
      </MContainer>
    </>
  );
};

export default Instagramb;
