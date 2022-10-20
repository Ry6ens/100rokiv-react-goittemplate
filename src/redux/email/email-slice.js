import { createSlice } from "@reduxjs/toolkit";

import { getEmailOperations } from "./email-operations";

const initialState = {
  items: [],
  loading: false,
  success: false,
  error: "",
};

const getEmailSlice = createSlice({
  name: "email",
  initialState,
  extraReducers: {
    [getEmailOperations.pending]: (store, payload) => {
      store.loading = true;
      store.success = false;
      store.error = null;
    },
    [getEmailOperations.fulfilled]: (store, payload) => {
      store.loading = false;
      store.success = true;
      store.items = payload;
    },
    [getEmailOperations.rejected]: (store, payload) => {
      store.loading = false;
      store.success = false;
      store.error = payload;
    },
  },
});

const successSlice = createSlice({
  name: "success",
  initialState,
  reducers: {
    successFalse: (state, { payload }) => (state.success = payload),
  },
});

export default getEmailSlice.reducer;
export const { successFalse } = successSlice.actions;
