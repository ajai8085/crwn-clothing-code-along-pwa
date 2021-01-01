import React from 'react';
import './App.css';
import { HomePage } from './pages/homepage/homepage.component';
import { Route, Switch, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/shoppage.component.jsx';
import CheckoutPage from './pages/checkout/checkout.component';
import Header from './Components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import setCurrentUser from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
class App extends React.Component {
  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          this.props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        this.props.setCurrentUser(userAuth); // user auth will be null here
      }
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
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
  currentUser: selectCurrentUser,
});
const mapDispacthToProperties = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispacthToProperties)(App);
