import { createSlice } from "@reduxjs/toolkit";

import { getTelegramOperations } from "./telegram-operations";

const initialState = {
  items: [],
  loading: false,
  error: "",
};

const getTelegramSlice = createSlice({
  name: "telegram",
  initialState,
  extraReducers: {
    [getTelegramOperations.pending]: (store, payload) => {
      store.loading = true;
      store.error = null;
    },
    [getTelegramOperations.fulfilled]: (store, payload) => {
      store.loading = false;
      store.items = payload;
    },
    [getTelegramOperations.rejected]: (store, payload) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export default getTelegramSlice.reducer;
