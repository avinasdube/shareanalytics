import React from "react";
import "./Home.scss";

const Home: React.FC = () => {
  return (
    <div className="Intro">
      <div className="Title">
        Invest in ideas
        <br />
        with share analysis
      </div>
      <p>
        Get simple, smart investment portfolios
        <br />
        curated by experts
      </p>
      <div className="buttons">
        <button id="sgn">Signup</button>
        <button>See analysis</button>
      </div>
      <p>Supported on India's largest brokers</p>
      <p id='link'>
        Don’t have a broker account?
        <a href="/">Open Broker Account</a>
      </p>
    </div>
  );
};

export default Home;
