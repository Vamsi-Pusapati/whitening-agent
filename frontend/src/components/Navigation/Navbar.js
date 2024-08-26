import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <NavLink exact to="/" activeClassName="active">
      Disadvantages of TiO₂
    </NavLink>
    <NavLink to="/replacement" activeClassName="active">
      Sustainable Alternatives
    </NavLink>
  </nav>
);

export default Navbar;