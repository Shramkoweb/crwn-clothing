import { CartActionType } from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionType.TOGGLE_CART_HIDDEN,
});

export const addItem = (name) => ({
  type: CartActionType.ADD_ITEM,
  payload: name,
});

export const clearItemFromCart = item => ({
  type: CartActionType.CLEAR_ITEM_FROM_CART,
  payload: item
});
