import { createSelector } from 'reselect';

export const getShop = (state) => state.shop;

export const getCollections = createSelector(
  [getShop],
  (shop) => shop.collections
);
