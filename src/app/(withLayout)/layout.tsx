import { type ReactNode } from "react";

// The marketing page carries its own footer and anchor nav — no chrome needed here.
export default function CommonLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
