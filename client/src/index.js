import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ScrollTop from './components/ScrollTop';
import { AuthContextProvider } from './context/UserContext';
import { BasketContextProvider } from './context/BasketContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <BasketContextProvider>
        <BrowserRouter>
          <ScrollTop />
          <App />
        </BrowserRouter>
      </BasketContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

