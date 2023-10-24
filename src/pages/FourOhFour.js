import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";

const FourOhFour = () => {
  return (
    <>
      <div className="fourohfour_section">
        <h1>
          40<span>4</span>
        </h1>
        <h6>Sorry...</h6>
        <p>Uh-Oh, You've Strayed Off the Path</p>
        <Link className="theme_btn" to="/">Find Your Way Back</Link>
      </div>
    </>
  );
};

export default FourOhFour;
