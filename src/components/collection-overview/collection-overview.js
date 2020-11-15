import React from "react";
import { useSelector } from "react-redux";
import CollectionPreview from "../../components/collection-preview/collection-preview";
import { selectShopItemsForPreview } from "../../redux/shop/shop.selector";

function CollectionOverview() {
  const productItems = useSelector(selectShopItemsForPreview);
  return (
    <div className="collection-overview">
      {productItems.map(({ id, ...product }) => (
        <CollectionPreview key={id} {...product} />
      ))}
    </div>
  );
}

export default CollectionOverview;
