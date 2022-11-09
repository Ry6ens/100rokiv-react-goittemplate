import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import getEmailSlice from "redux/email/email-slice";
import getSheetSlice from "redux/google/sheet-slice";
import getTelegramSlice from "redux/telegram/telegram-slice";
import getProductsSlice from 'redux/products/products-slice'
import getLiqPaySlice from 'redux/liqpay/liqpay-slice'
import getBasketProductsSlice from 'redux/basketProducts/basketProducts-slice'
import getBasketTicketsSlice from 'redux/basketTickets/basketTickets-slice'

export const store = configureStore({
  reducer: {
    basketProducts: getBasketProductsSlice,
    basketTickets: getBasketTicketsSlice,
    products: getProductsSlice,
    email: getEmailSlice,
    google: getSheetSlice,
    telegram: getTelegramSlice,
    liqpay: getLiqPaySlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
