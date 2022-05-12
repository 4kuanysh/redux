import "./App.css";
import { useDispatch, useSelector } from "react-redux";

import {
  incCounter,
  decCounter,
  resetCounter,
} from "./counter";

function App() {
  const dispatch = useDispatch();
  
  const state = useSelector((state) => {
    return {
      counter: state.counter.counter,
    };
  });

  const inc = () => {
    dispatch(incCounter(10));
  };
  const dec = () => {
    dispatch(decCounter(10));
  };
  const reset = () => {
    dispatch(resetCounter());
  };

  return (
    <div className="App App-header">

      <div className="counter">
        <h2>{state.counter}</h2>
        <button onClick={inc}>Increase 10</button>
        <button onClick={dec}>Decrease 10</button>
        <button onClick={reset}>Reset</button>
      </div>

    </div>
  );
}

export default App;
