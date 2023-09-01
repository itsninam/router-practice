import { NavLink } from "react-router-dom";
import Nav from "../components/Nav";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <header className={styles.homepage}>
      <div className={`wrapper ${styles.wrapper}`}>
        <Nav />
        <section>
          <h2>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
            laboriosam, iusto minima necessitatibus sit repudiandae fugiat
            tempora autem odit illo.
          </h2>
          <h3>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla,
            quod.
          </h3>
          <NavLink to="/login" className="button">
            Explore
          </NavLink>
        </section>
      </div>
    </header>
  );
};

export default HomePage;
