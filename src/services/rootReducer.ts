import { combineReducers } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";

export const rootReducer = combineReducers({
  product: productReducer,
});
