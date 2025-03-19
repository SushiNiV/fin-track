import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import './register.css';

export default function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const registerHandler = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/register", {
        Username: username,
        Password: password
      });

      alert("Registration Successful!");
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed.");
      console.error("Error:", error);
    }
  };

  return (
    <section className='regBox'>
      <section className="register">
        <div className="register-container">
          <h2>Create an Account</h2>
          <p>Sign up to start managing your finances.</p>
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
            <a onClick={() => navigate("/login")}>Already have an account? Log in</a>
          </div>
        </div>
      </section>
    </section>
  );
}