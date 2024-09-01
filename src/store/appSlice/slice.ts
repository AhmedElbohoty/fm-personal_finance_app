import { createSlice } from "@reduxjs/toolkit";

import initialState from "store/appSlice/initialState";

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
});

// Export action creators
// export const {} = appSlice.actions;

export default appSlice.reducer;
