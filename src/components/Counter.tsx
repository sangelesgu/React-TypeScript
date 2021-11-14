import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increase = (num: number = 1): void => {
    setCounter(counter + num);
  };
  return (
    <>
      <h3>Counter:</h3>
      <span className="mt-3">Value: {counter}</span>
      <br />
      <button
        className="btn btn-outline-primary circle mt-2"
        onClick={() => increase()}
      >
        +1
      </button>

      <button
        className="btn btn-outline-primary mt-2 pl-2"
        onClick={() => increase(2)}
      >
        +2
      </button>

      <button
        onClick={() => setCounter(0)}
        className="btn btn-outline-danger mt-2"
      >
        Reset
      </button>
    </>
  );
};
