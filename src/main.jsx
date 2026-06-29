import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./contexts/AuthContext";
import { TooltipProvider } from "./components/ui/tooltip";
import CatalogProvider from "./contexts/CatalogContext";
import { ThemeProvider } from "./contexts/ThemeContext";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <TooltipProvider>
    <ThemeProvider>
      <AuthProvider>
        <CatalogProvider>
          <App />
          <ToastContainer />
        </CatalogProvider>
      </AuthProvider>
    </ThemeProvider>
  </TooltipProvider>
  // </StrictMode>
);
