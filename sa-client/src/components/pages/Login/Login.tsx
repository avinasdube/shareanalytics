import React, { FormEvent, useState } from "react";
import "./Login.scss";
import Modal from "../../ui/Modal";
const Logo: string = require("../../../assets/icons/logo-2.png");

// define the type of form data

type FormData = {
  email: string;
  password: string;
};

// define props for the Login component

interface LoginProps {
  onClose?: () => void; // optional function to close the modal
}

// initialize the form data with empty values

const initialFormData: FormData = {
  email: "",
  password: "",
};

// login component receives props, including an optional onClose function

const Login: React.FC<LoginProps> = ({ onClose }) => {
  // state to manage form data

  const [formData, setFormData] = useState<FormData>(initialFormData);

  // handle form submission

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit login goes here");
    console.log(formData);
    onClose && onClose(); // call the onClose function if provided
  };

  // handle input changes and update form data

  const handleChage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle close button click

  const handleCloseButton = () => {
    onClose && onClose(); // call the onClose function if provided
  };

  return (
    <Modal onClose={onClose}>
      <main className="main loginMain">
        <section className="content">
          <div className="contentIntro">
            <div className="contentIntroTitle">
              <img src={Logo} alt="Logo" />
              <button className="close-btn" onClick={handleCloseButton}>
                <i className=" bx bx-x"></i>
              </button>
            </div>
            <p className="contentIntroDesc">
              Please input login details to gain access.
            </p>
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

            <button type="submit">Log In</button>
          </form>
        </section>
      </main>
    </Modal>
  );
};

export default Login;
