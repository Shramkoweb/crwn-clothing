import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import Signing from './pages/signing/signing.component';

const App = () => (
  <div>
    <Header/>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/shop' component={Shop}/>
      <Route exact path='/signing' component={Signing}/>
    </Switch>
  </div>
);

export default App;
