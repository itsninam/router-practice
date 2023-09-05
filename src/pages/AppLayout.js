import Logo from "../components/Logo";
import SideNav from "../components/SideNav";
import Map from "../components/Map";

import { NavLink, Outlet } from "react-router-dom";
import style from "./AppLayout.module.css";

const AppLayout = () => {
  return (
    <section className={style.layout}>
      <SideNav>
        <NavLink to="cities">Cities</NavLink>
        <NavLink to="countries">Countries</NavLink>

        <Outlet />
      </SideNav>
      <Map />
    </section>
  );
};

export default AppLayout;
