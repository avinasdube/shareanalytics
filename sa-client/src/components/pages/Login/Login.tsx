import React, { FormEvent, useState } from "react";
import "./Login.scss";
const Logo: string = require("../../../assets/icons/logo-1.png");

type FormData = {
  email: string;
  password: string;
};
const initialFormData: FormData = {
  email: "",
  password: "",
};
const Login: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit login goes here");
    console.log(formData);
  };
  const handleChage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <main className="main loginMain">
      <section className="content">
        <div className="content__intro">
          <div className="content__intro--title">
            <img src={Logo} alt="Logo" />
            <h1>Login to Share Analytics</h1>
          </div>
          <p className="content__intro--desc">
            Please input login details to gain access.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="loginForm content__form">
          <div className="loginForm__inputControl">
            <input
              name="email"
              placeholder="Enter your email address"
              className="loginForm__inputControl--input email"
              type="email"
              required
              value={formData.email}
              onChange={handleChage}
            />
            <i className="loginForm__inputControl--icon bx bx-envelope"></i>
          </div>
          <div className="loginForm__inputControl">
            <input
              name="password"
              placeholder="Enter your passsword"
              className="loginForm__inputControl--input password"
              type="password"
              required
              value={formData.password}
              onChange={handleChage}
            />
            <i className="loginForm__inputControl--icon bx bx-lock-alt"></i>
          </div>
          <button type="submit" className="loginForm__submitBtn">
            Log In
          </button>
        </form>
      </section>
    </main>
  );
};

export default Login;
