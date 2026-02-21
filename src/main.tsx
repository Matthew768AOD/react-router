// nezapomeňte instalovat React Router!!
// npm install react-router-dom
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // BrowserRouter poskytuje kontext směrování (routing context) všemu, co obsahuje 
// takže fungují věci jako Link, Routes, Navigate, useNavigate atd.
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter> {/* BrowserRouter obsahuje App, takže v App.tsx můžeme použít funkce react routeru */}
      <App /> 
    </BrowserRouter>
  </React.StrictMode>
);