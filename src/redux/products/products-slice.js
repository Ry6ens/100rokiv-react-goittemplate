import { createSlice } from '@reduxjs/toolkit';

import { getProducts, getProductsByCategory } from './products-operations';

const initialState = {
  items: [],
  itemsByCategory: [],
  deliveryPrice: 0,
  totalQuantity: 0,
  subTotal: 0,
  totalAmount: 0,
  loading: false,
  error: '',
};

const getProductsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: {
    [getProducts.pending]: (store, payload) => {
      store.loading = true;
      store.error = null;
    },
    [getProducts.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items = payload;
    },
    [getProducts.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    //* getProductsByCategory

    [getProductsByCategory.pending]: (store, payload) => {
      store.loading = true;
      store.error = null;
    },
    [getProductsByCategory.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.itemsByCategory = payload;
    },
    [getProductsByCategory.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export default getProductsSlice.reducer;
