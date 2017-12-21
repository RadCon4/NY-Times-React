import React from "react";

import { Route, IndexRoute, Router, browserHistory } from "react-router";

import Main from "../components/Main";
import Search from "../components/Search";
import Saved from "../components/Saved";

export default (

  <Router history={browserHistory}>
    <Route path="/" component={Main}>

      {}
      <Route path="Search" component={Search} />
      <Route path="Saved" component={Saved} />

      {}
      <IndexRoute component={Search} />

    </Route>
  </Router>
);
