
import React from "react";
import "./Home.scss";

const Home: React.FC = () => {

  return (
    <div className="Intro">
      <h1 className="Title">
        Invest in ideas
        <br />
        with small cases
      </h1>
      <p className="Title-footer">
        Get simple, smart investment portfolios
        <br />
        curated by experts
      </p>
      <div className="buttons">
        <button className="btn-1">Download App</button>
        <button className="btn-2">See smallcases</button>
      </div>
      <p className="Available">Available on</p>
      <p className="Supported">Supported on India's largest brokers</p>
      <p className="Bank-acc">
        Don’t have a broker account?
        <a href="/">Open Broker Account</a>
      </p>
    </div>
  );
};

export default Home;
