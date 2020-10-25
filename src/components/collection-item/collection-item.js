import React from "react";
import CustomButton from "../custom-button/custom-button";
import "./collection-item.styles.scss";

function CollectionItem({ id, imageUrl, price, name }) {
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
      <CustomButton invertedColor>add to cart</CustomButton>
    </div>
  );
}

export default CollectionItem;
