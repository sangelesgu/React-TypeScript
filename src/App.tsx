import { Counter } from "./components/Counter";
import { CounterRed } from "./components/CounterRed";
import { TimerFather } from "./components/TimerFather";
import { UserComponent } from "./components/User";

function App() {
  return (
    <div className="container mt-3">
      <h1>React + TypeScript</h1>
      <hr />
      <h2>useState</h2>
      <Counter />
      <UserComponent />

      <h2>useEffect - useRef</h2>
      <hr />
      <TimerFather />

      <h2>useReducer</h2>
      <hr />
      <CounterRed />
    </div>
  );
}

export default App;
