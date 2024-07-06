import { useState } from "react";
import "./styles.css";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    if (email === "test@test.com" && password === "12345678") {
      setMessage("Login Successful");
    } else {
      setMessage("Invalid email or password");
    }
  };
  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <div>
        <label className="label">Email</label>
        <input
          type="email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <br/>
        <label className="label">Password</label>
        <input
          type="password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin} className="button">
        Login
      </button>
     {message && (
        <p
          className={`paragraph ${message === "Login Successful" ? "success" : message === "Invalid email or password" ? "error" : ""}`}
        >
          {message}
        </p>
      )}
    </div>
  );
}
