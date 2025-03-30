import { createContext, useState } from "react";

const ThemeContext = createContext(); // 👈 Crear el contexto

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext; // 👈 Esto es clave para que se pueda importar con 'default'
