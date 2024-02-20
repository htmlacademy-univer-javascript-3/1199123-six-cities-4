import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import Settings from './const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <App placesToStay={Settings.PlacesToStay}/>
  </React.StrictMode>
);
