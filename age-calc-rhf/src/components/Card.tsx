import React from "react";

// Container do cartão com raio especial no canto inferior direito.
export default function Card({ children }: { children: React.ReactNode }) {
  return (
    // Cartão branco com sombra, padding e bordas arredondadas.
    <div className="w-full max-w-2xl bg-white shadow-xl p-6 sm:p-10 rounded-2xl sm:rounded-br-[8rem]">
      {children}
      {/* Créditos no rodapé, centralizado e discreto */}
      <p className="mt-8 text-center text-xs text-purple-500">
        Created by <span className="font-semibold">Nathalia Ohana</span>
      </p>
    </div>
  );
}
