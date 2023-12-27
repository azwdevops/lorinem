"use client";

import { createContext, useMemo, useState } from "react";

export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");
  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const value = useMemo(() => {
    return { toggle, mode };
  }, [mode]);

  return (
    <ThemeContext.Provider value={value}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
