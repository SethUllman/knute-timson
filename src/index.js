import React from '../node_modules/react';
import ReactDOM from '../node_modules/react-dom';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  
  const root = document.getElementById('root');
  ReactDOM.render(<Root/>, root);
});

