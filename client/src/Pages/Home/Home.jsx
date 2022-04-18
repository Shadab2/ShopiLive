import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Carousel from '../../Components/Carousel/Carousel';
import Footer from '../../Components/Footer/Footer';
import SpecialProducts from '../../Components/SpecialProducts/SpecialProducts';
import Topbar from '../../Components/Topbar/Topbar';
const Home = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <Carousel />
      <SpecialProducts />
      <Footer />
    </>
  );
};
export default Home;
