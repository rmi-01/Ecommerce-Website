import React from "react";
import { useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import { selectCollection } from "../../redux/shop/shop.selector";

function CategoryPage() {
  const match = useRouteMatch();

  const collection = useSelector((state) =>
    selectCollection(match.params.collectionId)(state)
  );

  return <div className="category">CATEGORY PAGE</div>;
}

export default CategoryPage;
