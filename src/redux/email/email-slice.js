import { createSlice } from "@reduxjs/toolkit";

import { getEmailOperations } from "./email-operations";

const initialState = {
  items: [],
  loading: false,
  error: "",
};

const getEmailSlice = createSlice({
  name: "email",
  initialState,
  extraReducers: {
    [getEmailOperations.pending]: (store, payload) => {
      store.loading = true;
      store.error = null;
    },
    [getEmailOperations.fulfilled]: (store, payload) => {
      store.loading = false;
      store.items = payload;
    },
    [getEmailOperations.rejected]: (store, payload) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export default getEmailSlice.reducer;
