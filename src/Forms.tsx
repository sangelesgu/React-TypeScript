import { useForm } from "./hooks/useForm";

interface FormData {
  email: string;
  name: string;
  age: number;
}

export const Forms = () => {
  const { form, handleChange } = useForm<FormData>({
    email: "test@test.com",
    name: "Samuel Angeles Gutiérrez",
    age: 33,
  });

  const { email, name, age } = form;

  return (
    <form autoComplete="off" className="mb-4">
      <div className="mb-5">
        <label className="form-label">Email:</label>
        <input
          type="email"
          name="email"
          id=""
          className="form-control"
          value={email}
          onChange={(ev) => handleChange(ev)}
        />
      </div>
      <div className="mb-5">
        <label className="form-label">Nombre:</label>
        <input
          type="text"
          name="name"
          id=""
          className="form-control"
          value={name}
          onChange={(ev) => handleChange(ev)}
        />
      </div>

      <div className="mb-5">
        <label className="form-label">Edad:</label>
        <input
          type="text"
          name="age"
          id=""
          className="form-control"
          value={age}
          onChange={(ev) => handleChange(ev)}
        />
      </div>
      <pre>{JSON.stringify(form)}</pre>
    </form>
  );
};
