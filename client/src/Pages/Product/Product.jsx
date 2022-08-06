import React from "react";
import styled from "styled-components";
import DropDown from "../../Components/Product/DropDown";
import NewProduct from "../../Components/Product/NewProduct";
import { offeringList } from "../../Data/offerings";

function Product() {
  return (
    <div className="w-screen bg-white">
      <div className="w-100 flex items-center justify-between px-[5%] py-8 bg-gray-100">
        <h1 className="font-semibold text-lg">Product</h1>
        <div className="space-x-4">
          <span className="text-grayP font-[600]">Home</span>
          &nbsp;&nbsp; &#47;
          <span className="text-grayP font-[600]">Product</span>
        </div>
      </div>
      <ProductContainerWrapper className="flex  px-[5%] py-8 w-full">
        <div className="flex flex-col flex-[0.35] gap-8">
          <DropDown />
          <Features className="containe border border-gray-300 shadow-sm px-5">
            {offeringList.map((item) => (
              <div
                className="flex  flex-wrap items-center justify-center w-full  min-h-[100px] gap-2 border-b border-gray-300 last:border-0"
                key={item.id}
              >
                <img src={item.img} alt="" className="w-12 h-12" />
                <div className="w-[65%]">
                  <h1 className="text-base font-[500]">{item.title}</h1>
                  <p className="text-gray-500 font-[400] text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </Features>
          <NewProduct />
        </div>
        <ProductContainer className="flex flex-col flex-1">
          <ProductView className="h-[600px] w-full flex">
            <div className="flex-[0.45]"></div>
            <div className="flex-[0.55] bg-indigo-400"></div>
          </ProductView>
          <InfoMetric className="h-[200px] w-full bg-yellow-300"></InfoMetric>
        </ProductContainer>
      </ProductContainerWrapper>
    </div>
  );
}

const ProductContainerWrapper = styled.section``;
const ProductContainer = styled.div``;
const ProductView = styled.div``;
const InfoMetric = styled.div``;
const Features = styled.div``;

export default Product;
