import { combineReducers } from "redux";
import { penderReducer } from "redux-pender";
import coupon from "./coupon";
import link from "./link";
import store from "./store";
import user from "./user";

const reducers = combineReducers({
  pender: penderReducer,

  user,
  coupon,
  store,
  link,
});

export default reducers;
