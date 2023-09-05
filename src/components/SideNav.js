import Logo from "../components/Logo";
import { NavLink } from "react-router-dom";

const SideNav = ({ children }) => {
  return (
    <div className="sidenav">
      <NavLink to="/">
        <Logo />
      </NavLink>

      {children}
    </div>
  );
};

export default SideNav;
