// Importa o React e a função createRoot do ReactDOM para renderizar a aplicação.
import React from "react";
import ReactDOM from "react-dom/client";
// Importa o componente principal da aplicação.
// import App from "./App";
// Importa as rotas da aplicação.
import AppRoutes from "./routes/AppRoutes";
// Importa o arquivo CSS global, onde o Tailwind está configurado.
import "./index.css";

// Seleciona o elemento HTML com id 'root' e cria a raiz do React.
// O método createRoot é usado em vez de render (mais moderno e eficiente).
ReactDOM.createRoot(document.getElementById("root")!).render(
  // StrictMode ajuda a identificar potenciais problemas no desenvolvimento.
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
