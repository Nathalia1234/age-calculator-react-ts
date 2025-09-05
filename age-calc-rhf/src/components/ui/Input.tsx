import React, { forwardRef, useId } from "react";
type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, error, id, className = "", ...rest }, ref) => {
    const autoId = useId();
    const finalId = id ?? autoId;
    return (
      <div className="flex flex-col gap-1">
        <label
          htmlFor={finalId}
          className={`uppercase text-xs tracking-widest font-extrabold ${
            error ? "text-[var(--danger)]" : "text-gray-500"
          }`}
        >
          {label}
        </label>
        <input
          ref={ref}
          id={finalId}
          className={`rounded-lg border px-3 py-3 text-lg outline-none 
    placeholder:font-bold
    focus:ring-4
    ${
      error
        ? "border-[var(--danger)] ring-red-100"
        : "border-gray-200 focus:border-[var(--accent)] ring-purple-100"
    } ${className}`}
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
Input.displayName = "Input";
export default Input;
