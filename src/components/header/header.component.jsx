import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.util';

import { getCurrentUser } from '../../redux/user/user.selectors';
import { getCartHiddenState } from '../../redux/cart/cart.selectors';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from './header.styles';

const Header = ({ currentUser, cartHidden }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo title='CRWN Magazine' className='logo'/>
    </LogoContainer>

    <OptionsContainer>
      <OptionLink to='/shop'>SHOP</OptionLink>
      <OptionLink to='/contact'>CONTACT</OptionLink>
      {
        currentUser ?
          <OptionLink onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
          :
          <OptionLink to='/signing'>SIGN IN</OptionLink>
      }
      <CartIcon/>
    </OptionsContainer>

    {!cartHidden && <CartDropdown/>}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: getCurrentUser,
  cartHidden: getCartHiddenState,
});

export default connect(mapStateToProps)(Header);
