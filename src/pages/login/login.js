import { useNavigate } from 'react-router-dom';
import './login.css';

export default function Login() {
  const navigate = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();
    
    const registeredUsername = localStorage.getItem("username");
    const registeredPassword = localStorage.getItem("password");
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    if (username === registeredUsername && password === registeredPassword) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
    } else {
      alert('Incorrect username or password');
    }
  };

  return (
    <section className='loginBox'>
        <form className="login" onSubmit={loginHandler}>
          <h2>Log In</h2>
          <p>Access your account</p>
          <input id="username" type="text" placeholder="Username" required />
          <input id="password" type="password" placeholder="Password" required />
          <input type="submit" value="Log In" />
      <div className="links">
          <a onClick={() => navigate("/register")}>Create an account</a>
      </div>
    </form>
    </section>
  );
}
