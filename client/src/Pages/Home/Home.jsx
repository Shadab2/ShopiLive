import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Carousel from "../../Components/Carousel/Carousel";
import Footer from "../../Components/Footer/Footer";
import SpecialProducts from "../../Components/SpecialProducts/SpecialProducts";

const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <SpecialProducts />
      <div>Footer</div>
    </>
  );
};
export default Home;
