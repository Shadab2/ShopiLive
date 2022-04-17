import React, { useState } from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { lightTheme } from "../../Theme/LightTheme";
function ImgCard({ data }) {
  const [index, setIndex] = useState(0);
  const changeIndex = (id) => setIndex(id);
  return (
    <CardContainer>
      <ImgWrapper bg={data.image[(index + 1) % data.image.length].source}>
        <MainImage src={data.image[index].source} alt="card" active />
        <OverLay>
          {data.image.map((item, ind) => {
            return (
              <Image
                key={item.id}
                src={item.source}
                alt="card"
                active={index === ind}
                onClick={() => changeIndex(ind)}
              />
            );
          })}
        </OverLay>
      </ImgWrapper>
      <InfoBox>
        <div className="d-flex">
          {Array(5)
            .fill(0)
            .map((item, ind) => (
              <AiFillStar
                key={ind}
                color={`${ind < data.stars ? lightTheme.orange : "#dddddd"}`}
              />
            ))}
        </div>
        <span>{data.title}</span>
        <span>
          <strong>${data.price}</strong>
          <span
            style={{
              textDecoration: "line-through",
              fontWeight: "400",
              fontSize: "0.7rem",
              color: `${lightTheme.gray}`,
              marginLeft: "3px",
            }}
          >
            $380.00
          </span>
        </span>
        <div className="d-flex mt-10">
          {data.image.map(({ color, id }, ind) => (
            <Balls color={color} key={id} onClick={() => changeIndex(ind)} />
          ))}
        </div>
      </InfoBox>
    </CardContainer>
  );
}
const CardContainer = styled.div`
  max-width: 250px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${(props) => (props.active ? 1 : 0.4)};
`;

const MainImage = styled(Image)`
  transition: all 0.5s ease-in-out;
`;
const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 350px;
  background: ${lightTheme.light};
  &:hover {
    ${MainImage} {
      opacity: 0;
    }
    &::before {
      opacity: 1;
      transform: translateX(0%);
    }
  }
  &:before {
    content: "";
    opacity: 0;
    position: absolute;
    inset: 0;
    transition-delay: 0.3s;
    transition: all 0.4s ease-in-out;
    transform: translateX(-70%);
    background-image: url(${(props) => props.bg});
    background-position: center;
    background-size: cover;
  }
`;

const OverLay = styled.div`
  position: absolute;
  width: 50px;
  bottom: 0;
  display: flex;
  flex-direction: column;
  padding: 10px;
  overflow: hidden;
  gap: 5px;
`;
const InfoBox = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const Balls = styled.div`
  height: 20px;
  width: 20px;
  background-color: ${(props) => props.color};
  border: 1px solid
    ${(props) => (props.color === "#fff" ? "black" : props.color)};
  border-radius: 50%;
  margin-right: 4px;
`;

export default ImgCard;
