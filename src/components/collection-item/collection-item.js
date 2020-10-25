import React from "react";
import CustomButton from "../custom-button/custom-button";
import "./collection-item.styles.scss";
import { useDispatch } from "react-redux";
import { ADD_CART_ITEMS } from "../../redux/cart/cart.reducer";

function CollectionItem(props) {
  const { imageUrl, price, name } = props.item;
  const dispatch = useDispatch();
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton
        invertedColor
        onClick={() => dispatch(ADD_CART_ITEMS(props.item))}
      >
        add to cart
      </CustomButton>
    </div>
  );
}

export default CollectionItem;
