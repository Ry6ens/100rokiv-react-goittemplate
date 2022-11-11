import { combineReducers } from '@reduxjs/toolkit';

import getEmailSlice from 'redux/email/email-slice';
import getSheetSlice from 'redux/google/sheet-slice';
import getTelegramSlice from 'redux/telegram/telegram-slice';
import getProductsSlice from 'redux/products/products-slice';
import getLiqPaySlice from 'redux/liqpay/liqpay-slice';
import getBasketProductsSlice from 'redux/basketProducts/basketProducts-slice';
import getBasketTicketsSlice from 'redux/basketTickets/basketTickets-slice';

const rootReducer = combineReducers({
  basketProducts: getBasketProductsSlice,
  basketTickets: getBasketTicketsSlice,
  products: getProductsSlice,
  email: getEmailSlice,
  google: getSheetSlice,
  telegram: getTelegramSlice,
  liqpay: getLiqPaySlice,
});

export default rootReducer;
