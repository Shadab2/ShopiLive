import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import styled from "styled-components";

function ProductSlider({ sliders, index, handleSlider, setIndex }) {
  return (
    <div className="w-full h-full">
      <div className="h-[65%] relative">
        {sliders.map((slider, id) => {
          return (
            <Slider active={index === id}>
              <img src={slider.source} alt="" className="w-full" />
            </Slider>
          );
        })}
        <div
          className="absolute p-1 rounded-full bg-white top-[50%] right-5 cursor-pointer"
          onClick={() => handleSlider(1)}
        >
          <AiOutlineRight size={16} color="brown" />
        </div>
        <div
          className="absolute p-1 rounded-full bg-white top-[50%] left-5 cursor-pointer"
          onClick={() => handleSlider(-1)}
        >
          <AiOutlineLeft size={16} color="brown" />
        </div>
      </div>
      <div className="flex gap-2 p-3">
        {sliders.map((item, id) => {
          return (
            <div onClick={() => setIndex(id)} className="cursor-pointer">
              <img
                src={item.source}
                alt=""
                style={{
                  border: index === id ? `1px solid gray` : "none",
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

const Slider = styled.div`
  height: 100%;
  padding: 20px;
  padding-top: 0px;
  position: absolute;
  inset: 0;
  opacity: ${(props) => (props.active ? 1 : 0)};
  visibility: ${(props) => (props.active ? "visible" : "hidden")};
  transition: all 0.3s ease-in-out;
`;

export default ProductSlider;
