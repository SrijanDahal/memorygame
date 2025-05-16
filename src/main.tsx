import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { FetchPokemon } from "./components/api";
import { Header } from "./components/ui/header";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <FetchPokemon />
  </StrictMode>
);
