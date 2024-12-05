import { Checkbox } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
interface Todo {
  text: string;
  completed: boolean;
}
interface ItemProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const Item = ({ todos, setTodos }: ItemProps) => {
  const deleteTodo = (index: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo, i) => i !== index));
  };

  const toggle = (index: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  return (
    <div className="flex justify-center">
      <ul>
        {todos.map((todo, index) => (
          <li
            className={`p-2 ${
              todo.completed ? "line-through text-gray-400" : ""
            }`}
            key={index}
          >
            <Checkbox color="primary" onClick={() => toggle(index)} />
            <span className="ml-2">{todo.text}</span>
            <Button
              color="primary"
              size="sm"
              className="ml-2 absolute right-80"
              onClick={() => editTodo(index)}
            >
              Edit
            </Button>
            <Button
              color="danger"
              size="sm"
              className="ml-2 absolute right-40"
              onClick={() => deleteTodo(index)}
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Item;
