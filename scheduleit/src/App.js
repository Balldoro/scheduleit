import React from "react";
import Auth from "./components/Auth/Auth";
import { GlobalStyles } from "./GlobalStyles";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Auth />
      <h1>Hello from App!</h1>
    </Provider>
  );
}

export default App;
