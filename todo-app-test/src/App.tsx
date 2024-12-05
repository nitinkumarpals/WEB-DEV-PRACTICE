import "./App.css";
import Item from "./components/Item";
import Todo from "./components/Todo";
import { useState } from "react";
interface TodoItem {
  text: string;
  completed: boolean;
}
function App() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [text, setText] = useState<string>("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  return (
    <>
      <div className="text-center text-6xl font-semibold tracking-tighter m-3">
        Todo List App
      </div>
      <div className="text-center text-2xl font-mono tracking-tighter text-blue-600">
        Add a todo
      </div>
      <Todo
        todos={todos}
        setTodos={setTodos}
        text={text}
        setText={setText}
        editingIndex={editingIndex}
        setEditingIndex={setEditingIndex}
      />
      <div className="text-center text-2xl font-mono tracking-tighter text-blue-600">
        Your Todos
      </div>
      <Item
        setTodos={setTodos}
        setText={setText}
        setEditingIndex={setEditingIndex}
      />
    </>
  );
}

export default App;
