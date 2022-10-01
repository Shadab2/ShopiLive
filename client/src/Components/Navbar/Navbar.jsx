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
const Button = styled.a`
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

const Anchor = styled.a`
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
          <Button href="!#!">
            <Para>HOME</Para>
            <RiArrowDropDownLine size={28} />
          </Button>

          <UList className="submenu">
            <List style={{ position: "relative" }}>
              <Anchor href="!#">
                <p className="d-flex">
                  <span>New Demos</span>
                  <Tag className="ml-s">NEW</Tag>
                </p>
                <BiChevronRight size={20} />
              </Anchor>
              <UList2 className="submenu-2">{linkNames[0].map(getLink)}</UList2>
            </List>
            <List style={{ position: "relative" }}>
              <Anchor href="!#">
                <p>Clothing</p>
                <BiChevronRight size={20} />
                <UList2 className="submenu-2">
                  {linkNames[1].map(getLink)}
                </UList2>
              </Anchor>
            </List>
            <List style={{ position: "relative" }}>
              <Anchor href="!#">
                <p>Basics</p>
                <BiChevronRight size={20} />
                <UList2 className="submenu-2">
                  {linkNames[2].map(getLink)}
                </UList2>
              </Anchor>
            </List>
            <List>
              <Anchor href="!#">
                <p>Beauty</p>
              </Anchor>
            </List>
            <List style={{ position: "relative" }}>
              <Anchor href="!#">
                <p>Electronic</p>
                <BiChevronRight size={20} />

                <UList2 className="submenu-2">
                  {linkNames[3].map(getLink)}
                </UList2>
              </Anchor>
            </List>
            <li>
              <Anchor href="!#">
                <p>Furniture</p>
              </Anchor>
            </li>
            <li>
              <Anchor href="!#">
                <p>Vegetables</p>
              </Anchor>
            </li>
            <li>
              <Anchor href="!#">
                <p>Watch</p>
              </Anchor>
            </li>
            <li>
              <Anchor href="!#">
                <p>Lights</p>
              </Anchor>
            </li>
            <li>
              <Anchor href="!#">
                <p>Goggles</p>
              </Anchor>
            </li>
            <li>
              <Anchor href="!#">
                <p>Shoes</p>
              </Anchor>
            </li>
            <li>
              <Anchor href="!#">
                <p>Bags</p>
              </Anchor>
            </li>
            <li>
              <Anchor href="!#">
                <p>Flowers</p>
              </Anchor>
            </li>
          </UList>
        </ButtonBoxWrapper>
        <ButtonBoxWrapper style={{ position: "relative" }}>
          <Button href="!#!">
            <Para>SHOP</Para>
            <RiArrowDropDownLine size={28} />
          </Button>
          <UList className="submenu">
            <li>
              <Anchor href="!#">
                <p>
                  <span>Left Sidebar</span>
                </p>
              </Anchor>
            </li>
            <li>
              <Anchor href="!#">
                <p>Right Sidebar</p>
              </Anchor>
            </li>
            <li>
              <Anchor href="!#">
                <p>No Sidebar</p>
              </Anchor>
            </li>
            <li>
              <Anchor href="!#">
                <p>Sidebar Popup</p>
              </Anchor>
            </li>
            <li>
              <Anchor href="!#">
                <p className="d-flex">
                  <span>Metro</span>
                  <Tag className="ml-s">NEW</Tag>
                </p>
              </Anchor>
            </li>
            <li>
              <Anchor href="!#">
                <p className="d-flex">
                  <span>Full Width</span>
                  <Tag className="ml-s">NEW</Tag>
                </p>
              </Anchor>
            </li>
            <li>
              <Anchor href="!#">
                <p>3 Grid</p>
              </Anchor>
            </li>
            <li>
              <Anchor href="!#">
                <p>6 Six</p>
              </Anchor>
            </li>
            <li>
              <Anchor href="!#">
                <p>List View</p>
              </Anchor>
            </li>
          </UList>
        </ButtonBoxWrapper>
        <ButtonBoxWrapper style={{ position: "relative" }}>
          <Button href="!#!">
            <Para>PRODUCTS</Para>
            <RiArrowDropDownLine size={28} />
          </Button>
          <UList className="submenu">
            <List style={{ position: "relative" }}>
              <Anchor href="!#">
                <p>Sidebar</p>
                <BiChevronRight size={20} />
              </Anchor>
              <UList2 className="submenu-2">{linkNames[4].map(getLink)}</UList2>
            </List>
            <List style={{ position: "relative" }}>
              <Anchor href="!#">
                <p>Thumbnail Image</p>
                <BiChevronRight size={20} />
                <UList2 className="submenu-2">
                  {linkNames[5].map(getLink)}
                </UList2>
              </Anchor>
            </List>
            <List style={{ position: "relative" }}>
              <Anchor href="!#">
                <p>3-Column</p>
                <BiChevronRight size={20} />
                <UList2 className="submenu-2">
                  {linkNames[6].map(getLink)}
                </UList2>
              </Anchor>
            </List>
            <li>
              <Anchor href="!#">
                <p>4 Image</p>
              </Anchor>
            </li>
            <li>
              <Anchor href="!#">
                <p>Bundle Product</p>
              </Anchor>
            </li>
            <li>
              <Anchor href="!#">
                <p>Sticky</p>
              </Anchor>
            </li>
            <li>
              <Anchor href="!#">
                <p>Accordian</p>
              </Anchor>
            </li>
            <li>
              <Anchor href="!#">
                <p>Image Swatch</p>
              </Anchor>
            </li>
            <li>
              <Anchor href="!#">
                <p>Vertical Tab</p>
              </Anchor>
            </li>
          </UList>
        </ButtonBoxWrapper>
        <ButtonBoxWrapper style={{ position: "relative" }}>
          <Button href="!#">
            <Para>FEATURES</Para>
            <RiArrowDropDownLine size={28} />
          </Button>
          <Box className="submenu-grid">
            <ul>
              <h4>Portfolio</h4>
              <li>
                <Anchor href="!#">Portfolio Grid 2</Anchor>
              </li>
              <li>
                <Anchor href="!#">Portfolio Grid 3</Anchor>
              </li>
              <li>
                <Anchor href="!#">Portfolio Grid 4</Anchor>
              </li>
              <li>
                <Anchor href="!#">Masonry Grid 2</Anchor>
              </li>
              <li>
                <Anchor href="!#">Masonry Grid 3</Anchor>
              </li>
              <li>
                <Anchor href="!#">Masonry Grid 4</Anchor>
              </li>
              <li>
                <Anchor href="!#">Masonry Full Width</Anchor>
              </li>
            </ul>
            <ul>
              <h4>Add To Cart</h4>
              <li>
                <Anchor href="!#">Cart Modal Popup</Anchor>
              </li>
              <li>
                <Anchor href="!#">Qty Counter</Anchor>
              </li>
              <li>
                <Anchor href="!#">Cart Top</Anchor>
              </li>
              <li>
                <Anchor href="!#">Cart Bottom</Anchor>
              </li>
              <li>
                <Anchor href="!#">Cart Left</Anchor>
              </li>
              <li>
                <Anchor href="!#">Cart Right</Anchor>
              </li>
            </ul>
            <ul>
              <h4>Theme Element</h4>
              <li>
                <Anchor href="!#">Title</Anchor>
              </li>
              <li>
                <Anchor href="!#">Collection Banner</Anchor>
              </li>
              <li>
                <Anchor href="!#">Home Slider</Anchor>
              </li>
              <li>
                <Anchor href="!#">Category</Anchor>
              </li>
              <li>
                <Anchor href="!#">Service</Anchor>
              </li>
            </ul>
            <ul>
              <h4>Product Element</h4>
              <li>
                <Anchor href="!#">Product Box</Anchor>
              </li>
              <li>
                <Anchor href="!#">Product Slider</Anchor>
              </li>
              <li>
                <Anchor href="!#">No Slider</Anchor>
              </li>
              <li>
                <Anchor href="!#">Multi Slider</Anchor>
              </li>
              <li>
                <Anchor href="!#">Tab</Anchor>
              </li>
            </ul>
            <ul>
              <h4>Email Template</h4>
              <li>
                <Anchor href="!#">Order Success</Anchor>
              </li>
              <li>
                <Anchor href="!#">Order Success 2</Anchor>
              </li>
              <li>
                <Anchor href="!#">Email Template</Anchor>
              </li>
              <li>
                <Anchor href="!#">Email Template 2</Anchor>
              </li>
            </ul>
          </Box>
        </ButtonBoxWrapper>

        <ButtonBoxWrapper style={{ position: "relative" }}>
          <Button href="!#!">
            <Para>PAGES</Para>
            <RiArrowDropDownLine size={28} />
          </Button>
          <UList className="submenu">
            <List style={{ position: "relative" }}>
              <Anchor href="!#">
                <p className="d-flex">
                  <span>Vendor</span>
                  <Tag className="ml-s">NEW</Tag>
                </p>

                <BiChevronRight size={20} />
              </Anchor>
              <UList2 className="submenu-2">
                <li>
                  <Anchor href="!#">
                    <p>Vendor Dashboard</p>
                  </Anchor>
                </li>
                <li>
                  <Anchor href="!#">
                    <p>Vendor Profile</p>
                  </Anchor>
                </li>
                <li>
                  <Anchor href="!#">
                    <p>Become Vendor</p>
                  </Anchor>
                </li>
              </UList2>
            </List>

            <List style={{ position: "relative" }}>
              <Anchor href="!#">
                <p>Account</p>
                <BiChevronRight size={20} />
                <UList2 className="submenu-2">
                  <li>
                    <Anchor href="!#">
                      <p>Wishlist</p>
                    </Anchor>
                  </li>
                  <li>
                    <Anchor href="!#">
                      <p>Cart</p>
                    </Anchor>
                  </li>
                  <li>
                    <Anchor href="!#">
                      <p>Dashboard</p>
                    </Anchor>
                  </li>
                  <li>
                    <Anchor href="!#">
                      <p>Login</p>
                    </Anchor>
                  </li>
                  <li>
                    <Anchor href="!#">
                      <p>Login-Auth</p>
                    </Anchor>
                  </li>
                  <li>
                    <Anchor href="!#">
                      <p>Register</p>
                    </Anchor>
                  </li>
                  <li>
                    <Anchor href="!#">
                      <p>Contact</p>
                    </Anchor>
                  </li>
                  <li>
                    <Anchor href="!#">
                      <p>Forgot-Password</p>
                    </Anchor>
                  </li>
                  <li>
                    <Anchor href="!#">
                      <p>Profile</p>
                    </Anchor>
                  </li>
                  <li>
                    <Anchor href="!#">
                      <p>Checkout</p>
                    </Anchor>
                  </li>
                </UList2>
              </Anchor>
            </List>
            <List style={{ position: "relative" }}>
              <Anchor href="!#">
                <p>About Us</p>
              </Anchor>
            </List>
            <List>
              <Anchor href="!#">
                <p>Search</p>
              </Anchor>
            </List>
            <List style={{ position: "relative" }}>
              <Anchor href="!#">
                <p className="d-flex">
                  <span>Typography</span>
                  <Tag className="ml-s">NEW</Tag>
                </p>
              </Anchor>
            </List>
            <li>
              <Anchor href="!#">
                <p>Review</p>
              </Anchor>
            </li>
            <li>
              <Anchor href="!#">
                <p>Order-Success</p>
              </Anchor>
            </li>
            <List style={{ position: "relative" }}>
              <Anchor href="!#">
                <p>Compare</p>

                <BiChevronRight size={20} />

                <UList2 className="submenu-2">
                  <li>
                    <Anchor href="!#">
                      <p>Compare</p>
                    </Anchor>
                  </li>
                  <li>
                    <Anchor href="!#">
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
              <Anchor href="!#">
                <p>Collection</p>
              </Anchor>
            </li>
            <li>
              <Anchor href="!#">
                <p>Lookbook</p>
              </Anchor>
            </li>
            <li>
              <Anchor href="!#">
                <p>Site-Map</p>
              </Anchor>
            </li>
            <li>
              <Anchor href="!#">
                <p>404</p>
              </Anchor>
            </li>
            <li>
              <Anchor href="!#">
                <p>Coming-Soon</p>
              </Anchor>
            </li>
          </UList>
        </ButtonBoxWrapper>
        <ButtonBoxWrapper style={{ position: "relative" }}>
          <Button href="!#!">
            <Para>BLOGS</Para>
            <RiArrowDropDownLine size={28} />
          </Button>
          <UList className="submenu">
            <li>
              <Anchor href="!#">
                <p>
                  <span>Blog Left Sidebar</span>
                </p>
              </Anchor>
            </li>
            <li>
              <Anchor href="!#">
                <p>Blog Right Sidebar</p>
              </Anchor>
            </li>
            <li>
              <Anchor href="!#">
                <p>No Sidebar</p>
              </Anchor>
            </li>
            <li>
              <Anchor href="!#">
                <p>Blog Detail</p>
              </Anchor>
            </li>
          </UList>
        </ButtonBoxWrapper>
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
