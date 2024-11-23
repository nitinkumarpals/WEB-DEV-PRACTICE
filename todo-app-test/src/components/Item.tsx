import { Checkbox } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
interface ItemProps {
  todos: string[];
  setTodos: React.Dispatch<React.SetStateAction<string[]>>;
}
const Item = ({ todos, setTodos }: ItemProps) => {
    const deleteTodo = (index: number) =>{
        setTodos((prevTodos)=> prevTodos.filter((todo,i)=> i !== index) )
    }
  return (
    <div className="flex justify-center">
      <ul>
        {todos.map((todo, index) => (
          <li className="p-2" key={index}>
            <Checkbox />
            {todo}
            <Button
              color="primary"
              size="sm"
              className="ml-2 absolute right-80"
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
