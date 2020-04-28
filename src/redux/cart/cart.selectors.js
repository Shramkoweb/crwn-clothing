import { createSelector } from 'reselect';

export const getCart = (state) => state.cart;

export const getCartItems = createSelector(
  [getCart],
  (cart) => cart.cartItems
);

export const getCartItemsAmount = createSelector(
  [getCartItems],
  (items) => {
    return items.reduce((acc, currentItem) => acc + currentItem.quantity, 0);
  }
);
