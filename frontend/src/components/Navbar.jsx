import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/v1/user/patient/logout", {
        withCredentials: true,
      });
      toast.success(res.data.message);
      setIsAuthenticated(false);
      navigate("/login"); // Redirect to login after logout
    } catch (err) {
      toast.error(err.response?.data?.message || "Logout failed. Please try again.");
    }
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <nav className={"container"}>
      <div className="logo">
        <img src="/logo.png" alt="logo" className="logo-img" />
      </div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          <Link to="/" onClick={() => setShow(!show)}>Home</Link>
          <Link to="/appointment" onClick={() => setShow(!show)}>Appointment</Link>
          <Link to="/about" onClick={() => setShow(!show)}>About Us</Link>
        </div>
        {isAuthenticated ? (
          <button className="logoutBtn btn" onClick={handleLogout}>LOGOUT</button>
        ) : (
          <button className="loginBtn btn" onClick={goToLogin}>LOGIN</button>
        )}
      </div>
      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
