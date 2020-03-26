import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Example from "../components/Example";

export default (
  <Router>
    <Switch>
      <Route path="/example" exact component={Example} />
    </Switch>
  </Router>
);