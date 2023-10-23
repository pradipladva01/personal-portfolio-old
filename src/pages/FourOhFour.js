import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";

const FourOhFour = () => {
  return (
    <>
      <div class="container">
        <h1>404</h1>
        <p>Oops! The page you're looking for has flown into space.</p>
        <img src="astronaut.png" alt="Astronaut" id="astronaut" />
        <p>
          But don't worry, you can <a href="/">return to Earth</a>.
        </p>
      </div>
    </>
  );
};

export default FourOhFour;
