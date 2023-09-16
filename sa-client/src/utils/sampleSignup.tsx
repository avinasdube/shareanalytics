// import React, { FormEvent, useState } from "react";
// import './Signup.scss';
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { AxiosError } from "axios";
// const Logo: string = require("../../../assets/icons/logo-2.png");

// type FormData = {
//   name: string;
//   email: string;
//   password: string;
// };

// const initialFormData: FormData = {
//   name: "",
//   email: "",
//   password: "",
// };

// const Signup: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>(initialFormData);

//   const navigate = useNavigate();

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {

//       // sending user input to 'http://localhost:8800/sa-server/auth/register' (through proxy set in package.json)

//       await axios.post("/auth/register", formData);
//       navigate("/login");
//     }
//     catch (err: any) {

//       // The 'any' type is used for err if you're not using AxiosError type
//       if (axios.isAxiosError(err)) {
//         // Handle Axios-specific error properties
//         const axiosError: AxiosError = err;
//         const data = axiosError.response?.data
//         console.log(data);
//       } else {
//         // Handle other types of errors here
//         console.error(err);
//       }
//     }
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <main className="main signupMain">
//       <section className="content">
//         <div className="contentIntro">
//           <div className="contentIntroTitle">
//             <img src={Logo} alt="Logo" />
//           </div>
//           <p className="contentIntroDesc">
//             Please input your details to sign up.
//           </p>
//         </div>

//         <form onSubmit={handleSubmit}>
//           <div className="inputBox">
//             <i className="inputBox--icon bx bx-user"></i>
//             <input
//               name="name"
//               placeholder="Enter your full name"
//               type="text"
//               required
//               value={formData.name}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="inputBox">
//             <i className="inputBox--icon bx bx-envelope"></i>
//             <input
//               name="email"
//               placeholder="Enter your email address"
//               type="email"
//               required
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="inputBox">
//             <i className="inputBox--icon bx bx-lock-alt"></i>
//             <input
//               name="password"
//               placeholder="Enter your passsword"
//               type="password"
//               required
//               value={formData.password}
//               onChange={handleChange}
//             />
//           </div>

//           <button type="submit">
//             Signup
//           </button>
//         </form>

//       </section>
//     </main>
//   )
// }

// export default Signup;