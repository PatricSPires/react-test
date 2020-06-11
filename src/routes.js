import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Results from "./pages/Results";
import Details from "./pages/Details";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/results" component={Results} />
        <Route path="/details" component={Details} />
      </Switch>
    </BrowserRouter>
  );
}
