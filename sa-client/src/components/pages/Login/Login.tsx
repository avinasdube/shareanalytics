import React, { FormEvent, useState } from "react";
import "./Login.scss";
import Modal from "../../ui/Modal";
const Logo: string = require("../../../assets/icons/logo-2.png");

type FormData = {
  email: string;
  password: string;
};

interface LoginProps {
  onClose?: () => void;
}

const initialFormData: FormData = {
  email: "",
  password: "",
};

const Login: React.FC<LoginProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit login goes here");
    console.log(formData);
    onClose && onClose();
  };

  const handleChage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCloseButton = () => {
    onClose && onClose();
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
