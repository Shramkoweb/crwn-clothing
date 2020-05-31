import React from 'react';
import PropTypes from 'prop-types';
import {CartItemContainer, ItemDetails, ItemImage} from './cart-item.styles';

const CartItem = ({item}) => {
  const {imageUrl, price, name, quantity} = item;

  return (
    <CartItemContainer>
      <ItemImage src={imageUrl} alt={`${name}`}/>
      <ItemDetails className="item-details">
        <span className='name'>
          {name}
        </span>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

CartItem.propTypes = {
  item: PropTypes.object,
};

export default CartItem;
