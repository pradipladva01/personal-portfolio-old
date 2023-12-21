import React, { useState } from "react";
import textureImg from "../resources/images/background_texture.png";
import Logo from "../resources/images/PradipLogo.svg";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = (props) => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const handleMenuClick = () => {
    setIsMenuActive((prevState) => !prevState);
  };
  return (
    <>
      <nav className="header_area">
        <div className="container">
          <div className="gx-row d-flex align-items-center justify-content-between">
            <NavLink to="/" className="logo">
              <h3>Pradip.</h3>
            </NavLink>
            <nav className={`navbar ${isMenuActive ? "active" : ""}`}>
              <ul className="menu">
                <li>
                  <NavLink to="/" onClick={handleMenuClick}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" onClick={handleMenuClick}>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/works" onClick={handleMenuClick}>
                    Works
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" onClick={handleMenuClick}>
                    Contact
                  </NavLink>
                </li>
              </ul>
              <NavLink to="/contact" className="theme_btn">
                <img src={textureImg} alt="" className="bg_img" />
                Let's talk
              </NavLink>
            </nav>

            <NavLink to="tel:+918980108806" className="theme_btn">
              <img src={textureImg} alt="" className="bg_img" />
              Let's talk
            </NavLink>

            <div
              className={`show_menu ${isMenuActive ? "active" : ""}`}
              onClick={handleMenuClick}
            >
              <span></span>
              <span></span>
              {/* <span></span> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
