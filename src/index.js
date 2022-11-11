import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { StyledEngineProvider } from '@mui/material/styles';
import { HelmetProvider } from 'react-helmet-async';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistedStore } from 'redux/store';

import { App } from 'components/App';
import ScrollToTop from 'components/ScrollToTop/ScrollToTop';
import Loader from 'components/Loader/Loader';

import './styles/styles.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistedStore}>
        <BrowserRouter>
          <HelmetProvider>
            <StyledEngineProvider injectFirst>
              <ScrollToTop />
              <App />
            </StyledEngineProvider>
          </HelmetProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
