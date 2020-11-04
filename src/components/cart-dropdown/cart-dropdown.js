import React from "react";
import "./cart-dropdown.styles.scss";
import { useSelector, useDispatch } from "react-redux";
import CustomButton from "../custom-button/custom-button";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import CartItem from "../cart-item/cart-item";
import { useHistory } from "react-router-dom";
import { TOGGLE_CART_DISPLAY } from "../../redux/cart/cart.reducer";

function CartDropdown() {
  const cartItems = useSelector(selectCartItems);
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem item={cartItem} key={cartItem.id} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(TOGGLE_CART_DISPLAY());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
}

export default CartDropdown;
