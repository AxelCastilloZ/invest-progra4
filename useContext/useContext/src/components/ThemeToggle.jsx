import { useThemeContext } from "../hooks/useThemeContext";

function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useThemeContext();

  return (
    <button onClick={toggleTheme}>
      {isDarkMode ? "Modo Claro" : "Modo Oscuro"}
    </button>
  );
}

export default ThemeToggle; 
