import { useState } from "react";

interface User {
  uid: string;
  name: string;
}

export const UserComponent = () => {
  const [user, setUser] = useState<User>();

  const login = () => {
    setUser({
      uid: "ABC123",
      name: "Samuel Angeles",
    });
  };

  return (
    <div className="mt-5">
      <h3>Usuario:</h3>

      <button onClick={login} className="btn btn-outline-primary mt-2">
        Login
      </button>

      {!user ? (
        <pre className="mt-3"> No hay usuario </pre>
      ) : (
        <pre className="mt-3"> {JSON.stringify(user)} </pre>
      )}
    </div>
  );
};
