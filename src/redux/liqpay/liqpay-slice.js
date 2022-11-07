import { createSlice } from "@reduxjs/toolkit";

import { getLiqPayOperations } from "./liqpay-operations";

const initialState = {
  keys: [],
  result: {},
  loading: false,
  error: "",
};

const getTelegramSlice = createSlice({
  name: "liqpay",
  initialState,
  extraReducers: {
    [getLiqPayOperations.pending]: (store, payload) => {
      store.loading = true;
      store.error = null;
    },
    [getLiqPayOperations.fulfilled]: (store, {payload}) => {
      store.loading = false;
      store.keys = payload;
    },
    [getLiqPayOperations.rejected]: (store, payload) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export default getTelegramSlice.reducer;
