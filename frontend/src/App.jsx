import React, { useContext, useEffect } from "react";
import "./App.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Appointment from "./pages/Appointment";
import AboutUs from "./pages/AboutUs";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Context } from "./main";
import axios from "axios";


const App = () => {
  const { setIsAuthenticated, setUser} = useContext(Context);
  useEffect(()=>{
    const fetchUser = async()=>{
      try {
        const response = await axios.get("https://pel-medical-care.onrender.com/api/v1/user/patient/me", {withCredentials: true});
        setIsAuthenticated(true);
        setUser(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
      }
    };
    fetchUser();
  }, []
);
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/appointment" element={<Appointment/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Footer/>
      <ToastContainer position="top-center"/>
    </Router>

    </>
  )
}

export default App;
