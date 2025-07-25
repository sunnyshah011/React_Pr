import React from "react";
import { NavLink, replace, useNavigate } from "react-router-dom";

const Navbar = () => {
  const Navigate = useNavigate();

  function redirect() {
    Navigate("/dashboard"), replace(true);
  }
  return (
    <nav>
      <div className="navbar">
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/about"> ABOUT </NavLink>
        <NavLink to="/dashboard"> DASHBOARD </NavLink>
        <NavLink to="/job"> JOB </NavLink>

        <button onClick={redirect}>visit dashboard</button>
      </div>
    </nav>
  );
};

export default Navbar;
