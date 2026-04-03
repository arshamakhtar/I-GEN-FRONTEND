"use client";

import { createContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

export type BackgroundContextType = {
  useExperimentalUI: boolean;
  toggleExperimental: () => void;
};

export const BackgroundContext = createContext<BackgroundContextType | undefined>(
  undefined,
);

export function BackgroundProvider({ children }: { children: ReactNode }) {
  const [useExperimentalUI, setUseExperimentalUI] = useState(false);

  // Load from localStorage on mount (client-only)
  useEffect(() => {
    const stored = localStorage.getItem("use-experimental-ui");
    setUseExperimentalUI(stored === "true");
  }, []);

  const toggleExperimental = () => {
    const newValue = !useExperimentalUI;
    setUseExperimentalUI(newValue);
    localStorage.setItem("use-experimental-ui", String(newValue));
  };

  // Always provide context to avoid hydration issues
  return (
    <BackgroundContext.Provider value={{ useExperimentalUI, toggleExperimental }}>
      {children}
    </BackgroundContext.Provider>
  );
}
