import React, { createContext, useState } from "react";
import {
  loadThemeFromLocalStorage,
  saveThemeToLocalStorage,
} from "../utils/localStorageUtils";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(loadThemeFromLocalStorage()); //load saved theme from local storage

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    saveThemeToLocalStorage(newTheme); // save selected theme to local storage
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
