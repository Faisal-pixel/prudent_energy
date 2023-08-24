import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { BidderProvider } from './routes/bidder/context/bidder.context';
import { BasicRequestorProvider } from './routes/basic-requestor/context/basic-requestor-context';
import { ProcurementAdminProvider } from './routes/procurement-admin/context/procurement-admin.context';
import { ComponentContextProvider } from './components/component-context';
import { ITAdminProvider } from './routes/it-admin/context/it-admin.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ComponentContextProvider>
        <BasicRequestorProvider>
          <BidderProvider>
            <ProcurementAdminProvider>
              <ITAdminProvider>
                <App />
              </ITAdminProvider>
            </ProcurementAdminProvider>
          </BidderProvider>
        </BasicRequestorProvider>
      </ComponentContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
