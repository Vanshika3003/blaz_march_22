import React from "react";
import ReactDOM from "react-dom/client";

import { createStore,compose } from "redux";

import { Provider } from "react-redux";

import "./index.css";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import MainReduxComponent from "./components/reduxapp/mainreduxcomponent";
import reportWebVitals from "./reportWebVitals";

// import reducer
import reducers from "./components/reduxapp/reducers/reducer";

const enhancer =  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// create a store

let store = createStore(reducers,enhancer);

const root = ReactDOM.createRoot(document.getElementById("root"));

// configure the store with the application
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MainReduxComponent></MainReduxComponent>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
