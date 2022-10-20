import { createSlice } from "@reduxjs/toolkit";

import { getSheetOperations } from "./sheet-operations";

const initialState = {
  items: [],
  loading: false,
  success: false,
  error: "",
};

const getSheetSlice = createSlice({
  name: "email",
  initialState,
  extraReducers: {
    [getSheetOperations.pending]: (store, payload) => {
      store.loading = true;
      store.success = false;
      store.error = null;
    },
    [getSheetOperations.fulfilled]: (store, payload) => {
      store.loading = false;
      store.success = true;
      store.items = payload;
    },
    [getSheetOperations.rejected]: (store, payload) => {
      store.loading = false;
      store.success = false;
      store.error = payload;
    },
  },
});

export default getSheetSlice.reducer;
