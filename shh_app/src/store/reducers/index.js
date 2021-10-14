import { combineReducers } from "redux";
import { penderReducer } from "redux-pender";
import consumerCoupon from "./consumerCoupon";
import store from "./store";
import receipt from "./receipt";
import coupon from "./coupon";

const reducers = combineReducers({
  pender: penderReducer,

  consumerCoupon,
  store,
  receipt,
  coupon,
});

export default reducers;
