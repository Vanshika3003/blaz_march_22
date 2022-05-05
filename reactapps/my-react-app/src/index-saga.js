import React from "react";
import ReactDOM from "react-dom/client";

import { createStore,compose, applyMiddleware } from "redux";

// import the createSalaMiddleware so that the current app can use it
import createSagaMiddleware from 'redux-saga';

import { Provider } from "react-redux";

import "./index.css";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import MainReduxSAGAomponent from "./components/sagaapp/mainsagacomponent";

import reportWebVitals from "./reportWebVitals";



// import reducer
import reducers from "./components/sagaapp/reducers/reducers";
// import saga
import rootSaga from "./components/sagaapp/sagas/sagas";
const enhancer =  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// create a Saga Middleware Object
// Initialization the Middleware for the current store and hence the application
const sagaMiddleware = createSagaMiddleware();


// create a store
// create a store with saga middleware
// the store knows that there may be async actions
let store = createStore(reducers,applyMiddleware(sagaMiddleware));

// keep the SAGA Middleware running at application level
sagaMiddleware.run(rootSaga); 

const root = ReactDOM.createRoot(document.getElementById("root"));

// configure the store with the application
root.render(
  <React.StrictMode>
    <Provider store={store}>
     <MainReduxSAGAomponent></MainReduxSAGAomponent>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
