import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  const NAV_LINKS = [
    { id: 1, text: "NOVO POLO", path: "/" },
    { id: 2, text: "UP", path: "/up-page" },
  ];

  return (
    <nav className="layout-navbar">
      <ul>
        {NAV_LINKS.map((link) => (
          <li key={link.id}>
            <Link to={link.path}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
