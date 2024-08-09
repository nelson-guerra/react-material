import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app.tsx';
import { CssBaseline } from '@mui/material';
import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
      <CssBaseline />
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </React.StrictMode>,
);
