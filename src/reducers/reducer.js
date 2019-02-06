import balanceReducer from "./balanceReducer";
import toggleReducer from "./toggleReducers";
import { combineReducers } from "redux";

export default combineReducers({
  balance: balanceReducer,
  toggle: toggleReducer
});
