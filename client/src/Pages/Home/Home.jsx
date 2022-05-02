import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Carousel from "../../Components/Carousel/Carousel";
import Footer from "../../Components/Footer/Footer";
import SpecialProducts from "../../Components/SpecialProducts/SpecialProducts";
import Topbar from "../../Components/Topbar/Topbar";
import Instagram from "../../Components/Instagram/Instagram";
import Instagramb from "../../Components/Instagramb/Instagramb";
import BreadCrumbs from "../../Components/Breadcrumbs/BreadCrumbs";

const Home = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <Carousel />
      <BreadCrumbs />
      <SpecialProducts />
      <Instagram />
      <Instagramb />
      <Footer />
    </>
  );
};
export default Home;
