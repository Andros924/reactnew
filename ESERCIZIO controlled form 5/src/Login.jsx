import { useState } from "react";

function Login({ onLogin }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    switch (type) {
      case "checkbox":
        setRememberMe(checked);
        break;
      default:
        if (name === "username") {
          setName(value);
        } else if (name === "password") {
          setPassword(value);
        }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (onLogin) {
      onLogin({ name, password, rememberMe });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        name="username"
        value={name}
        onChange={handleChange}
        required
      />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={handleChange}
        required
      />
      <br />
      <label htmlFor="rememberMe">
        <input
          type="checkbox"
          id="rememberMe"
          name="rememberMe"
          checked={rememberMe}
          onChange={handleChange}
        />
        Remember Me
      </label>
      <br />
      <button type="submit" disabled={!name || !password}>Login</button>
    </form>
  );
}

export default Login;