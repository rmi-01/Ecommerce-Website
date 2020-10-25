import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "userReducer",
  initialState: {
    currentUser: null,
  },
  reducers: {
    set_current_user: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export default user.reducer;

export const { set_current_user } = user.actions;
