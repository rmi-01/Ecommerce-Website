import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/header.js";
import HomePage from "./pages/homepage/HomePage.js";
import ShopPage from "./pages/shop/ShopPage.js";
import "./app.css";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.js";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/shop">
          <ShopPage />
        </Route>
        <Route path="/signIn">
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
