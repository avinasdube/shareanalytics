import React from 'react';
import './Navbar.scss';

const logo2: string = require('../../../assets/icons/logo-2.png');

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      {/* left-side of navbar */}

      <div className='leftSide'>
        <div className="logo">
          <img src={logo2} alt=''></img>
        </div>
        <div className="appName">
          shareanalytics
        </div>
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
        <button>Login</button>
      </div>
    </div>
  );
};

export default Navbar;
