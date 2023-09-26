import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import { Footer, Header, Main } from './components';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>,
);
