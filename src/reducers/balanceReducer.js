import { DEPOSIT, WITHDRAW } from "../constant";

let initialState = {
  balance: 0
};

const balanceReducer = (state = initialState.balance, action) => {
  const amount = action.payload;
  // console.log(amount);
  switch (action.type) {
    case DEPOSIT:
      return state + parseFloat(amount);
    case WITHDRAW:
      return state - parseFloat(amount);
    default:
      return state;
  }
};

export default balanceReducer;
