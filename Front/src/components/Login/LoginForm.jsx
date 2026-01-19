import { useState } from "react";

export default function LoginForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Usuario</span>
        </label>
        <input
          type="username"
          name="username"
          placeholder=""
          className="input input-bordered"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-control mx-auto">
        <label className="label">
          <span className="label-text">Contraseña</span>
        </label>
        <input
          type="password"
          name="password"
          placeholder="********"
          className="input input-bordered"
          value={formData.password}
          onChange={handleChange}
          required
        />
        
      </div>

      <button className="btn btn-primary w-full">Ingresar</button>
    </form>
  );
}