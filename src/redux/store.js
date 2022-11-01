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
import getLiqpaySlice from 'redux/liqpay/liqpay-slice'

export const store = configureStore({
  reducer: {
    products: getProductsSlice,
    email: getEmailSlice,
    google: getSheetSlice,
    telegram: getTelegramSlice,
    liqpay: getLiqpaySlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
