import React from "react";
import { Link } from "react-router-dom";
// import './Header.module.css'
const Header = () => {
  return (
    <nav >
      <ul>
        <li>
          <Link to="/">Todos</Link>
        </li>
        <li>
          <Link to="/about">Comments</Link>
        </li>
        <li>
          <Link to="/contact">Albums</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;