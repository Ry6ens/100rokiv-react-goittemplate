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
    addToBasket: (state, { payload }) => {
      const item = state.items.find(el => el.id === payload.id);
      if (item) {
        item.quantity += 1;
      } else state.items.push(payload);
      state.totalQuantity = state.items.length;
      state.totalAmount = state.items.reduce(
        (accm, { price, quantity }) => accm + price * quantity,
        0
      );
    },
    deleteFromBasket: (state, { payload }) => {
      console.log(payload.quantity);
      state.items = state.items.filter(el => el.id !== payload.id);
      state.totalQuantity = state.items.length;
      state.totalAmount = state.items.reduce(
        (accm, { price, quantity }) => accm + price * quantity,
        0
      );
    },
    incrementProduct: (state, { payload }) => {
      console.log(payload);
      const item = state.items.find(el => el.id === payload);
      item.quantity += 1;
      state.totalAmount = state.items.reduce(
        (accm, { price, quantity }) => accm + price * quantity,
        0
      );
    },
    decrementProduct: (state, { payload }) => {
      const item = state.items.find(el => el.id === payload);
      item.quantity -= 1;
      state.totalQuantity = state.items.length;
      state.totalAmount = state.items.reduce(
        (accm, { price, quantity }) => accm + price * quantity,
        0
      );
      if (!item.quantity) {
        const itemIndex = state.items.findIndex(el => el.id === payload);
        state = state.items.splice(itemIndex, 1);
      } else state.totalQuantity = state.items.length;
    },
  },
});

export const productActions = getProductsSlice.actions;

export default getProductsSlice.reducer;
