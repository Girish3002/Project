import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import dattaMaharajLogo from "../../assets/dattaMaharajLogo.png";
import Hero from "../hero/Hero";

const Navbar = () => {
  const [active, setActive] = useState(true);
  const reference = useRef();
  const toggleNavbar = () => {
    reference.current.classList.toggle("active");
    setActive(!active);
    console.log(active);
  };
  return (
    <div className="Navbar">
      <header className="header" ref={reference}>
        <div className="logo">
          <img src={dattaMaharajLogo} alt="Datta Maharaj logo" class="logo" />
          <div className="logo-text">
            <span className="logo-name">Shri Datta Devasthan </span>
            <span className="logo-address">Dharangaon, Khadak. </span>
          </div>
        </div>

        <nav class="navbar">
          <ul class="navbar-list">
            <li>
              <a class="navbar-link" href="#">
                Home
              </a>
            </li>
            <li>
              <a class="navbar-link" href="#">
                About
              </a>
            </li>
            <li>
              <a class="navbar-link" href="#">
                Events
              </a>
            </li>
            <li>
              <a
                class="navbar-link"
                href="https://www.instagram.com/thapatechnical/"
                target="_blank"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div class="mobile-navbar-btn" onClick={toggleNavbar}>
          <GiHamburgerMenu name="menu-outline" class="mobile-nav-icon" />
          <GrClose name="close-outline" class="mobile-nav-icon" />
        </div>
      </header>
      <Hero active={active} />
    </div>
  );
};

export default Navbar;
