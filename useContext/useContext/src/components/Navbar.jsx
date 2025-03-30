import { useThemeContext } from "../hooks/useThemeContext";

function Navbar() {
  const { isDarkMode } = useThemeContext();

  return (
    <nav
      style={{
        backgroundColor: isDarkMode ? "#333" : "#eee",
        color: isDarkMode ? "#fff" : "#000",
        padding: "10px",
        textAlign: "center",
      }}
    >
      <h2>Mi Aplicación</h2>
    </nav>
  );
}

export default Navbar;
