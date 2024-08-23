import type { ReactNode } from "react";

export function Card({ children }: { children: ReactNode }) {
  return (
    <div className="ml-5 w-full overflow-hidden rounded-lg border p-3 shadow-2xl">
      {children}
    </div>
  );
}

export default function PreviewCard({
  header,
  description,
  fullWidth = false,
  children,
}: {
  header: string;
  description?: string;
  fullWidth?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={`mb-12 overflow-hidden rounded-lg border shadow-2xl ${fullWidth ? "ml-5 w-full" : ""}`}
    >
      <div className="bg-cultured h-[300px] w-full">{children}</div>
      <div className="p-2">
        <div className="font-bold">{header}</div>
        {description && <div className="text-warpfiend">{description}</div>}
      </div>
    </div>
  );
}
