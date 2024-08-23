import type { ReactNode } from "react";

export default function Header({
  head,
  description,
  centerTexts = false,
  centerChildren = true,
  headFontSize = "big",
  halfWidth = true,
  children,
}: {
  head: string;
  description?: string;
  centerTexts?: boolean;
  centerChildren?: boolean;
  headFontSize?: "normal" | "big";
  halfWidth?: boolean;
  children?: ReactNode;
}) {
  return (
    <div
      className={`mb-3 mt-3 flex ${halfWidth ? "w-1/2" : ""} flex-col ${centerChildren ? "justify-center" : ""} ${centerTexts ? "text-center" : ""}`}
    >
      <h1
        className={`font-bold ${headFontSize === "big" ? "text-6xl" : "text-4xl"} mb-2`}
      >
        {head}
      </h1>
      {description && (
        <p className="text-warpfiend mb-2 text-xl">{description}</p>
      )}
      <div>{children && children}</div>
    </div>
  );
}
