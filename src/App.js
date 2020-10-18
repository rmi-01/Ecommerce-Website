import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/header.js";
import HomePage from "./pages/homepage/HomePage.js";
import ShopPage from "./pages/shop/ShopPage.js";
import "./app.css";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.js";
import { auth } from "./firebase/utils";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    let unSubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      console.log({ user });
    });

    return () => {
      unSubscribeFromAuth();
    };
  }, []);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route path="/shop">
          <ShopPage />
        </Route>
        <Route path="/sign-in">
          <SignInAndSignUp />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
