import { createSlice } from "@reduxjs/toolkit";

import { getLiqPayOperations } from "./liqpay-operations";

const initialState = {
  items: [],
  loading: false,
  error: "",
  pay: ""
};

const getTelegramSlice = createSlice({
  name: "liqpay",
  initialState,
  extraReducers: {
    [getLiqPayOperations.pending]: (store, payload) => {
      store.loading = true;
      store.error = null;
    },
    [getLiqPayOperations.fulfilled]: (store, {meta, payload}) => {
      console.log(payload);
      store.loading = false;
      store.items = meta.arg;
      store.pay = payload.data;
    },
    [getLiqPayOperations.rejected]: (store, payload) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export default getTelegramSlice.reducer;
