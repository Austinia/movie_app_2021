import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


// you can render only one component at the time
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);