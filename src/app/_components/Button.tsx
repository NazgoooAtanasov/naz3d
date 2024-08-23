"use client";
import type { ReactNode } from "react";

type ButtonType = "primary" | "secondary";

export default function Button({
  type = "primary",
  submit = false,
  className = "",
  onClick,
  children,
}: {
  type?: ButtonType;
  submit?: boolean;
  className?: string;
  onClick?: (event: unknown) => void;
  children: ReactNode;
}) {
  const onclick = (event: unknown) => {
    if (onClick) {
      onClick(event);
    }
  };
  return (
    <button
      type={submit ? "submit" : "button"}
      onClick={onclick}
      className={`rounded-md pb-2 pl-8 pr-8 pt-2 ${type === "primary" ? "bg-black text-white" : "bg-white text-black"} ${className}`}
    >
      {children}
    </button>
  );
}
