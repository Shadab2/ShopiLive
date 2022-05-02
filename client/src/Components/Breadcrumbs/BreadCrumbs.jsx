import React from "react";
// import "./breadcrumbs.css";
import { MdOutlineLocalShipping } from "react-icons/md";
import styled from "styled-components";

const Container = styled.div`
  margin: 50px 104.5px;
  padding: 0 15px;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
`;
const Media = styled.div`
  display: flex;
  padding: 23px 0px;
  align-items: center;
  position: relative;
  width: 100%;
  justify-content: center;
  border-right: 1px solid #ddd;
  &:hover {
    color: #ff4c3b;
    transition: 0.3s;
  }
  &:nth-child(3) {
    border-right: none;
  }
`;
const Component = styled.div`
  display: flex;
  padding: 35px 15px;
`;
const Img = styled.img`
  margin-right: 12px;
  height: 60px;
  width: 60px;
  &:hover {
    transform: scale(1.2);
    transition: 1s;
  }
`;
const Desc = styled.div`
  font-size: 14px;
`;
const Top = styled.div`
  margin-bottom: 5px;
`;
const Bottom = styled.div`
  color: black !important;
`;

const BreadCrumbs = () => {
  const Data = [
    {
      id: 1,
      img: "./assets/shipping.svg",
      title: "FREE SHIPPING",
      desc: "Free Shipping World",
    },
    {
      id: 2,
      img: "./assets/time.svg",
      title: "24 X 7 SERVICE",
      desc: "Online Service For New Customer",
    },
    {
      id: 3,
      img: "./assets/mic.svg",
      title: "FESTIVAL OFFER",
      desc: "New Online Special Festival Offer",
    },
  ];
  return (
    <>
      <Container>
        <Component>
          {Data.map((curr) => {
            return (
              <Media key={curr.id}>
                <div>
                  <Img src={curr.img} alt="" />
                </div>
                <Desc>
                  <Top>
                    <h4>{curr.title}</h4>
                  </Top>
                  <Bottom>
                    <p>{curr.desc}</p>
                  </Bottom>
                </Desc>
              </Media>
            );
          })}
        </Component>
      </Container>
    </>
  );
};

export default BreadCrumbs;