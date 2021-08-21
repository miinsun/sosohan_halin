import { combineReducers } from "redux";
import { penderReducer } from "redux-pender";
import user from "./user";

const reducers = combineReducers({
  pender: penderReducer,

  user,
});

export default reducers;
