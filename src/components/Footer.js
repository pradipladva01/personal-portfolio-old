import React from "react";
import Logo from "../resources/images/PradipLogo.svg";
import { Link, NavLink } from "react-router-dom";
import "../styles/Footer.css";

const Footer = (props) => {
  return (
    <section className="footer_area">
      <div className="container">
        <div className="row justify-content-center">
          <Link to="/" className="footer_logo">
            <h3>Pradip.</h3>
          </Link>
          <ul className="footer_menu">
            <li className="menu_item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="menu_item">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="menu_item">
              <NavLink to="/works">Works</NavLink>
            </li>
            <li className="menu_item">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          <p className="copyright">
            &copy; {new Date().getFullYear()} <span>Pradip Ladva</span> All
            rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
