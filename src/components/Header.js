import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <h1>Header component</h1>
      <NavLink activeClassName="is-active" exact to="/">Dashboard</NavLink>
      <NavLink activeClassName="is-active" to="/create">Create</NavLink>
      <NavLink activeClassName="is-active" to="/help">Help</NavLink>
      <NavLink activeClassName="is-active" to="/edit">Edit</NavLink>
    </div>
  );
}

export default Header;
