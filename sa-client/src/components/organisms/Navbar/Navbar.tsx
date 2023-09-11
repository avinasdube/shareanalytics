import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.scss";

const logo2: string = require("../../../assets/icons/logo-2.png");

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const goHomeHandler = () => {
    navigate("/");
  };

  return (
    <div className="navbar">
      {/* left-side of navbar */}

      <div className="leftSide">
        <div className="logo" onClick={goHomeHandler} title="home">
          <img src={logo2} alt="logo"></img>
        </div>
        <div className="appName">shareanalytics</div>
        <div className="links">
          <ul>
            <li>Discover</li>
            <li>Watchlist</li>
            <li>More</li>
          </ul>
        </div>
      </div>

      {/* right-side of navbar */}

      <div className="rightSide">
        <li>Resources</li>
        <a className="linkBtn" href="/Login">
          Login
        </a>
      </div>
    </div>
  );
};

export default Navbar;
