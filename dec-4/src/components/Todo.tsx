import { Input } from './ui/input';
import { Button } from './ui/button';
import { useState } from 'react';
import { ModeToggle } from './ui/mode-toggle';
import { Checkbox } from './ui/checkbox';
import { Edit } from 'lucide-react';
const Todo = () => {
    const [todos, setTodos] = useState<{ text: string; completed: boolean }[]>(
        []
    );
    const [input, setInput] = useState('');
    const [editing, setEditing] = useState<{
        index: number;
        text: string;
    } | null>();

    const addTodos = () => {
        if (input.trim() !== '') {
            setTodos((prevTodos) => [
                ...prevTodos,
                { text: input, completed: false }
            ]);
        }
        setInput('');
    };
    const editTodo = (index: number) => {
        setEditing({ index, text: todos[index].text });
    };

    const saveEdit = () => {
        if (editing) {
            setTodos((prevTodos) =>
                prevTodos.map((todo, i) =>
                    i === editing.index ? { ...todo, text: editing.text } : todo
                )
            );
            setEditing(null);
        }
    };
    const toggle = (index: number) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo, i) =>
                i === index ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (editing) {
            setEditing({ ...editing, text: e.target.value });
        }
        setInput(e.target.value);
    };

    return (
        <>
            <ModeToggle />
            <h1 className="text-center text-4xl font-bold">Todo App</h1>
            <div className="flex gap-4 m-4">
                <Input
                    className="border-black dark:border-white"
                    onChange={handleInputChange}
                    value={input}
                    onKeyDown={(e) => {
                        if (e.key == 'Enter') {
                            if (editing) saveEdit();
                            else addTodos();
                        }
                    }}></Input>
                {editing ? (
                    <Button onClick={saveEdit}>Add todo</Button>
                ) : (
                    <Button onClick={addTodos}>Add todo</Button>
                )}
            </div>
            <div className="flex justify-center">
                <div>
                    {todos.map((todo, index) => (
                        <div
                            className="flex justify-between align-middle flex-wrap  gap-4"
                            key={index}>
                            <Checkbox
                                className="mt-1"
                                onCheckedChange={() => toggle(index)}
                                checked={todo.completed}
                            />
                            {editing && editing.index === index ? (
                                <Input
                                    className="flex-1 break-words"
                                    value={editing.text}
                                    onChange={handleInputChange}
                                    onKeyDown={(e) => {
                                        if (e.key == 'Enter') {
                                            saveEdit();
                                        }
                                    }}
                                />
                            ) : (
                                <span
                                    className={`flex-1 break-words ${
                                        todo.completed ? 'line-through' : ''
                                    }`}>
                                    {todo.text}
                                </span>
                            )}
                            <Edit onClick={() => editTodo(index)} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Todo;
