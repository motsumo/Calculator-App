import * as types from "../types";
import calculate from "../../utils/calculate";
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from "constants";

let initialState = {
  expression: "",
  total: 0
};

function setExpression({ expression, total }, action) {
  if (/[\d]*[-+%*/.]$/.exec(expression) && /[-+%*/.]/.exec(action.payload)) {
    console.log("b", expression);
    expression = expression.slice(0, expression.length - 1);
    console.log("a", expression);
  }

  switch (action.type) {
    case types.SET_EXPRESSION:
      if (["+", "/", "*", "%"].includes(action.payload) && !expression) {
        console.log(total)
        console.log(action.payload)
        return `${total}${action.payload}`;
      }
      console.log(total)
      if(action.payload === "%") {
        console.log(total)
        let percent = total/100;
        return `${percent}`;
      }
      return `${!expression && total ? total : ""}${expression +
        action.payload}`;
    default:
      return expression;
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_EXPRESSION:
      let expression = setExpression(state, action);
      return {
        ...state,
        expression,
        total: calculate(expression) || state.total
      };
    case types.CLEAR_EXPRESSION:
      return {
        ...state,
        expression: "",
        total: 0
      };
    case types.DELETE_LAST_EXPRESSION_ENTRY:
      let exp = state.expression;
      exp = exp
        .split("")
        .slice(0, exp.length - 1)
        .join("");
      return {
        ...state,
        expression: exp,
        total: calculate(exp)
      };
    case types.EVALUATE_EXPRESSION:
      return {
        ...state,
        expression: "",
        total: calculate(state.expression) || state.expression || state.total
      };
    default:
      return state;
  }
};
