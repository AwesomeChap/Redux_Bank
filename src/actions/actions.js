import { WITHDRAW, DEPOSIT, TOGGLE_INFO } from "../constant";

export const withdrawAmount = amount => ({
  type: WITHDRAW,
  payload: amount
});

export const depositAmount = amount => ({
  type: DEPOSIT,
  payload: amount
});

export const toggleInfo = () => ({
  type: TOGGLE_INFO
});
