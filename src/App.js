import React from "react";
import { Provider } from "react-redux";

import HomePage from "./Components/homepage/HomePage";
import NavBar from "./Components/navbar/NavBar";

import store from "./app/store";

function App() {
  return (
    <Provider store={store}>
        <NavBar/>
        <HomePage/>
    </Provider>
  );
}

export default App;