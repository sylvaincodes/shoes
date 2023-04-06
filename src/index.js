import React , { useEffect } from "react";
import ReactDOM from "react-dom/client";
import productsData from "./data/short-product.json";
import "./assets/css/style.css";
import "./assets/fonts/font.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// store.dispatch({
//   type: "FETCH_PRODUCTS",
//   payload: { products: productsData },
// });

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <Provider store={store}>
      <App />
       </Provider>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
