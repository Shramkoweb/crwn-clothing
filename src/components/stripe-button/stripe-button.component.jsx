import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import CustomButton from '../custom-button/custom-button.component';

const StripeButton = ({ total }) => {
  const PUBLISHABLE_KEY = 'pk_test_euVEzbkCGMGdNy44Rg1ji1mD00osdWPX2r';

  const onToken = (token) => {
    console.log(token);
  };

  return (
    <div className='checkout-button'>
      <StripeCheckout
        token={onToken}
        name='CRWN Clothing Ltd.'
        shippingAddress
        billingAddress
        currency='USD'
        description={`Your total is $${total} USD`}
        amount={total * 100}
        stripeKey={PUBLISHABLE_KEY}
      >
        <CustomButton>Pay Now</CustomButton>
      </StripeCheckout>
    </div>
  );
};

export default StripeButton;
