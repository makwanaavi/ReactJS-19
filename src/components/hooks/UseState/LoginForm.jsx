import "./index.css";
import { useState } from "react";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const loginData = {
      username: username,
      password: password,
    };
    localStorage.setItem("loginData", JSON.stringify(loginData));
  };

  return (
    <div className="container" style={{ width: "500px" }}>
      <div className="card">
        <h1 className="mb-2 text-3xl ">Login Form</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            required
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            required
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};
