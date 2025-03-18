import { useNavigate } from 'react-router-dom';
import './register.css';

export default function Register() {
  const navigate = useNavigate();

  const registerHandler = (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      alert('Registration Successful!');
      navigate("/login");
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <section className='regBox'>
        <section className="register">
        <div className="register-container">
          <h2>Create an Account</h2>
          <p>Sign up to start managing your finances.</p>
          <form onSubmit={registerHandler}>
            <input id="username" type="text" placeholder="Username" required />
            <input id="password" type="password" placeholder="Password" required />
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
