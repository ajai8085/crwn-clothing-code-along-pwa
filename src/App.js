import React from 'react';
import './App.css';
import { HomePage } from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shoppage.component.jsx';
import Header from './Components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact={true} path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
