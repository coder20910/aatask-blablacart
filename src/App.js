import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";

import HomePage from "./Components/homepage/HomePage";
import NavBar from "./Components/navbar/NavBar";

import store from "./app/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar/>
    
        <Route path="/" exact component={HomePage}></Route>
        
      </BrowserRouter>
    </Provider>
  );
}

export default App;