import { useLayoutEffect } from "react";
import Logo from "./Logo";

const Nav = () => {
  return (
    <nav>
      <Logo />
      <ul>
        <li>Pricing</li>
        <li>Product</li>
        <li className="button">Login</li>
      </ul>
    </nav>
  );
};

export default Nav;
