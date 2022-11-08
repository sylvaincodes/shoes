import { SET_CURRENCY } from "../actions/currencyActions"

const initState = {
    currencyName :  "USD",
    currencyRate :  1,
    currencySymbol: '$'
}

export const currencyReducer = (  state = initState  , action) => {

  if (action.type === SET_CURRENCY) {
    const currencyName = action.payload.currencyName;

    if (currencyName === "USD") {
      return {
        ...state,
        currencySymbol: "$",
        currencyRate: action.payload.currencyRate,
        currencyName
      };
    }
    if (currencyName === "EUR") {
      return {
        ...state,
        currencySymbol: "€",
        currencyRate: action.payload.currencyRate,
        currencyName
      };
    }
    if (currencyName === "XOF") {
      return {
        ...state,
        currencySymbol: "CFA",
        currencyRate: action.payload.currencyRate,
        currencyName
      };
    }
  }

  return state;

}
