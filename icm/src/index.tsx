import { createRoot } from "react-dom/client";
import App from "./app";
import "./main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Dashboard from "./pages/dashboard";

const root = createRoot(document.body);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<App />} /> */}
        <Route path="/" element={<Dashboard />} />
        {/* <Route path="/work" element={<App />} /> */}
        {/* <App /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
