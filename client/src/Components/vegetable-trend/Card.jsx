import "./Card.css";
import { Button } from "./Styled/Button";
import { CardCustom, CardImage, CardTitle } from "./Styled/Card";
import { CartDiscountedPrice, CartOriginalPrice, Price } from "./Styled/Price";
import { NewTag } from "./Styled/Tags";
import { OnSaleTag } from "./Styled/Tags";
function Card(props) {
  console.log(props);
  return (
    <CardCustom>
      <NewTag isNew="yes">{props.new}</NewTag>
      <OnSaleTag>{props.onSale}</OnSaleTag>
      {/* <CardImage>{props.product__image}</CardImage> */}
      <img src={props.product__image} alt="card" className="card__image" />
      <Button>Add To Cart</Button>
      <img
        src={props.rating__image}
        alt="rating-img"
        className="rating__image"
      />
      <CardTitle>{props.title}</CardTitle>
      <Price>
        <CartDiscountedPrice>{props.discountedPrice}</CartDiscountedPrice>
        <CartOriginalPrice>{props.originalPrice}</CartOriginalPrice>
      </Price>
    </CardCustom>
  );
}
export default Card;
