export const addItemToCart = (cartItems, cartItemToAdd) => {
  const hasItemToAdd = cartItems.find((cartItem) => cartItem.id === cartItemToAdd.id);

  if (hasItemToAdd) {
    return cartItems.map((cartItem) => {
        return cartItem.id === cartItemToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem;
      }
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

