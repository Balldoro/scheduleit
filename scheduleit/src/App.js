import React from "react";
import Auth from "./components/Auth/Auth";
import { GlobalStyles } from "./GlobalStyles";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyles />
        <Redirect to="/login" />
        <Route path="/login" component={Auth} />
        <h1>Hello from App!</h1>
      </Router>
    </Provider>
  );
}

export default App;
