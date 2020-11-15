import { createSelector } from "@reduxjs/toolkit";

const selectShop = (state) => state.shop;

//state.shop.items
export const selectShopItems = createSelector(selectShop, (shop) => shop.items);

//state.shop.items (for preview)
export const selectShopItemsForPreview = createSelector(
  selectShopItems,
  (items) => Object.keys(items).map((key) => items[key])
);

//state.shop.items(specific for collection page)
export const selectCollection = (category) =>
  createSelector(selectShopItems, (items) => items[category]);
