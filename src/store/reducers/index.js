import { combineReducers } from "redux";
import { penderReducer } from "redux-pender";
import coupon from "./coupon";
import user from "./user";

const reducers = combineReducers({
  pender: penderReducer,

  user,
  coupon,
});

export default reducers;
