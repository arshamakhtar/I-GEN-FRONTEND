"use client";

import { useContext } from "react";
import { BackgroundContext, type BackgroundContextType } from "~/contexts/background-context";

export function useBackgroundContext(): BackgroundContextType {
  const context = useContext(BackgroundContext);

  if (!context) {
    throw new Error(
      "useBackgroundContext must be used within a BackgroundProvider",
    );
  }

  return context;
}
