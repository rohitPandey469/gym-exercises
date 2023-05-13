// where we connect our application to dom
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css';
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    // to use routes need to wrap inside browserRouter
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
