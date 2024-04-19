import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar-container">
      <div className="navbar">
        {" "}
        <button className="hamburger">☰</button>
        <div className="navlink-container">
          <NavLink className="navlink active-link" to="/">
            Inicio
          </NavLink>
          <NavLink className="navlink active-link" to="/sobreMi">
            Sobre Mi
          </NavLink>
          <NavLink className="navlink active-link" to="/proyectos">
            Proyectos
          </NavLink>
          <NavLink className="navlink active-link" to="/contacto">
            Contacto
          </NavLink>
        </div>
        <div
          className={`hamburger-menu${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
