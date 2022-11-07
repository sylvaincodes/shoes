import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/fonts/font.css'
import './assets/css/style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <React.StrictMode> {/* on passe le theme.js a notre style component */}
      <App/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
