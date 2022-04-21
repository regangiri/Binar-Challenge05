import { combineReducers } from "redux";
import carReducer from "./carReducer";
import searchReducer from "./searchReducer";
import paymentReducer from "./paymentReducer";

export const reducers = {
  carReducer,
  searchReducer,
  paymentReducer,
};

export default combineReducers({
  ...reducers,
});
