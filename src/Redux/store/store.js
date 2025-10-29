import { combineReducers, configureStore } from "@reduxjs/toolkit";
import fetchReducers from "../reducers/fetchReducers";
import searchReducers from "../reducers/searchReducers";
const rootReducer = combineReducers({
  playList: fetchReducers,
  searched: searchReducers,
});
const store = configureStore({
  reducer: rootReducer,
});
export default store;
