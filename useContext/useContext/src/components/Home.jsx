import { useThemeContext } from "../hooks/useThemeContext";

function Home() {
  const { isDarkMode } = useThemeContext();

  return (
    <div
      style={{
        backgroundColor: isDarkMode ? "#222" : "#fff",
        color: isDarkMode ? "#fff" : "#000",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>{isDarkMode ? " Modo Oscuro" : " Modo Claro"}</h1>
    </div>
  );
}

export default Home;
