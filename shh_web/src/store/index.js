import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import penderMiddleware from "redux-pender";
import reducers from "./reducers";

const initialState = {};

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(penderMiddleware())),
);

export default store;
