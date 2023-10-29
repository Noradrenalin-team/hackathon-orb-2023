import React from "react";
import ReactDOM from "react-dom/client";
import App from "app";
import {checkToken} from 'shared/utils'

if (localStorage.getItem('isLogin') !== "true") {
  localStorage.setItem('isLogin', 'false')
}

if (!checkToken(localStorage.getItem('TOKEN'))) {
  localStorage.removeItem('TOKEN')
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
