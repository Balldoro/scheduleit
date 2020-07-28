import React from "react";
import Auth from "./components/Auth/Auth";
import { GlobalStyles } from "./GlobalStyles";
import { Provider } from "react-redux";
import store from "./store/store";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyles />
        <Switch>
          <Redirect from="/" to="/login" exact />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" component={Auth} />
        </Switch>
        <h1>Hello from App!</h1>
      </Router>
    </Provider>
  );
}

export default App;
