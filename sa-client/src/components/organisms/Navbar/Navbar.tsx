import React, { useState } from "react";
import "./Navbar.scss";
import Login from "../../pages/Login/Login";

const logo2: string = require("../../../assets/icons/logo-2.png");

const Navbar: React.FC = () => {
  const [showLoginWindow, setShowLoginWindow] = useState<boolean>(false);

  const handleloginButtonClick = () => {
    setShowLoginWindow(true);
  };

  const handleClose = () => {
    setShowLoginWindow(false);
  };

  return (
    <div className="navbar">
      {/* left-side of navbar */}

      <div className="leftSide">
        <div className="logo">
          <img src={logo2} alt=""></img>
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
        <button onClick={handleloginButtonClick}>Login</button>
        {showLoginWindow && <Login onClose={handleClose} />}
      </div>
    </div>
  );
};

export default Navbar;
