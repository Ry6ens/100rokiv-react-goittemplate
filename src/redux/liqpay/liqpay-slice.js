import { createSlice } from '@reduxjs/toolkit';

import {
  getLiqPayOperations,
  getLiqPayTicketsOperations,
} from './liqpay-operations';

const initialState = {
  keys: null,
  loading: false,
  error: '',
};

const getLiqPaySlice = createSlice({
  name: 'liqpay',
  initialState,
  reducers: {
    clearBasket: (state, { payload }) => {
      state.keys = null;
      state.loading = false;
      state.error = '';
    },
  },
  extraReducers: {
    // PayProduct
    [getLiqPayOperations.pending]: (store, payload) => {
      store.loading = true;
      store.error = null;
    },
    [getLiqPayOperations.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.keys = payload;
    },
    [getLiqPayOperations.rejected]: (store, payload) => {
      store.loading = false;
      store.error = payload;
    },

    // PayTicket
    [getLiqPayTicketsOperations.pending]: (store, payload) => {
      store.loading = true;
      store.error = null;
    },
    [getLiqPayTicketsOperations.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.keys = payload;
    },
    [getLiqPayTicketsOperations.rejected]: (store, payload) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export const basketLiqPayActions = getLiqPaySlice.actions;

export default getLiqPaySlice.reducer;
