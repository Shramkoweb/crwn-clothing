import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.util';

import './header.styles.scss';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart/cart.component';

const Header = ({ currentUser, cartHidden, toggleCart }) => (
  <div className="header">
    <Link to='/' className='logo-container'>
      <Logo title='CRWN Magazine' className='logo'/>
    </Link>

    <div className="options">
      <Link className='option' to='/shop'>SHOP</Link>
      <Link className='option' to='/contact'>CONTACT</Link>
      {
        currentUser ?
          <Link to='' className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </Link>
          :
          <Link className='option' to='/signing'>SIGN IN</Link>
      }
      <CartIcon toggleCart={toggleCart}/>
    </div>

    {!cartHidden && <CartDropdown/>}
  </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  cartHidden: hidden,
});

export default connect(mapStateToProps)(Header);
