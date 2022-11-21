import React from "react";
import styled from "styled-components";
import { linkNames } from "../../Data/simpleLinkData";
import SimpleLink from "./SimpleLink";
import { MdSearch } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiChevronRight } from "react-icons/bi";
import { lightTheme } from "../../Theme/LightTheme";
import { Link } from "react-router-dom";

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 5.4rem;
  max-height: 5rem;
  width: 100%;
  background-color: ${lightTheme.white};
`;
const IconWrapper = styled.span`
  font-size: 24px;
  font-weight: 600;
  &:hover {
    cursor: pointer;
  }
`;
const FlexWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const ButtonBox = styled.ul`
  list-style: none;
  display: flex;
`;
const ButtonBoxWrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  &:hover .submenu {
    display: flex;
  }
  &:hover .submenu-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
`;
const Button = styled(Link)`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 1.5rem 0.5rem;
  color: #333;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    color: ${lightTheme.main};
  }
`;

const Para = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  letter-spacing: 0.07em;
  font-weight: 500;
`;

const List = styled.li`
  &:hover .submenu-2 {
    display: flex;
  }
`;

const UList = styled.ul`
  position: absolute;
  list-style: none;
  top: 4.2rem;
  z-index: 3;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  justify-content: center;
  width: 250%;
  padding: 1rem 0.9rem;
  background-color: #fff;
  display: none;

  border: 1px solid #eee;
`;
const UList2 = styled.ul`
  position: absolute;
  list-style: none;
  top: -1rem;
  left: 14rem;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  justify-content: center;
  width: 100%;
  padding: 1rem 1.8rem;
  background-color: #fff;
  display: none;
  border: 1px solid #eee;
`;

const Anchor = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    background-color: ${lightTheme.main};
    height: 2px;
    width: 0;
    left: 0;
    bottom: -0.5rem;
    transition: all 0.5s ease;
  }
  &:hover:after {
    width: 20%;
  }
`;

const Box = styled.div`
  position: absolute;
  z-index: 2;
  background-color: #fff;
  top: 4.8rem;
  left: -32rem;
  padding: 3rem 5rem;
  column-gap: 2rem;
  display: none;

  ul {
    list-style: none;
    width: max-content;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  ul li {
    display: inline-block;
  }
  ul li a {
    text-decoration: none;
    color: #000;
  }
`;

const Tag = styled.span`
  color: ${lightTheme.main};
  font-weight: 700;
`;

function getLink(link) {
  return <SimpleLink text={link} />;
}

const Navbar = () => {
  return (
    <Wrapper>
      <IconWrapper>
        <FaBars size={25} />
      </IconWrapper>

      <IconWrapper>
        SHOPI<span style={{ color: "red" }}>LIVE</span>
      </IconWrapper>

      <ButtonBox>
        <ButtonBoxWrapper style={{ position: "relative" }}>
          <Button to="/">
            <Para>HOME</Para>
            <RiArrowDropDownLine size={28} />
          </Button>

          <UList className="submenu">
            {/* <List style={{ position: "relative" }}>
              <Anchor to="/">
                <p className="d-flex">
                  <span>New Demos</span>
                  <Tag className="ml-s">NEW</Tag>
                </p>
                <BiChevronRight size={20} />
              </Anchor>
              <UList2 className="submenu-2">{linkNames[0].map(getLink)}</UList2>
            </List> */}
            <List style={{ position: "relative" }}>
              <Anchor to="/">
                <p>Clothing</p>
                <BiChevronRight size={20} />
                <UList2 className="submenu-2">
                  {linkNames[1].map(getLink)}
                </UList2>
              </Anchor>
            </List>
            {/* <List style={{ position: "relative" }}>
              <Anchor to="/">
                <p>Basics</p>
                <BiChevronRight size={20} />
                <UList2 className="submenu-2">
                  {linkNames[2].map(getLink)}
                </UList2>
              </Anchor>
            </List> */}
            <li>
              <Anchor to="/">
                <p>Vegetables</p>
              </Anchor>
            </li>
            {/* <li>
              <Anchor to="/">
                <p>Watch</p>
              </Anchor>
            </li>
            <li>
              <Anchor to="/">
                <p>Lights</p>
              </Anchor>
            </li>
            <li>
              <Anchor to="/">
                <p>Goggles</p>
              </Anchor>
            </li>
            <li>
              <Anchor to="/">
                <p>Shoes</p>
              </Anchor>
            </li>
            <li>
              <Anchor to="/">
                <p>Bags</p>
              </Anchor>
            </li>
            <li>
              <Anchor to="/">
                <p>Flowers</p>
              </Anchor>
            </li> */}
          </UList>
        </ButtonBoxWrapper>
        <ButtonBoxWrapper style={{ position: "relative" }}>
          <Button to="/">
            <Para>SHOP</Para>
            <RiArrowDropDownLine size={28} />
          </Button>
          <UList className="submenu">
            <li>
              <Anchor to="/">
                <p>
                  <span>Left Sidebar</span>
                </p>
              </Anchor>
            </li>
            <li>
              <Anchor to="/">
                <p>Right Sidebar</p>
              </Anchor>
            </li>
            <li>
              <Anchor to="/">
                <p>No Sidebar</p>
              </Anchor>
            </li>
            <li>
              <Anchor to="/">
                <p>Sidebar Popup</p>
              </Anchor>
            </li>
            <li>
              <Anchor to="/">
                <p className="d-flex">
                  <span>Metro</span>
                  <Tag className="ml-s">NEW</Tag>
                </p>
              </Anchor>
            </li>
            <li>
              <Anchor to="/">
                <p className="d-flex">
                  <span>Full Width</span>
                  <Tag className="ml-s">NEW</Tag>
                </p>
              </Anchor>
            </li>
            <li>
              <Anchor to="/">
                <p>3 Grid</p>
              </Anchor>
            </li>
            <li>
              <Anchor to="/">
                <p>6 Six</p>
              </Anchor>
            </li>
            <li>
              <Anchor to="/">
                <p>List View</p>
              </Anchor>
            </li>
          </UList>
        </ButtonBoxWrapper>
        <ButtonBoxWrapper style={{ position: "relative" }}>
          <Button to="/">
            <Para>PRODUCTS</Para>
            <RiArrowDropDownLine size={28} />
          </Button>
          <UList className="submenu">
            <List style={{ position: "relative" }}>
              <Anchor to="/">
                <p>Sidebar</p>
                <BiChevronRight size={20} />
              </Anchor>
              <UList2 className="submenu-2">{linkNames[4].map(getLink)}</UList2>
            </List>
            <List style={{ position: "relative" }}>
              <Anchor to="/">
                <p>Thumbnail Image</p>
                <BiChevronRight size={20} />
                <UList2 className="submenu-2">
                  {linkNames[5].map(getLink)}
                </UList2>
              </Anchor>
            </List>
            <List style={{ position: "relative" }}>
              <Anchor to="/">
                <p>3-Column</p>
                <BiChevronRight size={20} />
                <UList2 className="submenu-2">
                  {linkNames[6].map(getLink)}
                </UList2>
              </Anchor>
            </List>
            <li>
              <Anchor to="/">
                <p>4 Image</p>
              </Anchor>
            </li>
            <li>
              <Anchor to="/">
                <p>Bundle Product</p>
              </Anchor>
            </li>
            <li>
              <Anchor to="/">
                <p>Sticky</p>
              </Anchor>
            </li>
            <li>
              <Anchor to="/">
                <p>Accordian</p>
              </Anchor>
            </li>
            <li>
              <Anchor to="/">
                <p>Image Swatch</p>
              </Anchor>
            </li>
            <li>
              <Anchor to="/">
                <p>Vertical Tab</p>
              </Anchor>
            </li>
          </UList>
        </ButtonBoxWrapper>
        <ButtonBoxWrapper style={{ position: "relative" }}>
          <Button to="/">
            <Para>FEATURES</Para>
            <RiArrowDropDownLine size={28} />
          </Button>
          <Box className="submenu-grid">
            <ul>
              <h4>Portfolio</h4>
              <li>
                <Anchor to="/">Portfolio Grid 2</Anchor>
              </li>
              <li>
                <Anchor to="/">Portfolio Grid 3</Anchor>
              </li>
              <li>
                <Anchor to="/">Portfolio Grid 4</Anchor>
              </li>
              <li>
                <Anchor to="/">Masonry Grid 2</Anchor>
              </li>
              <li>
                <Anchor to="/">Masonry Grid 3</Anchor>
              </li>
              <li>
                <Anchor to="/">Masonry Grid 4</Anchor>
              </li>
              <li>
                <Anchor to="/">Masonry Full Width</Anchor>
              </li>
            </ul>
            <ul>
              <h4>Add To Cart</h4>
              <li>
                <Anchor to="/">Cart Modal Popup</Anchor>
              </li>
              <li>
                <Anchor to="/">Qty Counter</Anchor>
              </li>
              <li>
                <Anchor to="/">Cart Top</Anchor>
              </li>
              <li>
                <Anchor to="/">Cart Bottom</Anchor>
              </li>
              <li>
                <Anchor to="/">Cart Left</Anchor>
              </li>
              <li>
                <Anchor to="/">Cart Right</Anchor>
              </li>
            </ul>
            <ul>
              <h4>Theme Element</h4>
              <li>
                <Anchor to="/">Title</Anchor>
              </li>
              <li>
                <Anchor to="/">Collection Banner</Anchor>
              </li>
              <li>
                <Anchor to="/">Home Slider</Anchor>
              </li>
              <li>
                <Anchor to="/">Category</Anchor>
              </li>
              <li>
                <Anchor to="/">Service</Anchor>
              </li>
            </ul>
            <ul>
              <h4>Product Element</h4>
              <li>
                <Anchor to="/">Product Box</Anchor>
              </li>
              <li>
                <Anchor to="/">Product Slider</Anchor>
              </li>
              <li>
                <Anchor to="/">No Slider</Anchor>
              </li>
              <li>
                <Anchor to="/">Multi Slider</Anchor>
              </li>
              <li>
                <Anchor to="/">Tab</Anchor>
              </li>
            </ul>
            <ul>
              <h4>Email Template</h4>
              <li>
                <Anchor to="/">Order Success</Anchor>
              </li>
              <li>
                <Anchor to="/">Order Success 2</Anchor>
              </li>
              <li>
                <Anchor to="/">Email Template</Anchor>
              </li>
              <li>
                <Anchor to="/">Email Template 2</Anchor>
              </li>
            </ul>
          </Box>
        </ButtonBoxWrapper>

        <ButtonBoxWrapper style={{ position: "relative" }}>
          <Button to="/">
            <Para>PAGES</Para>
            <RiArrowDropDownLine size={28} />
          </Button>
          <UList className="submenu">
            <List style={{ position: "relative" }}>
              <Anchor to="/">
                <p className="d-flex">
                  <span>Vendor</span>
                  <Tag className="ml-s">NEW</Tag>
                </p>

                <BiChevronRight size={20} />
              </Anchor>
              <UList2 className="submenu-2">
                <li>
                  <Anchor to="/">
                    <p>Vendor Dashboard</p>
                  </Anchor>
                </li>
                <li>
                  <Anchor to="/">
                    <p>Vendor Profile</p>
                  </Anchor>
                </li>
                <li>
                  <Anchor to="/">
                    <p>Become Vendor</p>
                  </Anchor>
                </li>
              </UList2>
            </List>

            <List style={{ position: "relative" }}>
              <Anchor to="/">
                <p>Account</p>
                <BiChevronRight size={20} />
                <UList2 className="submenu-2">
                  <li>
                    <Anchor to="/">
                      <p>Wishlist</p>
                    </Anchor>
                  </li>
                  <li>
                    <Anchor to="/">
                      <p>Cart</p>
                    </Anchor>
                  </li>
                  <li>
                    <Anchor to="/">
                      <p>Dashboard</p>
                    </Anchor>
                  </li>
                  <li>
                    <Anchor to="/">
                      <p>Login</p>
                    </Anchor>
                  </li>
                  <li>
                    <Anchor to="/">
                      <p>Login-Auth</p>
                    </Anchor>
                  </li>
                  <li>
                    <Anchor to="/">
                      <p>Register</p>
                    </Anchor>
                  </li>
                  <li>
                    <Anchor to="/">
                      <p>Contact</p>
                    </Anchor>
                  </li>
                  <li>
                    <Anchor to="/">
                      <p>Forgot-Password</p>
                    </Anchor>
                  </li>
                  <li>
                    <Anchor to="/">
                      <p>Profile</p>
                    </Anchor>
                  </li>
                  <li>
                    <Anchor to="/">
                      <p>Checkout</p>
                    </Anchor>
                  </li>
                </UList2>
              </Anchor>
            </List>
            <List style={{ position: "relative" }}>
              <Anchor to="/">
                <p>About Us</p>
              </Anchor>
            </List>
            <List>
              <Anchor to="/">
                <p>Search</p>
              </Anchor>
            </List>
            <List style={{ position: "relative" }}>
              <Anchor to="/">
                <p className="d-flex">
                  <span>Typography</span>
                  <Tag className="ml-s">NEW</Tag>
                </p>
              </Anchor>
            </List>
            <li>
              <Anchor to="/">
                <p>Review</p>
              </Anchor>
            </li>
            <li>
              <Anchor to="/">
                <p>Order-Success</p>
              </Anchor>
            </li>
            <List style={{ position: "relative" }}>
              <Anchor to="/">
                <p>Compare</p>

                <BiChevronRight size={20} />

                <UList2 className="submenu-2">
                  <li>
                    <Anchor to="/">
                      <p>Compare</p>
                    </Anchor>
                  </li>
                  <li>
                    <Anchor to="/">
                      <p className="d-flex">
                        <span>Compare-2</span>
                        <Tag className="ml-s">NEW</Tag>
                      </p>
                    </Anchor>
                  </li>
                </UList2>
              </Anchor>
            </List>
            <li>
              <Anchor to="/">
                <p>Collection</p>
              </Anchor>
            </li>
            <li>
              <Anchor to="/">
                <p>Lookbook</p>
              </Anchor>
            </li>
            <li>
              <Anchor to="/">
                <p>Site-Map</p>
              </Anchor>
            </li>
            <li>
              <Anchor to="/">
                <p>404</p>
              </Anchor>
            </li>
            <li>
              <Anchor to="/">
                <p>Coming-Soon</p>
              </Anchor>
            </li>
          </UList>
        </ButtonBoxWrapper>
        {/* <ButtonBoxWrapper style={{ position: "relative" }}>
          <Button to="/user/login">
            <Para>BLOGS</Para>
            <RiArrowDropDownLine size={28} />
          </Button>
          <UList className="submenu">
            <li>
              <Anchor to="/">
                <p>
                  <span>Blog Left Sidebar</span>
                </p>
              </Anchor>
            </li>
            <li>
              <Anchor to="/">
                <p>Blog Right Sidebar</p>
              </Anchor>
            </li>
            <li>
              <Anchor to="/">
                <p>No Sidebar</p>
              </Anchor>
            </li>
            <li>
              <Anchor to="/">
                <p>Blog Detail</p>
              </Anchor>
            </li>
          </UList>
        </ButtonBoxWrapper> */}
      </ButtonBox>
      <FlexWrapper>
        <IconWrapper>
          <MdSearch size={28} />
        </IconWrapper>
        <IconWrapper>
          <IoSettingsOutline size={28} />
        </IconWrapper>
        <IconWrapper>
          <AiOutlineShoppingCart size={28} />
        </IconWrapper>
      </FlexWrapper>
    </Wrapper>
  );
};

export default Navbar;
