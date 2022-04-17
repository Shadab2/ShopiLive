import React from "react";
import styled from "styled-components";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGooglePlusG,
  FaTwitter,
  FaPhoneAlt,
  FaFax,
} from "react-icons/fa";
import { MdLocationOn, MdCopyright } from "react-icons/md";
import { VscMail } from "react-icons/vsc";

const Body = styled.body`
  line-height: 1.5;
  font-family: "Poppins", sans-serif;
  color: #777;
`;
const Footers = styled.div`
  background-color: #f9f9f9;
  line-height: 1.5;
`;

const Container = styled.div`
  max-width: 1170px;
  margin: auto;
  line-height: 1.5;
`;

const TopFooter = styled.div`
  border-bottom: 1px solid #ddd;
  margin-bottom: 70px;
  padding-top: 35px;
  padding-bottom: 35px;
  display: flex;
  justify-content: space-between;
`;
const LeftTop = styled.div`
  width: 50%;
  border-right: 1px solid #ddd;
`;

const RightTop = styled.div`
  display: flex;
  width: 50%;
  justify-content: flex-end;
`;

const Heading = styled.h4`
  color: black;
  text-transform: uppercase;
  font-weight: 700;
  display: block;
  margin-bottom: 1px;
`;

const UlHeading = styled.h4`
  font-size: 16px;
  color: black;
  text-transform: capitalize;
  margin-bottom: 35px;
  font-weight: 500;
  position: relative;
`;

const Desc = styled.p`
  font-size: 14px;
  font-weight: 300;
  line-height: 30px;
  color: #777;
`;

const Form = styled.input`
  font-size: 14px;
  padding: 13px;
  letter-spacing: 1px;
  width: 345px;
  border-radius: 0;
  line-height: 1.5;
  border: 1px solid #eee;
  height: auto;
  width: 215px;
`;

const Btn = styled.button`
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
  width: 150px;
  background-color: #ff4c3b;
  padding: 13px 29px;
  font-weight: 400;
  line-height: 1.5;
  color: #ffffff;
  border: 1px solid #ff4c3b;
  margin-left: 15px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const FooterCol = styled.div`
  width: 25%;
  padding: 0 15px;
  margin-right: ${(props) => props.margin};
  flex: ${(props) => props.flexVal};
`;

const Image = styled.img`
  margin-bottom: 19px;
`;

const SocialBox = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  font-size: 25px;
`;
const Icons = styled.i`
  position: relative;
  padding-right: ${(props) => props.padding};
  line-height: 2.5;
  color: ${(props) => props.color};
`;
const ButtonBox = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 1rem;
  list-style: none;
`;
const Button = styled.li`
  display: flex;
  /* flex-direction: row; */
  font-size: 14px;
  text-transform: capitalize;
  color: #ffffff;
  text-decoration: none;
  font-weight: 300;
  color: #777;
  /* display: block; */
  transition: all 0.3s ease;
  margin-bottom: 10px;
`;
const Bottomfooter = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  justify-content: space-between;
`;

const Footer = () => {
  return (
    <>
      <Footers>
        <Container>
          <TopFooter>
            <LeftTop>
              <Heading> KNOW IT ALL FIRST! </Heading>

              <Desc>
                Never Miss Anything From Multikart By Signing Up To Our
                Newsletter.
              </Desc>
            </LeftTop>

            <RightTop>
              <form action="">
                <Form placeholder="Enter your email" type="text" />

                <Btn>Subscribe</Btn>
              </form>
            </RightTop>
          </TopFooter>

          <Row>
            <FooterCol margin="60px" flexVal="5">
              <Image src="./assets/logo.png" alt="" />

              <Desc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </Desc>

              <SocialBox>
                <Icons href="#!" padding="32px" color="black">
                  <FaFacebookF />
                </Icons>
                <Icons href="#!" padding="32px" color="black">
                  <FaTwitter />
                </Icons>
                <Icons href="#!" padding="32px" color="black">
                  <FaGooglePlusG />
                </Icons>
                <Icons href="#!" padding="32px" color="black">
                  <FaInstagram />
                </Icons>
                <Icons href="#!" padding="32px" color="black">
                  <FaLinkedinIn />
                </Icons>
              </SocialBox>
            </FooterCol>

            <FooterCol margin="0px" flexVal="3">
              <UlHeading>MY ACCOUNT</UlHeading>

              <Button href="#!">Women</Button>
              <Button href="#!">Clothings</Button>
              <Button href="#!">Accessories</Button>
              <Button href="#!">Features</Button>
            </FooterCol>

            <FooterCol margin="0" flexVal="3">
              <UlHeading>WHY WE CHOOSE</UlHeading>

              <Button href="#!">Shipping and Return</Button>
              <Button href="#!">Secure Shopping</Button>
              <Button href="#!">Gallery</Button>
              <Button href="#!">Affilates</Button>
              <Button href="#!">Contacts</Button>
            </FooterCol>

            <FooterCol margin="0" flexVal="3">
              <UlHeading>STORE INFORMATION</UlHeading>

              <Button href="#!">
                <Icons href="#!" padding="22px" color="#777">
                  <MdLocationOn />
                </Icons>
                <Desc>Multikart Demo Store, Demo store India 345-659</Desc>
              </Button>
              <Button href="#!">
                <Icons href="#!" padding="22px" color="#777">
                  <FaPhoneAlt />
                </Icons>
                <Desc>Call Us: 123-456-7898</Desc>
              </Button>
              <Button href="#!">
                <Icons href="#!" padding="22px" color="#777">
                  <VscMail />
                </Icons>
                <Desc>Email Us: Support@Fiot.Com</Desc>
              </Button>
              <Button href="#!">
                <Icons href="#!" padding="22px" color="#777">
                  <FaFax />
                </Icons>
                <Desc>Fax: 123456</Desc>
              </Button>
            </FooterCol>
          </Row>
        </Container>
      </Footers>

      <Container>
        <Bottomfooter>
          <div>
            <Desc>
              <Icons color="#777" padding="10px">
                <MdCopyright />
              </Icons>
              2020-21 themeforest powered by pixelstrap
            </Desc>
          </div>

          <div>
            <Icons href="#!" padding="15px">
              <img src="./assets/discover.png" alt="" />
            </Icons>
            <Icons href="#!" padding="15px">
              <img src="./assets/visa.png" alt="" />
            </Icons>
            <Icons href="#!" padding="15px">
              <img src="./assets/paypal.png" alt="" />
            </Icons>
            <Icons href="#!" padding="15px">
              <img src="./assets/express.png" alt="" />
            </Icons>
            <Icons href="#!" padding="15px">
              <img src="./assets/master.png" alt="" />
            </Icons>
          </div>
        </Bottomfooter>
      </Container>
    </>
  );
};

export default Footer;
