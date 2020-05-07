import { createSelector } from 'reselect';

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

export const getShop = (state) => state.shop;

export const getCollections = createSelector(
  [getShop],
  (shop) => shop.collections
);

export const getCollection = (collectionID) =>
  createSelector(
    [getCollections],
    collections => collections.find((collection) => collection.id === COLLECTION_ID_MAP[collectionID])
  )
