"use client";

import { useEffect, useState, type ReactNode } from "react";

// StrictMode runs effects twice in dev; MSW throws if started twice
let mswStartPromise: Promise<unknown> | null = null;

export function MSWProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(
    () => process.env.NODE_ENV !== "development"
  );

  useEffect(() => {
    if (process.env.NODE_ENV !== "development") return;

    mswStartPromise ??= import("@/mocks/browser").then(({ worker }) =>
      worker.start({ onUnhandledRequest: "bypass" })
    );
    mswStartPromise.catch(() => {}).finally(() => setReady(true));
  }, []);

  if (!ready) return null;
  return <>{children}</>;
}
