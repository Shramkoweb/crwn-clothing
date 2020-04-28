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

export const getCartHiddenState = createSelector(
  [getCart],
  (cart) => cart.hidden
);

export const getCartTotal = createSelector(
  [getCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedPrice, cartItem) =>
        accumulatedPrice + cartItem.quantity * cartItem.price,
      0
    )
);
