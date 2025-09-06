// src/components/ui/Input.tsx
import React, { forwardRef, useId } from "react";

// Tipagem das props do input reutilizável.
// 'error' permite mostrar mensagem e estilizar o estado inválido.
type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  // Texto do label associado ao input.
  label: string;
  // ID opcional para o input; se não fornecido, um ID único é gerado.
  id?: string;
  // Mensagem de erro opcional para validação.
  error?: string;
};

// Componente de input reutilizável com label e mensagem de erro.
// Usa forwardRef para permitir referência direta ao elemento input.
const Input = forwardRef<HTMLInputElement, Props>(
  // Desestruturação das props e atribuição de valor padrão para className.
  ({ label, error, id, className = "", ...rest }, ref) => {
    // Geração de ID único se não for fornecido via props.
    const autoId = useId();
    // Determinação do ID final a ser usado no input e label.
    const finalId = id ?? autoId;
    // Renderização do componente.
    return (
      // Container flexível para label, input e mensagem de erro.
      <div className="flex flex-col gap-1">
        <label
          // Associação do label ao input via htmlFor.
          htmlFor={finalId}
          // Estilização condicional do label com base na presença de erro.
          className={`uppercase text-xs tracking-widest font-extrabold ${
            // Se houver erro, aplica a cor de perigo; caso contrário, cinza padrão.
            error ? "text-[var(--danger)]" : "text-gray-500"
          }`}
        >
          {label}
        </label>
        <input
          // Referência ao elemento input para manipulação direta.
          ref={ref}
          // Associação do input ao label via id.
          id={finalId}
          // Estilização do input com classes condicionais para estados normal e de erro.
          className={`rounded-lg border px-3 py-3 text-lg outline-none 
    placeholder:font-bold
    focus:ring-4
    
    ${
      // Se houver erro, aplica borda e anel de perigo; caso contrário, estilos padrão.
      error
        ? "border-[var(--danger)] ring-red-100"
        : "border-gray-200 focus:border-[var(--accent)] ring-purple-100"
      // Adiciona sombra ao focar, independente do estado.
    } ${className}`}
          // Propagação das props restantes para o input.
          {...rest}
          {...rest}
        />
        <span className="min-h-[1.1rem] text-sm text-[var(--danger)]">
          {error ?? ""}
        </span>
      </div>
    );
  }
);
// Definição do displayName para facilitar a depuração.
Input.displayName = "Input";
// Exportação do componente Input para uso em outras partes da aplicação.
export default Input;
