import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/collection-overview";
import CollectionPage from "../collection/collection";

function ShopPage() {
  const match = useRouteMatch();
  return (
    <div className="shop-page">
      <Switch>
        <Route path={`${match.path}/:collectionId`}>
          <CollectionPage />
        </Route>
        <Route path={match.path}>
          <CollectionOverview />
        </Route>
      </Switch>
    </div>
  );
}

export default ShopPage;
