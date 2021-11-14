import { useReducer } from "react";

const initState = {
  counter: 0,
};

type ActionType =
  | {
      type: "increase";
    }
  | { type: "decrease" }
  | { type: "custom"; payload: number };

const counterReducer = (state: typeof initState, action: ActionType) => {
  switch (action.type) {
    case "increase":
      return {
        ...state,
        counter: state.counter + 1,
      };

    case "decrease":
      return {
        ...state,
        counter: state.counter - 1,
      };

    case "custom":
      return {
        ...state,
        counter: action.payload,
      };

    default:
      return state;
  }
};

export const CounterRed = () => {
  const [{ counter }, dispatch] = useReducer(counterReducer, initState);

  return (
    <>
      <h2>Counter: {counter} </h2>
      <button
        className="btn btn-outline-secondary"
        onClick={() => dispatch({ type: "increase" })}
      >
        +1
      </button>
      <button
        className="btn btn-outline-secondary"
        onClick={() => dispatch({ type: "decrease" })}
      >
        -1
      </button>
      <button
        className="btn btn-outline-warning"
        onClick={() => dispatch({ type: "custom", payload: 100 })}
      >
        100
      </button>
    </>
  );
};
