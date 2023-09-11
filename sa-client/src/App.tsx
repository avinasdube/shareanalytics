// importing dependencies
import "./App.scss";
// importing AppRoute component

import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/organisms/Navbar/Navbar";
import Footer from "./components/organisms/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Login from "./components/pages/Login/Login";
import Signup from "./components/pages/Signup/Signup";

// main App function

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
