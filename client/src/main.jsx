import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import DetailsProvider from "./context/DetailsContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <DetailsProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </DetailsProvider>
)
