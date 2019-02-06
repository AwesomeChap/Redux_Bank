import { TOGGLE_INFO } from "../constant";

const initialState = {
  toggle: false
};

const toggleReducer = (state = initialState.toggle, action) => {
  // console.log(action);
  switch (action.type) {
    case TOGGLE_INFO:
      return !state;
    default:
      return state;
  }
};

export default toggleReducer;
