import Logo from "../components/Logo";
import SideNav from "../components/SideNav";
import Map from "../components/Map";

import { NavLink } from "react-router-dom";
import style from "./AppLayout.module.css";

const AppLayout = () => {
  return (
    <section className={style.layout}>
      <SideNav>
        <NavLink to="/">
          <Logo />
        </NavLink>
      </SideNav>
      <Map />
    </section>
  );
};

export default AppLayout;
