import React, { useState } from "react";
import styled from "styled-components";
import { cardData } from "../../Data/cardData";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
import { lightTheme } from "../../Theme/LightTheme";

function NewProduct() {
  const [index, setIndex] = useState(0);
  const changeSlider = (increment) => {
    const len = cardData.length;
    setIndex((prev) => (prev + increment + len) % cardData.length);
  };
  return (
    <NewProductContainer>
      <div className="flex items-center justify-between pb-2 border-b border-b-gray-300 mb-4">
        <span className="text-lg tracking-wider font-semibold">
          New Products
        </span>
        <div className="flex">
          <IoIosArrowBack
            size={20}
            className="cursor-pointer"
            onClick={() => changeSlider(-1)}
          />
          <IoIosArrowForward
            size={20}
            className="cursor-pointer"
            onClick={() => changeSlider(1)}
          />
        </div>
      </div>
      <div className="h-[350px] overflow-hidden py-2 relative">
        {cardData.map((item, id) => (
          <Slider
            className="flex flex-col gap-2"
            key={id}
            active={index === id}
          >
            {Array(3)
              .fill(0)
              .map((_, ind) => {
                return (
                  <div className="h-[33%] mb-2 flex gap-1" key={ind}>
                    <img src={cardData[index].image[ind].source} alt="" />
                    <div className="px-2">
                      <div className="flex gap-1 items-center h-[33%] ">
                        {Array(5)
                          .fill(0)
                          .map((_, ind) => (
                            <AiFillStar
                              key={ind}
                              color={`${
                                ind < cardData[index].stars
                                  ? lightTheme.orange
                                  : "#dddddd"
                              }`}
                              size={14}
                            />
                          ))}
                      </div>
                      <h1 className="font-[500] text-grayP text-s">
                        {item.title}
                      </h1>
                      <span className="font-semibold text-teal-800">
                        ${item.price}
                      </span>
                    </div>
                  </div>
                );
              })}
          </Slider>
        ))}
      </div>
    </NewProductContainer>
  );
}
const NewProductContainer = styled.div``;
const Slider = styled.div`
  height: 320px;
  position: absolute;
  inset: 0;
  opacity: ${(props) => (props.active ? 1 : 0)};
  visibility: ${(props) => (props.active ? "visible" : "hidden")};
  transition: all 0.3s ease-in-out;
`;

export default NewProduct;
