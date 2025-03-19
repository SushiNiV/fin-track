import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import './login.css';

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/login", {
        Username: username,
        Password: password
      });

      alert(response.data.message);
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
    } catch (error) {
      setError(error.response?.data?.message || "Login failed.");
    }
  };

  return (
    <section className='loginBox'>
        <form className="login" onSubmit={loginHandler}>
          <h2>Log In</h2>
          <p>Access your account</p>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input type="submit" value="Log In" />
          <div className="links">
          <button onClick={() => navigate("/register")} className="link-button">Create an account</button>
          </div>
        </form>
    </section>
  );
}