import { createSlice } from "@reduxjs/toolkit";

import { getTicketsOperations } from "./tickets-operations";

const initialState = {
  items: [],
  loading: false,
  error: "",
};

const getTicketsSlice = createSlice({
  name: "tickets",
  initialState,
  extraReducers: {
    [getTicketsOperations.pending]: (store, payload) => {
      store.loading = true;
      store.error = null;
    },
    [getTicketsOperations.fulfilled]: (store, payload) => {
      store.loading = false;
      store.items.push(payload);
    },
    [getTicketsOperations.rejected]: (store, payload) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export default getTicketsSlice.reducer;
