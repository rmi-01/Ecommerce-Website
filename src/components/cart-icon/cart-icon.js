import React from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/11.2 shopping-bag.svg";
import { TOGGLE_CART_DISPLAY } from "../../redux/cart/cart.reducer";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

function CartIcon() {
  const dispatch = useDispatch();
  const cartItemsCount = useSelector(selectCartItemsCount);
  return (
    <div className="cart-icon" onClick={() => dispatch(TOGGLE_CART_DISPLAY())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItemsCount}</span>
    </div>
  );
}

export default CartIcon;
