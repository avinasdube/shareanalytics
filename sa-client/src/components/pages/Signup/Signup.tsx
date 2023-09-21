import React, { FormEvent, useState } from "react";

import "./Signup.scss";
import Modal from "../../ui/Modal";
import { useNavigate } from "react-router";
import axios, { AxiosError } from "axios";

const Logo: string = require("../../../assets/icons/logo-2.png");

// define the type of form data

type FormData = {
  name: string;
  email: string;
  password: string;
};

// define props for the Login component

type SignUpProps = {
  onClose?: () => void; // optional function to close the modal
};

const initialFormData: FormData = {
  name: "",
  email: "",
  password: "",
};

const Signup: React.FC<SignUpProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {

      // sending user input to 'http://shareanalytics-server.vercel.app/auth/register' (through proxy set in package.json)

      await axios.post("https://shareanalytics-server.vercel.app/auth/register", formData);
      navigate("/login");
    }
    catch (err: any) {

      // The 'any' type is used for err if you're not using AxiosError type

      if (axios.isAxiosError(err)) {
        // Handle Axios-specific error properties

        const axiosError: AxiosError = err;
        const data = axiosError.response?.data
        console.log(data);
      } else {
        // Handle other types of errors here

        console.error(err);
      }
    }
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
              <i className="inputBox--icon bx bx-user"></i>
              <input
                name="name"
                placeholder="Enter your full name"
                type="text"
                required
                value={formData.name}
                onChange={handleChage}
              />
            </div>

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

            <button type="submit">Sign Up</button>
          </form>
        </section>
      </main>
    </Modal>
  );
};

export default Signup;
