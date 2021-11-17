import { useState } from "react";
import { Timer } from "./Timer";

export const TimerFather = () => {
  const [miliseconds, setMiliseconds] = useState(1000);

  return (
    <>
      <span>Miliseconds {miliseconds}</span>
      <br />

      <button
        className="btn btn-outline-success mt-2 mb-3"
        onClick={() => setMiliseconds(1000)}
      >
        1000
      </button>
      <button
        className="btn btn-outline-success mt-2 mb-3"
        onClick={() => setMiliseconds(2000)}
      >
        2000
      </button>
      <br />

      <Timer miliseconds={miliseconds} />
    </>
  );
};
