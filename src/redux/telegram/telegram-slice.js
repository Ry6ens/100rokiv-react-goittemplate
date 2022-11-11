import { createSlice } from "@reduxjs/toolkit";

import { getTelegramOperations } from "./telegram-operations";

const initialState = {
  items: [],
  loading: false,
  success: false,
  error: "",
};

const getTelegramSlice = createSlice({
  name: "telegram",
  initialState,
  reducers: {
    clearTelegram: (state, { payload }) => {
      state.items = null;
      state.loading = false;
      state.success = false
      state.error = "";
    },
  },
  extraReducers: {
    [getTelegramOperations.pending]: (store, payload) => {
      store.loading = true;
      store.success = false;
      store.error = null;
    },
    [getTelegramOperations.fulfilled]: (store, payload) => {
      store.loading = false;
      store.items = payload;
      store.success = true;
    },
    [getTelegramOperations.rejected]: (store, payload) => {
      store.loading = false;
      store.success = false;
      store.error = payload;
    },
  },
});

export const telegramActions = getTelegramSlice.actions;

export default getTelegramSlice.reducer;
