import { removeTodo } from "../features/todo/todoSlice";
import { useAppSelector } from "../hooks";
import { useAppDispatch } from "../hooks";
const Todos = () => {
  const todos = useAppSelector((state) => state.todos.todos);
  const dispatch = useAppDispatch();
  return (
    <div className="text-center">
      {todos.map((todo) => (
        <div className="flex m-2 items-center justify-center">
          <div key={todo.id} className="mx-3">{todo.text}</div>
          <div>
            <button className="bg-black rounded-md p-2 text-white" onClick={() => dispatch(removeTodo(todo.id))}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todos;
