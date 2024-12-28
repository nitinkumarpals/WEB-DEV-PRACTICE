import "./App.css";
import { RootState } from "./redux/store";
import { useAppDispatch, useAppSelector } from "./hooks";
import { decrement, increment } from "./features/counter/counterSlice";

function App() {
  const count = useAppSelector((state: RootState) => state.counter.value);
  const dispatch = useAppDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <div>
      <button onClick={handleIncrement}>+</button>
      <p>Count is {count}</p>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}

export default App;
