import { combineReducers } from "redux";
import { penderReducer } from "redux-pender";
import consumerCoupon from "./consumerCoupon";

const reducers = combineReducers({
  pender: penderReducer,

  consumerCoupon,
});

export default reducers;
