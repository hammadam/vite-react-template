import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/styles/global.css";
import App from "@/App";

// Vite 클라이언트 환경(브라우저)에서 사용 가능한 환경 변수
// console.log(import.meta.env);

const domNode = document.getElementById("react-app");
createRoot(domNode).render(
  <StrictMode>
    <App />
  </StrictMode>
);
