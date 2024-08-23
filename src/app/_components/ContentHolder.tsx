import type { ReactNode } from "react";

export default function ContentHolder({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-1/2 flex-col items-center justify-center">
      {children}
    </div>
  );
}
