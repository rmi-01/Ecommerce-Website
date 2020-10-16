import React from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview";
import productsList from "./productsList";

function ShopPage() {
  return (
    <div className="shop-page">
      {productsList.map(({ id, ...product }) => (
        <CollectionPreview key={id} {...product} />
      ))}
    </div>
  );
}

export default ShopPage;
