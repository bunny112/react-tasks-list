import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <ThemeContext.Provider value={{ isClicked, setIsClicked }}>
      {children}
    </ThemeContext.Provider>
  );
}
