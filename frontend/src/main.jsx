import { BrowserRouter } from "react-router-dom"; // ✅ Correct import
import { createRoot } from "react-dom/client";
import "./index.css";
import "./i18n"; // ✅ i18n initialisation (EN ↔ HI)
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
