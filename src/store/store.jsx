import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as users } from "./data/data.slice";

const reducers = combineReducers({ users });

export const store = configureStore({
  reducer: reducers,
});
