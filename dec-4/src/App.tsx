import "./App.css";
import Todo from "./components/Todo";
import { ThemeProvider } from "./components/ui/theme-provider";
function App() {
  
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Todo />
    </ThemeProvider>
  );
}

export default App;
