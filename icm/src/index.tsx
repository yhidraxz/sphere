import { createRoot } from "react-dom/client";
import App from "./app";
import "./main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Dashboard from "./pages/dashboard/dashboard";
import AuthGate from "./pages/auth/authGate";
import LoginPage from "./pages/auth/login";

const root = createRoot(document.body);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<App />} /> */}
        <Route path="/" element={<AuthGate />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage />} />

        {/* <Route path="/login" element={} /> */}
        {/* <Route path="/work" element={<App />} /> */}
        {/* <App /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// import { createRoot } from "react-dom/client";
// import App from "./app";
// import "./main.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import React from "react";
// import Dashboard from "./pages/dashboard/dashboard";
// import AuthGate  from "./pages/auth/authGate"
// import LoginPage from "./pages/auth/login";

// const root = createRoot(document.body);
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<AuthGate />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/login" element={<LoginPage />} />
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );
