import styles from "./Login.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Nav from "../components/Nav";

const Login = () => {
  const [userInput, setUserInput] = useState({
    email: "johndoe@gmail.com",
    password: "pass123",
  });

  return (
    <div className={`wrapper ${styles.wrapper}`}>
      <Nav />

      <section className={styles.loginSection}>
        <form action="">
          <label htmlFor="email">Please enter your email</label>
          <input
            type="text"
            id="email"
            value={userInput.email}
            onChange={(event) => setUserInput(event.target.value)}
          />

          <label htmlFor="password">Please enter your password</label>
          <input
            type="password"
            id="password"
            value={userInput.password}
            onChange={(event) => setUserInput(event.target.value)}
          />

          <NavLink to="/app" className={`button ${styles.loginButton}`}>
            Login
          </NavLink>
        </form>
      </section>
    </div>
  );
};

export default Login;
