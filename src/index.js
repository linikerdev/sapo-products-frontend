import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Routers from './routers';
import GlobalStyle from './globalStyled';

document.title = "PROJETO SAPO"
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Routers />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
