import React, { useState, FormEvent } from "react";
import { useAppDispatch } from "../hooks";
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useAppDispatch();
  const addTodoHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <div>
      <form onSubmit={addTodoHandler} className="flex flex-col items-center m-5">
        <input
          className="w-max bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          type="text"
          placeholder="enter your todos..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="bg-black text-white rounded-md p-2 m-2 w-max"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
