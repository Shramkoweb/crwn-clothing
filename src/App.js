import React from 'react';
import PropTypes from 'prop-types';
import {Redirect, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import './App.css';

import {setCurrentUser} from './redux/user/user.actions';
import {getCurrentUser} from './redux/user/user.selectors';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import SigningPage from './pages/signing/signing.component';
import {auth, createUserProfileDocument} from './firebase/firebase.util';
import ComingSoonComponent from './pages/coming-soon.component';

class App extends React.PureComponent {
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          this.props.setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }

      this.props.setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const {currentUser} = this.props;

    return (
      <>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/checkout' component={CheckoutPage}/>
          <Route exact path='/signing' render={() => currentUser ? <Redirect to='/'/> : <SigningPage/>}
          />
          <Route component={ComingSoonComponent}/>
        </Switch>
      </>
    );
  }
}

App.propTypes = {
  currentUser: PropTypes.object,
  setCurrentUser: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  currentUser: getCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
