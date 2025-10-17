import { combineReducers, configureStore } from "@reduxjs/toolkit";
import fetchReducers from "../reducers/fetchReducers";
const rootReducer = combineReducers({
  playList: fetchReducers,
});
const store = configureStore({
  reducer: rootReducer,
});
export default store;
