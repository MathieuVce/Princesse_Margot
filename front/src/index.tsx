import React from 'react';
import './index.css';
import { theme } from './utils/utils';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Navigation from './navigation/Navigation';
import { ThemeProvider } from '@mui/material/styles';
import { ClientProvider } from './contexts/ClientContext';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ClientProvider>
      <ThemeProvider theme={theme}>
        <Navigation/>
      </ThemeProvider>
    </ClientProvider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
