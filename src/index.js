import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { BidderProvider } from './routes/bidder/context/bidder.context';
import { BasicRequestorProvider } from './routes/basic-requestor/context/basic-requestor-context';
import { ProcurementAdminProvider } from './routes/procurement-admin/context/procurement-admin.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <BasicRequestorProvider>
        <BidderProvider>
          <ProcurementAdminProvider>
            <App />
          </ProcurementAdminProvider>
        </BidderProvider>
      </BasicRequestorProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
