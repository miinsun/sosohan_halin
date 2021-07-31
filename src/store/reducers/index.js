import { combineReducers } from "redux";
import { penderReducer } from "redux-pender";

const reducers = combineReducers({
  pender: penderReducer,
});

export default reducers;
