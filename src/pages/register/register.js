import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import './register.css';

export default function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const registerHandler = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      await axios.post("http://localhost:5000/register", {
        Username: username,
        Password: password
      });

      alert("Registration Successful!");
      navigate("/login");
    } catch (error) {
      setError(error.response?.data?.message || "Registration failed.");
      console.error("Error:", error);
    }
  };

  return (
    <section className='regBox'>
      <section className="register">
        <div className="register-container">
          <h2>Create an Account</h2>
          <p>Sign up to start managing your finances.</p>
          
          {error && <p style={{ color: "red" }}>{error}</p>}

          <form onSubmit={registerHandler}>
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
            <input type="submit" value="Register" />
          </form>
          <div className="links">
          <button onClick={() => navigate("/login")} className="link-button">Already have an account? Log in</button>
          </div>
        </div>
      </section>
    </section>
  );
}