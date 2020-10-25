import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "userReducer",
  initialState: {
    currentUser: null,
  },
  reducers: {
    SET_CURRENT_USER: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export default user.reducer;

export const { SET_CURRENT_USER } = user.actions;
