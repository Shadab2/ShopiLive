import React, { useState } from "react";
import { IoArrowDownCircle } from "react-icons/io5";
import styled from "styled-components";

function DropDown() {
  const [close, setclose] = useState(true);

  const handleclose = () => {
    setclose((prev) => !prev);
  };
  return (
    <DropDownContainer className="border border-gray-300 px-[5%] py-3 ">
      <li className="list-none flex  items-center justify-between">
        <span className="text-lg tracking-wider font-semibold">Brands</span>
        <IoArrowDownCircle
          size={24}
          color="gray"
          className={`${
            close ? "rotate-0" : "rotate-[180deg]"
          } cursor-pointer transition-all duration-100`}
          onClick={handleclose}
        />
      </li>
      <Options close={close}>
        <ul
          className={`${
            !close ? "flex" : "hidden"
          } py-4 w-full list-none text-grayP flex-col gap-3 font-[500]`}
        >
          <li>Clothings</li>
          <li>Bags</li>
          <li>Footwears</li>
          <li>Watches</li>
          <li>Accesories</li>
        </ul>
      </Options>
    </DropDownContainer>
  );
}

const DropDownContainer = styled.div`
  transition: all 0.2s ease-in-out;
`;

const Options = styled.div`
  height: ${(props) => (props.close ? "0px" : "180px")};
  width: 100%;
  transition: all 0.2s ease-in-out;
`;

export default DropDown;
