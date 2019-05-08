import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import ProductstoreService from './services/Productstore-service';
import { ProductstoreServiceProvider } from './components/Productstore-service-context';

import store from './store';

const productstoreService = new ProductstoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <ProductstoreServiceProvider value={productstoreService}>
        <Router>
          <App />
        </Router>
      </ProductstoreServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);