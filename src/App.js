import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import Signing from './pages/signing/signing.component';
import { auth } from './firebase/firebase.util';

class App extends React.PureComponent {
  unsubscribeFromAuth = null;

  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };

  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({
        currentUser: user
      });
    });
  }


  componentWillUnmount() {
    this.unsubscribeFromAuth();

    console.log('unsubscribeFromAuth');
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={Shop}/>
          <Route exact path='/signing' component={Signing}/>
        </Switch>
      </div>
    );
  }
}

export default App;
