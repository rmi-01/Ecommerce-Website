import { createSelector } from "@reduxjs/toolkit";

const mapCollectionToId = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

const selectShop = (state) => state.shop;

//state.shop.items
export const selectShopItems = createSelector(selectShop, (shop) => shop.items);

//state.shop.items(specific for collection page)
export const selectCollection = (category) =>
  createSelector(selectShopItems, (items) =>
    items.find((item) => item.id === mapCollectionToId[category])
  );
