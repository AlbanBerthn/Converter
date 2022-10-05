import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import Converter from './components/Converter/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Converter />
  </React.StrictMode>
);

