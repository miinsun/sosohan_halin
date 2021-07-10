import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
// import App from "./App";
// import StoreList from "./pages/storeList/StoreList";
// import StoreDetail from "./pages/storeDetail/StoreDetail";
// eslint-disable-next-line import/no-unresolved
import "bootstrap/dist/css/bootstrap.min.css";
// eslint-disable-next-line import/named
import CouponRecog from "./pages/CouponRecog/CouponRecog";

ReactDOM.render(
  <React.StrictMode>
    <CouponRecog />
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
