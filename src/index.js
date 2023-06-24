import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App";
import './index.css';

import { ThemeContextProvider } from "./ThemeContext";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThemeContextProvider>
<React.StrictMode>
    <App />
  </React.StrictMode>
  </ThemeContextProvider>
  );