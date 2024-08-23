import type { ReactNode } from "react";

type SectionType = "primary" | "secondary" | "normal";
export default function Section({
  type = "primary",
  maxHeight = true,
  children,
}: {
  type?: SectionType;
  maxHeight?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      className={`${type === "primary" ? "bg-black text-white" : ""} ${type === "secondary" ? "bg-cultured text-black" : ""} ${type === "normal" ? "bg-white text-black" : ""} ${maxHeight ? "h-[80vh]" : ""}`}
    >
      <div className="flex h-full p-5">{children}</div>
    </section>
  );
}
