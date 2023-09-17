import React, { useState } from "react";
import "./Home.scss";
import Signup from "../Signup/Signup";

const Home: React.FC = () => {
  const [signUpModal, setSignUpModal] = useState<boolean>(false);

  //  actions for modal ----
  const openSignUpModal = () => {
    setSignUpModal(true);
  };

  const handleClose = () => {
    setSignUpModal(false);
  };

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
        <button id="sgn" onClick={openSignUpModal}>
          Signup
        </button>
        <button>See analysis</button>
      </div>
      <p>Supported on India's largest brokers</p>
      <p id="link">
        Don’t have a broker account?
        <a href="/">Open Broker Account</a>
      </p>

      {signUpModal && <Signup onClose={handleClose} />}
    </div>
  );
};

export default Home;
