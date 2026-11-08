import { lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router"

const App = lazy(() => import("./App.jsx"));
const Works = lazy(() => import("./Poems.tsx"));
const Learning = lazy(() => import("./Learning.tsx"));
const Papers = lazy(() => import("./Papers.tsx"));



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
