import React from "react";
import styled from "styled-components";
import Navbar from "../../Components/Navbar/Navbar";

import Footer from "../../Components/Footer/Footer";

import Topbar from "../../Components/Topbar/Topbar";
import Login from "../../Components/Login/Login";

const LoginPg = () => {
  return (
    <Container>
      <Topbar />
      <Navbar />
      {/* Todo-conditional rendering for login and registration */}
      <Login />
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  // background-image: url("/images/media/parallax.jpeg");
  // background-attachment: fixed;
  // background-position: center;
  // background-repeat: no-repeat;
  // background-size: cover;
`;
export default LoginPg;
