import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/index";
import Count from "./components/Count";
import Control from "./components/Control";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1> This is a Demo Of React Redux</h1>
        <p> A Basic structure of a react redux application.. </p>
        <Count />
        <Control/>
      </div>
    </Provider>
  );
}

export default App;

//Store
//Reducer
//action
//dispatch
//subscriber
