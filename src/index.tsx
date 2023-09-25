import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import { Main, Header } from './components';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <Main />
    <footer></footer>
  </React.StrictMode>,
);
