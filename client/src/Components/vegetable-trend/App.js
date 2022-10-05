import "./Card.css";
import Card from "./Card";
import styled from "styled-components";
import { Container } from "./Styled/Container";
function App() {
  const Heading=styled.h1`
  /* font-size: 200px; */
  /* display: flex; */
  /* padding-top: 100px; */
  ::after
  `
  return (
    <div>
      <Heading className="heading">TRENDING PRODUCTS</Heading>
      <Container>
        <Card
          new="new"
          onSale="ON SALE"
          product__image="/images/1.jpg"
          rating__image="/images/4-star.png"
          title="Beetroot"
          discountedPrice="$31.40"
          originalPrice="$35"
        />
        <Card
          new="new"
          // onSale="ON SALE"
          product__image="/images/2.jpg"
          rating__image="/images/4-star.png"
          title="Cabbage"
          discountedPrice="$31.40"
          originalPrice="$35"
        />
        <Card
          new="NEW"
          // onSale="ON SALE"
          product__image="/images/3.jpg"
          rating__image="/images/4-star.png"
          title="Onion"
          discountedPrice="$31.40"
          originalPrice="$35"
        />
        <Card
          new="NEW"
          // onSale="ON SALE"
          product__image="/images/4.jpg"
          rating__image="/images/4-star.png"
          title="Brinjal"
          discountedPrice="$31.40"
          originalPrice="$35"
        />
      </Container>
    </div>
  );
}

export default App;
