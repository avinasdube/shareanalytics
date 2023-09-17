import React, { useState } from "react";
import "./Navbar.scss";
import Login from "../../pages/Login/Login";

const logo2: string = require("../../../assets/icons/logo-2.png");

// navbar component represents the top navigation bar

const Navbar: React.FC = () => {
  // state to manage whether the login window should be displayed

  const [showLoginWindow, setShowLoginWindow] = useState<boolean>(false);

  // handle click on the login button

  const handleloginButtonClick = () => {
    setShowLoginWindow(true); // show the login window
  };

  // handle the close action for the login window

  const handleClose = () => {
    setShowLoginWindow(false); // close the login window
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
        {showLoginWindow && <Login onClose={handleClose} />} {/* conditionally render the Login component */}
      </div>
    </div>
  );
};

export default Navbar;
