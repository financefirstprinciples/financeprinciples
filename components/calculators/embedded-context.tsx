"use client";

import { createContext, useContext, type ReactNode } from "react";

const EmbeddedCalculatorContext = createContext(false);

export function EmbeddedCalculatorProvider({ children }: { children: ReactNode }) {
  return (
    <EmbeddedCalculatorContext.Provider value={true}>
      {children}
    </EmbeddedCalculatorContext.Provider>
  );
}

export function useIsEmbeddedCalculator(): boolean {
  return useContext(EmbeddedCalculatorContext);
}
