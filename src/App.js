import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage.js";
import ShopPage from "./pages/shop/ShopPage.js";

function App() {
  return (
    <Switch>
      <Route path="/shop">
        <ShopPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  );
}

export default App;
