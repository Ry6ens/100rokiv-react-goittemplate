import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const getBasketTicketsSlice = createSlice({
  name: 'basket-tickets',
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
      state.subTotal = state.items.reduce(
        (accm, { price, quantity }) => accm + price * quantity,
        0
      );
      state.totalAmount = state.subTotal;
    },
    deleteFromBasket: (state, { payload }) => {
      state.items = state.items.filter(el => el.id !== payload.id);
      state.totalQuantity = state.items.length;
      state.subTotal = state.items.reduce(
        (accm, { price, quantity }) => accm + price * quantity,
        0
      );
      state.totalAmount = state.subTotal;
    },
    incrementProduct: (state, { payload }) => {
      const item = state.items.find(el => el.id === payload);
      item.quantity += 1;
      state.subTotal = state.items.reduce(
        (accm, { price, quantity }) => accm + price * quantity,
        0
      );
      state.totalAmount = state.subTotal;
    },
    decrementProduct: (state, { payload }) => {
      const item = state.items.find(el => el.id === payload);
      item.quantity -= 1;
      state.totalQuantity = state.items.length;
      state.subTotal = state.items.reduce(
        (accm, { price, quantity }) => accm + price * quantity,
        0
      );
      state.totalAmount = state.subTotal;
      if (!item.quantity) {
        const itemIndex = state.items.findIndex(el => el.id === payload);
        state = state.items.splice(itemIndex, 1);
      } else state.totalQuantity = state.items.length;
    },
    clearBasket: (state, { payload }) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const basketTicketsActions = getBasketTicketsSlice.actions;

export default getBasketTicketsSlice.reducer;
