import { combineReducers } from "redux";
import { penderReducer } from "redux-pender";
import consumerCoupon from "./consumerCoupon";
import receipt from "./receipt";
import coupon from "./coupon";

const reducers = combineReducers({
  pender: penderReducer,

  consumerCoupon,
  receipt,
  coupon,
});

export default reducers;
