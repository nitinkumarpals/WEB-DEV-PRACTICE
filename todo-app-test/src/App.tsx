import "./App.css";
import Item from "./components/Item";
import Todo from "./components/Todo";
import { useState } from "react";
function App() {
  const [todos, setTodos] = useState<string[]>([]);

  return (
    <>
      <div className="text-center text-6xl font-semibold tracking-tighter m-3">
        Todo List App
      </div>
      <div className="text-center text-2xl font-mono tracking-tighter text-blue-600">
        Add a todo
      </div>
      <Todo setTodos={setTodos} />
      <div className="text-center text-2xl font-mono tracking-tighter text-blue-600">
        Your Todos
      </div>
      <Item todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
