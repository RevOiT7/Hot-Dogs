import React from "react";
import ReactDOM from "react-dom";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root/rootSaga.js";
import rootReducer from "./root/rootReducer";


import App from "./App";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById("root")
);
