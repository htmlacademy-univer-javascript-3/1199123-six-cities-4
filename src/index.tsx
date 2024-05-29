import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/app/App';
import { Provider } from 'react-redux';
import { store } from './store';
import { checkAuthorization, fetchFavorites, fetchOffers } from './api/api-action';

store.dispatch(fetchOffers());
store.dispatch(checkAuthorization());
store.dispatch(fetchFavorites());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>
);
