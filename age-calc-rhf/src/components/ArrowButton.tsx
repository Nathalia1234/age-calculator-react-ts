import React from "react";
import ArrowIcon from "../assets/images/icon-arrow.svg";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "md" | "lg";
};

export default function ArrowButton({
  size = "lg",
  className = "",
  ...props
}: Props) {
  const dim = size === "lg" ? "h-16 w-16" : "h-14 w-14";
  return (
    <button
      type="submit"
      aria-label="Calcular idade"
      className={`${dim} rounded-full grid place-items-center
        bg-[#854DFF] text-white shadow-md
        hover:bg-neutral-900 focus:outline-none focus:ring-4 focus:ring-purple-200
        active:translate-y-px transition ${className}`}
      {...props}
    >
      <img src={ArrowIcon} alt="" className="h-6 w-6" />
    </button>
  );
}
