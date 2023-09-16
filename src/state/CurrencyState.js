// CurrencyState.js

import { atom } from "recoil";

export const currencyState = atom({
  key: "currencyState",
  default: "GBP", // Set the default currency as per your requirements
});
