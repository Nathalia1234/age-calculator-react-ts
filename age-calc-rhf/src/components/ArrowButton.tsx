import React from "react";
// Importa o SVG como URL (Vite resolve) — garantir arquivo em src/assets/images.
import ArrowIcon from "../assets/images/icon-arrow.svg";

// Tipagem das props do botão de seta.
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "md" | "lg";
};

// Componente do botão de seta.
export default function ArrowButton({
  // Tamanho do botão: médio ou grande.
  size = "lg",
  // Classe CSS adicional.
  className = "",
  // Outras props do botão.
  ...props
}: Props) {
  // Define dimensões com base no tamanho.
  const dim = size === "lg" ? "h-16 w-16" : "h-14 w-14";
  return (
    <button
      // Botão do formulário para calcular idade.
      type="submit"
      // Acessibilidade: descrição do botão.
      aria-label="Calcular idade"
      // Classes CSS para estilo e interatividade.
      className={`${dim} rounded-full grid place-items-center
        bg-[#854DFF] text-white shadow-md
        hover:bg-neutral-900 focus:outline-none focus:ring-4 focus:ring-purple-200
        active:translate-y-px transition ${className}`}
      {...props}
    >
      <img src={ArrowIcon} alt="" className="h-6 w-6" /> {/* Ícone da seta */}
    </button>
  );
}
