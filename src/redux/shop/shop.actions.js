import { ShopActionType } from './shop.types';

export const updateCollections = (collections) => ({
  type: ShopActionType.UPDATE_COLLECTIONS,
  payload: collections,
});
