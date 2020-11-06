import { createSelector } from "@reduxjs/toolkit";

const selectShop = (state) => state.shop;

//state.product.productsList
export const selectShopItems = createSelector(
  selectShop,
  (product) => product.items
);
