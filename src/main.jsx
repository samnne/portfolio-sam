import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router"
import App from "./App.jsx";
import Works from "./Poems.tsx";
import Learning from "./Learning.tsx";
import Papers from "./Papers.tsx";




createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/works" element={<Works />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/papers" element={<Papers />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
