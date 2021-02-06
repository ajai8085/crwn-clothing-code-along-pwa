import React from 'react';
import './App.css';
import { HomePage } from './pages/homepage/homepage.component';
import { Route, Switch, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/shoppage.component.jsx';
import CheckoutPage from './pages/checkout/checkout.component';
import Header from './Components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { checkUserSession } from './redux/user/user.actions';

// import { selectCollectionsForPreview } from './redux/shop/shop.selectors';
class App extends React.Component {
  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact={true} path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  // collectionsArray: selectCollectionsForPreview,
});
const mapDispacthToProperties = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispacthToProperties)(App);
