import React from 'react';
import { connect } from 'react-redux';

import { addItem, clearItemFromCart, removeItem } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ checkoutItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = checkoutItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item'/>
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <button type='button' className='arrow' onClick={() => removeItem(checkoutItem)}>&#10094;</button>
        <span className="value">{quantity}</span>
        <button type='button' className='arrow' onClick={() => addItem(checkoutItem)}>&#10095;</button>
      </span>
      <span className='price'>{price}</span>
      <button type='button' className='remove-button' onClick={() => clearItem(checkoutItem)}>
        &#10005;
      </button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
