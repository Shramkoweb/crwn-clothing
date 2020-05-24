import { createSelector } from 'reselect';

export const getShop = (state) => state.shop;

export const getCollections = createSelector(
  [getShop],
  (shop) => shop.collections
);

export const getCollection = (collectionID) => {
  return createSelector(
    [getCollections],
    (collections) => collections ? collections[collectionID] : null);
};

export const getCollectionsForPreview = createSelector(
  [getCollections],
  (collections) => collections ? Object.values(collections) : []
);
