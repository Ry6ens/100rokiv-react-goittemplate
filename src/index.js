import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { StyledEngineProvider } from '@mui/material/styles';
import { HelmetProvider } from 'react-helmet-async';

import { App } from 'components/App';
import ScrollToTop from 'components/ScrollToTop/ScrollToTop';
import { store } from './redux/store';
import './styles/styles.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <StyledEngineProvider injectFirst>
          {/* <PersistGate loading={<Loader />} persistor={persistor}> */}
          <ScrollToTop />
          <HelmetProvider>
            <App />
          </HelmetProvider>
          {/* </PersistGate> */}
        </StyledEngineProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
