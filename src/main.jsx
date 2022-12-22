import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { SendDataContextProvider } from '@/context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SendDataContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SendDataContextProvider>
  </React.StrictMode>
);
