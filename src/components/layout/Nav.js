import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-light fixed-top bg-light">
      <div className="container">
        <span className="navbar-brand mb-0 h1">scrAPPing</span>
        <Link to={"/"} className="btn btn-danger">
          {" "}
          Ver todas las Oportunidades
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
