import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <ul>
      <li>Contact</li>
      <li>Offer</li>
      <li>
        {" "}
        <NavLink to="/about">User</NavLink>
      </li>
      <li>Logout</li>
    </ul>
  );
};

export default NavBar;
