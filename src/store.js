import { createStore, applyMiddleware } from "redux";
import { DEPOSIT, WITHDRAW } from "./constant";
import reducer from "./reducers/reducer";

const logger = store => next => action => {
  console.log("dispatching:", action);
  if (action.type === DEPOSIT || WITHDRAW) {
    if (action.payload === "") {
      action.payload = 0;
    }
  }
  return next(action);
};

const store = createStore(reducer, applyMiddleware(logger));

export default store;
