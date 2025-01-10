import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "./assets/scss/index.scss";

createRoot(document.getElementById("root")!).render(<App />);
