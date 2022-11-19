import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './redux/store';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import  productsData from './data/products.json'
import './assets/fonts/font.css'
import './assets/css/style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

store.dispatch({
  type: "FETCH_PRODUCTS",
  payload : {  products : productsData }
});

root.render(

    <Provider store={store}>
      <App />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
