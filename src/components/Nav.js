import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Nav = () => {
  return (
    <nav className="navbar">
      <Logo />
      <ul>
        <li>Pricing</li>
        <li>Product</li>
        <li>
          <NavLink to="/login" className="button">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
