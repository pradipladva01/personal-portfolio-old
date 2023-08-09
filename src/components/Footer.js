import React from "react";
import Logo from "../resources/images/PradipL.svg";
import { Link, NavLink } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <section className="footer_area">
      <div className="container">
        <div className="row">
          <Link to="/" className="footer_logo">
            <img src={Logo} alt="" />
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
