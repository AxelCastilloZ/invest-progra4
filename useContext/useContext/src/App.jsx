import { ThemeProvider } from "./context/ThemeContext"; 
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import Home from "./components/Home";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <ThemeToggle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
