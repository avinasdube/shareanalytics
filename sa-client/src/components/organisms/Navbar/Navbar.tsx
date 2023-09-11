import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.scss";

const logo2: string = require("../../../assets/icons/logo-2.png");

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  // it is not best practice for SEO but for now it works
  // later if SEO was a concern replace these two with anchor tag or link or navlink
  const goHomeHandler = () => {
    navigate("/");
  };

  const goToLoginHandler = () => {
    navigate("/login");
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
        <button className="linkBtn" onClick={goToLoginHandler}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
