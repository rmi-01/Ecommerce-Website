import { createSelector } from "@reduxjs/toolkit";

const selectDirectory = (state) => state.directory;

export const selectDirectoryItems = createSelector(
  selectDirectory,
  (directory) => directory.items
);
