import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import dattaMaharajLogo from "../../assets/dattaMaharajLogo.png";
import Hero from "../hero/Hero";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(true);
  const reference = useRef();
  const navigate = useNavigate();
  const currentPath = window.location.pathname;
  const toggleNavbar = () => {
    reference.current.classList.toggle("active");
    setActive(!active);
    console.log(active);
  };
  return (
    <div className="Navbar">
      <header className="header" ref={reference}>
        <div className="logo">
          <img
            src={dattaMaharajLogo}
            alt="Datta Maharaj logo"
            className="logo"
          />
          <div className="logo-text">
            <span className="logo-name">Shri Datta Devsthan </span>
            <span className="logo-address">Dharangaon, Khadak. </span>
          </div>
        </div>

        <nav className="navbar">
          <ul className="navbar-list">
            <li
              onClick={() => {
                navigate("/");
                toggleNavbar();
              }}
            >
              <a className="navbar-link" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="navbar-link" href="#">
                About
              </a>
            </li>
            <li
              onClick={() => {
                navigate("/events");
                toggleNavbar();
              }}
            >
              <a className="navbar-link" href="#">
                Events
              </a>
            </li>
            <li
              onClick={() => {
                navigate("/donate");
                toggleNavbar();
              }}
            >
              <a className="navbar-link" href="#">
                Donate
              </a>
            </li>
            <li
              onClick={() => {
                navigate("/contact");
                toggleNavbar();
              }}
            >
              <a className="navbar-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="mobile-navbar-btn" onClick={toggleNavbar}>
          <RxHamburgerMenu name="menu-outline" className="mobile-nav-icon" />
          <GrClose name="close-outline" className="mobile-nav-icon" />
        </div>
      </header>

      {currentPath === "/" && <Hero active={active} />}
    </div>
  );
};

export default Navbar;
