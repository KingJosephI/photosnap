import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PricingToggleProvider } from './context/PricingToggleContext';
import App from './App';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PricingToggleProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PricingToggleProvider>
  </React.StrictMode>
);
