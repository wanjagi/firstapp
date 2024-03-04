import React from "react"; 
import ReactDOM from "react-dom/client"; 
import Calculator from "./components/calculator.js"; 
import "./index.css";
  
const root = document.getElementById('root');
const rootElement = (
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>
);

const rootInstance = ReactDOM.createRoot(root);
rootInstance.render(rootElement);