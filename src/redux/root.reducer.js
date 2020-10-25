import userReducer from "./user/user.reducer";
import { combineReducers } from "@reduxjs/toolkit";

export default combineReducers({
  user: userReducer,
});
