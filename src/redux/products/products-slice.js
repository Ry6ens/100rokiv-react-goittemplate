import { createSlice } from '@reduxjs/toolkit';

// import { getTicketsOperations } from "./tickets-operations";

const initialState = {
  items: [],
  selectOptions: 'закуски',
  totalQuantity: 0,
  totalAmount: 0,
};

const getProductsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    addOption: (state, { payload }) => {
      state.selectOptions = payload;
    },
    addToBasket: (state, {payload}) => {
      state.items.push(payload)
      state.totalQuantity ++
      state.totalAmount = state.items.reduce((accm, {price}) => accm + price, 0)
    }
  },
});

export const productActions = getProductsSlice.actions;

export default getProductsSlice.reducer;
