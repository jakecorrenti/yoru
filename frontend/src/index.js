import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import { BrowserRouter} from 'react-router-dom';
import App from './App'

// This file handles the rendering between the dom

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

