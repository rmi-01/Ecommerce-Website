import React from "react";
import { useRouteMatch } from "react-router-dom";

function CategoryPage() {
  const match = useRouteMatch();
  return <div className="category">CATEGORY PAGE</div>;
}

export default CategoryPage;
