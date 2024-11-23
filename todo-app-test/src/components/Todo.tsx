import { Textarea } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useState } from "react";
interface TodoProps {
  setTodos: React.Dispatch<React.SetStateAction<string[]>>;
}
const Todo: React.FC<TodoProps> = ({setTodos}) => {
  const [text, setText] = useState<string>("");
 
  const addTodo = () => {
    if (text.trim() !== "") {
      setTodos((prevTodos) => [...prevTodos, text]);
      setText("");
    }
  };
  return (
    <div>
      <div className="flex justify-center">
        <Textarea
          variant="bordered"
          className="max-w-sm h-auto m-2 mt-3"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button
          color="primary"
          size="lg"
          className="m-2 mt-7 w-fit "
          onClick={addTodo}
        >
          Add
        </Button>
      </div>
    </div>
  );
};

export default Todo;
