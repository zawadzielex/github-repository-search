import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "core/store";
import Login from "view/Login";
import Success from "view/Success";
import Search from "view/Search";
import Details from "view/Details";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/auth/github/callback">
            <Success />
          </Route>
          <Route path="/details/:owner/:repo">
            <Details />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
