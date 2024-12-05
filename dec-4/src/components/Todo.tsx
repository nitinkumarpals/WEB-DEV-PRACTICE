import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";
import { ModeToggle } from "./ui/mode-toggle";
import { Checkbox } from "./ui/checkbox";
const Todo = () => {
  const [todo, setTodo] = useState<{ text: string; completed: boolean }[]>([]);
  const [text, setText] = useState<string>("");
  const addTodo = () => {
    if (text.trim() !== "") {
      setTodo((prevTodo) => [...prevTodo, { text, completed: false }]);
    }
    setText("");
  };
  const toggle = (index: number) => {
    setTodo((prevTodo) =>
      prevTodo.map((item, i) =>
        i === index ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <>
      <ModeToggle />
      <div className="text-4xl font-bold text-center m-4">Todo App</div>
      <div className="flex justify-center">
        <Input
          className="m-4"
          onChange={(e) => setText(e.target.value)}
          value={text}
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              addTodo();
            }
          }}
        />
        <Button className="m-4" onClick={addTodo}>
          Add Todo
        </Button>
      </div>
      <div className="flex justify-center">
        <div>
          {todo.map((item, index) => (
            <div
              key={index}
              className="flex flex-wrap align-middle justify-center w-full max-w-lg"
            >
              {item.text !== "" && (
                <Checkbox
                  className="mr-2 mt-1"
                  onCheckedChange={() => toggle(index)}
                  checked={item.completed}
                />
              )}
              <span
                className={`${
                  item.completed ? "line-through" : ""
                } whitespace-normal break-words `}
              >
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Todo;
