import React from "react";
import { useDispatch } from "react-redux";
import "./checkout-item.styles.scss";
import { CLEAR_ITEM } from "../../redux/cart/cart.reducer";

function CheckoutItem({ cartItem }) {
  const { imageUrl, name, quantity, price } = cartItem;
  const dispatch = useDispatch();
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <span
        className="remove-button"
        onClick={() => dispatch(CLEAR_ITEM(cartItem))}
      >
        &#10005;
      </span>
    </div>
  );
}

export default CheckoutItem;
