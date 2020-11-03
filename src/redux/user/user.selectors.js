import { createSelector } from "@reduxjs/toolkit";

const selectUser = (state) => state.user;

// user.currentUser;
export const selectCurrentUser = createSelector(
  selectUser,
  (user) => user.currentUser
);
