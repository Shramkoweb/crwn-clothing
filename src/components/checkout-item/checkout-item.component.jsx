import React from 'react';
import {connect} from 'react-redux';

import {addItem, clearItemFromCart, removeItem} from '../../redux/cart/cart.actions';
import {
  CheckoutItemContainer,
  ImageContainer,
  QuantityContainer,
  RemoveButtonContainer,
  TextContainer,
} from './checkout-item.styles';

const CheckoutItem = ({checkoutItem, clearItem, addItem, removeItem}) => {
  const {name, imageUrl, price, quantity} = checkoutItem;
  return (
      <CheckoutItemContainer className='checkout-item'>
        <ImageContainer className='image-container'>
          <img src={imageUrl} alt='item'/>
        </ImageContainer>
        <TextContainer className='name'>{name}</TextContainer>
        <QuantityContainer className='quantity'>
          <button type='button' className='arrow' onClick={() => removeItem(checkoutItem)}>&#10094;</button>
          <span className="value">{quantity}</span>
          <button type='button' className='arrow' onClick={() => addItem(checkoutItem)}>&#10095;</button>
        </QuantityContainer>
        <TextContainer className='price'>{price}</TextContainer>
        <RemoveButtonContainer type='button' className='remove-button' onClick={() => clearItem(checkoutItem)}>
          &#10005;
        </RemoveButtonContainer>
      </CheckoutItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
});

export default connect(
    null,
    mapDispatchToProps,
)(CheckoutItem);
