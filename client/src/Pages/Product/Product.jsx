import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import styled from "styled-components";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import DropDown from "../../Components/Product/DropDown";
import NewProduct from "../../Components/Product/NewProduct";
import ProductDesc from "../../Components/Product/ProductDesc";
import ProductSlider from "../../Components/Product/ProductSlider";
import RelatedProducts from "../../Components/Product/RelatedProducts";
import Timer from "../../Components/Product/Timer";
import Topbar from "../../Components/Topbar/Topbar";
import { Button } from "../../Components/Utils/Button";
import { cardData } from "../../Data/cardData";
import { offeringList } from "../../Data/offerings";
import { lightTheme } from "../../Theme/LightTheme";

const sliderData = cardData[0];
const sliders = sliderData.image;

function Product() {
  const [index, setIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleSlider = (inc) => {
    setIndex((prev) => (prev + inc + sliders.length) % sliders.length);
  };

  const handleQuantity = (inc) => {
    setQuantity((prev) => Math.max(1, prev + inc));
  };
  return (
    <>
      <Topbar />
      <Navbar />
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
            <ProductView className="h-[800px] w-full flex">
              <div className="flex-[0.50]">
                <ProductSlider
                  sliders={sliders}
                  index={index}
                  setIndex={setIndex}
                  handleSlider={handleSlider}
                />
              </div>
              <div className="flex-[0.50] flex flex-col gap-3 p-2">
                <div className=" w-full">
                  <h1 className="font-semibold text-2xl ">
                    {sliderData.title}
                  </h1>
                  <div className="my-1">
                    <span className="text-gray-300 line-through mr-1 font-[500]">
                      {"$" + sliderData.price}
                    </span>
                    <span
                      style={{ color: lightTheme.main }}
                      className="text-[18px]"
                    >
                      {sliderData.discount + "% off"}
                    </span>
                  </div>
                  <span className="text-semi-bold text-3xl ">
                    {`$
                      ${
                        sliderData.price -
                        sliderData.price * (sliderData.discount / 100)
                      }`}
                  </span>
                  <div className="flex gap-2 my-3">
                    {sliders.map((item, id) => {
                      return (
                        <div
                          style={{ background: item.color }}
                          onClick={() => setIndex(id)}
                          className="h-8 w-8 rounded-full cursor-pointer shadow-md"
                        />
                      );
                    })}
                  </div>
                  <hr className="my-3" />
                </div>
                <div className="w-full">
                  <div className="flex justify-between font-semibold">
                    <span>Select Size</span>
                    <span>Size Chart</span>
                  </div>
                  <div className="flex gap-3 my-2">
                    <div className="h-8 w-8 rounded-full bg-teal-200 text-white flex justify-center items-center p-3 cursor-pointer">
                      S
                    </div>
                    <div className="h-8 w-8 rounded-full bg-teal-200 text-white flex justify-center items-center p-3 cursor-pointer">
                      M
                    </div>
                  </div>
                  <h1 className="font-semibold">Quantity</h1>
                  <div className="flex w-[150px] my-2">
                    <div
                      className="p-2 border cursor-pointer"
                      onClick={() => handleQuantity(-1)}
                    >
                      <AiOutlineLeft size={16} color="black" />
                    </div>
                    <div className="min-w-[80px] text-center py-1 border">
                      {quantity}
                    </div>
                    <div
                      className="p-2  border cursor-pointer"
                      onClick={() => handleQuantity(1)}
                    >
                      <AiOutlineRight size={16} color="black" />
                    </div>
                  </div>
                  <div className="flex gap-3 my-5">
                    <Button
                      color={lightTheme.main}
                      className="h-10 max-w-[200px]"
                    >
                      Add to Cart
                    </Button>
                    <Button
                      color={lightTheme.main}
                      className="h-10 max-w-[200px]"
                    >
                      Buy Now
                    </Button>
                  </div>
                  <hr className="my-3" />
                </div>
                <div className="w-full">
                  <h1 className="font-semibold">Product Details</h1>
                  <p className="text-gray-500 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore autem repellendus minima libero illum earum
                    aspernatur fuga explicabo veniam cumque eaque vero cum quam
                    suscipit neque, praesentium mollitia rerum, nihil impedit.
                    Blanditiis perspiciatis harum quaerat magnam odit sapiente
                    perferendis reprehenderit.
                  </p>
                  <hr className="my-3" />
                </div>
                <Timer />
              </div>
            </ProductView>
            <ProductDesc />
          </ProductContainer>
        </ProductContainerWrapper>
        <RelatedProducts />
      </div>
      <Footer />
    </>
  );
}

const ProductContainerWrapper = styled.section``;
const ProductContainer = styled.div``;
const ProductView = styled.div``;
const Features = styled.div``;

export default Product;
