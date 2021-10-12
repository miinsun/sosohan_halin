import { combineReducers } from "redux";
import { penderReducer } from "redux-pender";
import consumerCoupon from "./consumerCoupon";
import receipt from "./receipt";

const reducers = combineReducers({
  pender: penderReducer,

  consumerCoupon,
  receipt,
});

export default reducers;
