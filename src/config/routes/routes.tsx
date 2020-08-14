import React, { ReactElement } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Home from "components/pages/home";
import Search from "components/pages/search";
import Details from "components/pages/details";
import history from "services/history";

export default function Routes(): ReactElement {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search/:term" component={Search} />
        <Route path="/details/:imdbID" component={Details} />
      </Switch>
    </Router>
  );
}
