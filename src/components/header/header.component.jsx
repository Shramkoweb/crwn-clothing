import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.util';

import './header.styles.scss';

import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = ({ currentUser }) => (
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
          <Link to='/signing'>SIGN IN</Link>
      }
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
