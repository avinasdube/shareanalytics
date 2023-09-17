import React, { FormEvent, useState } from "react";

import "./Signup.scss";
import Modal from "../../ui/Modal";
const Logo: string = require("../../../assets/icons/logo-2.png");

// define the type of form data

type FormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

// define props for the Login component

type SignUpProps = {
  onClose?: () => void; // optional function to close the modal
};

const initialFormData: FormData = {
  email: "",
  password: "",
  confirmPassword: "",
};

const Signup: React.FC<SignUpProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit logic goes here");
    console.log(formData);
    onClose && onClose(); // call the onClose function if provided
  };

  const handleChage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCloseButton = () => {
    onClose && onClose(); // call the onClose function if provided
  };

  return (
    <Modal onClose={onClose}>
      <main className="main signup-page ">
        <section className="content">
          <div className="contentIntro">
            <div className="contentIntroTitle">
              <img src={Logo} alt="Logo" />
              <button className="close-btn" onClick={handleCloseButton}>
                <i className=" bx bx-x"></i>
              </button>
            </div>
            <p className="contentIntroDesc">Ready to Begin? Sign Up Now!</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="inputBox">
              <i className="inputBox--icon bx bx-envelope"></i>
              <input
                name="email"
                placeholder="Enter your email address"
                type="email"
                required
                value={formData.email}
                onChange={handleChage}
              />
            </div>

            <div className="inputBox">
              <i className="inputBox--icon bx bx-lock-alt"></i>
              <input
                name="password"
                placeholder="Enter your passsword"
                type="password"
                required
                value={formData.password}
                onChange={handleChage}
              />
            </div>

            <div className="inputBox">
              <i className="inputBox--icon bx bx-lock-alt"></i>
              <input
                name="confirmPassword"
                placeholder="Confirm your passsword"
                type="password"
                required
                value={formData.password}
                onChange={handleChage}
              />
            </div>

            <button type="submit">Sign Up</button>
          </form>
        </section>
      </main>
    </Modal>
  );
};

export default Signup;
