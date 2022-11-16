import React, { useEffect } from "react";
import styled from "styled-components";
import Navbar from "../../Components/Navbar/Navbar";
import Carousel from "../../Components/Carousel/Carousel";
import Footer from "../../Components/Footer/Footer";
import SpecialProducts from "../../Components/SpecialProducts/SpecialProducts";
import Topbar from "../../Components/Topbar/Topbar";
import Instagram from "../../Components/Instagram/Instagram";
import Instagramb from "../../Components/Instagramb/Instagramb";
import BreadCrumbs from "../../Components/Breadcrumbs/BreadCrumbs";
import Parallax from "../../Components/Parallax/Parallax";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <Topbar />
      <Navbar />
      <Carousel />
      <SpecialProducts />
      <Parallax />
      <BreadCrumbs />
      <Instagram />
      <Instagramb />
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  background-image: url("/images/media/parallax.jpeg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export default Home;
