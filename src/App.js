import React, { useState, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/header/header.js";
import HomePage from "./pages/homepage/HomePage.js";
import ShopPage from "./pages/shop/ShopPage.js";
import "./app.css";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.js";
import { auth, CreateUserProfileDocument } from "./firebase/utils";
import { SET_CURRENT_USER } from "./redux/user/user.reducer";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "./redux/selectors";

function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  useEffect(() => {
    let unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await CreateUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          dispatch(
            SET_CURRENT_USER({
              id: snapShot.id,
              ...snapShot.data(),
            })
          );
        });
      } else dispatch(SET_CURRENT_USER(userAuth));
    });

    return () => {
      unSubscribeFromAuth();
    };
  }, []);

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/shop">
          <ShopPage />
        </Route>
        <Route path="/sign-in">
          {currentUser ? <Redirect to="/" /> : <SignInAndSignUp />}
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
