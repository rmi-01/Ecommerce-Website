import React from "react";
import { useSelector } from "react-redux";
import CollectionPreview from "../../components/collection-preview/collection-preview";
import { selectShopItems } from "../../redux/shop/shop.selector";

function ShopPage() {
  const productItems = useSelector(selectShopItems);
  return (
    <div className="shop-page">
      {productItems.map(({ id, ...product }) => (
        <CollectionPreview key={id} {...product} />
      ))}
    </div>
  );
}

export default ShopPage;
