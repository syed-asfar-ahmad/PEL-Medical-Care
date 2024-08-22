import React from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const hours = [
    {
      id: 1,
      day: "Monday",
      time: "8:00 AM - 4:00 PM",
    },
    {
      id: 2,
      day: "Tuesday",
      time: "8:00 AM - 4:00 PM",
    },
    {
      id: 3,
      day: "Wednesday",
      time: "8:00 AM - 4:00 PM",
    },
    {
      id: 4,
      day: "Thursday",
      time: "8:00 AM - 4:00 PM",
    },
    {
      id: 5,
      day: "Friday",
      time: "8:00 AM - 1:00 PM",
    },
  ];

  return (
    <>
      <footer className={"container"}>
        <hr />
        <div className="content">
          <div>
            <img src="/logo.png" alt="logo" className="logo-img"/>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <Link to={"/"}>Home</Link>
              <Link to={"/appointment"}>Appointment</Link>
              <Link to={"/about"}>About Us</Link>
            </ul>
          </div>
          <div>
            <h4>Hours</h4>
            <ul>
              {hours.map((element) => (
                <li key={element.id}>
                  <span>{element.day}</span>
                  <span>{element.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <div>
              <FaPhone />
              <span>999-999-9999</span>
            </div>
            <div>
              <MdEmail />
              <span>pel-care@pel.com</span>
            </div>
            <div>
              <FaLocationArrow />
              <span>Lahore, Pakistan</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
