import { NavLink } from "react-router-dom";
import Nav from "../components/Nav";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={`wrapper ${styles.wrapper}`}>
      <Nav />

      <section className={styles.loginSection}>
        <form action="">
          <label htmlFor="email">Please enter your email</label>
          <input type="text" id="email" />

          <label htmlFor="password">Please enter your password</label>
          <input type="password" id="password" />

          <NavLink to="/app" className={`button ${styles.loginButton}`}>
            Login
          </NavLink>
        </form>
      </section>
    </div>
  );
};

export default Login;
