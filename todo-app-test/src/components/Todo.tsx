import { Textarea } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useState } from "react";
interface Todo {
  text: string;
  completed: boolean;
}
interface TodoProps {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  editingIndex: number | null;
  setEditingIndex: React.Dispatch<React.SetStateAction<number | null>>;
}
const Todo: React.FC<TodoProps> = ({ setTodos,editingIndex,setEditingIndex }) => {
  const [text, setText] = useState<string>("");

  const addOrEditTodo = () => {
    if (text.trim() !== "") {
      if (editingIndex === null) {
        setTodos((prevTodos) => [
          ...prevTodos,
          { text: text, completed: false },
        ]);
        setText("");
      }
      else{
        setTodos((prevTodos)=> prevTodos.map(todo,index)=> 
        index === editingIndex ? {...todo,text} : todo
        )
      }
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
          onClick={addOrEditTodo}
        >
          Add
        </Button>
      </div>
    </div>
  );
};

export default Todo;
