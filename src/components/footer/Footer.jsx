import React from "react";
import dattaMaharajLogo from "../../assets/dattaMaharajLogo.png";
import MaheshGiriMaharajImg from "../../assets/mgm3.jpg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrFacebookOption } from "react-icons/gr";
import { BsYoutube } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="container">
        <div className="footer-top">
          <div className="founder-info">
            <div className="logo">
              <img
                src={MaheshGiriMaharajImg}
                alt="Datta Maharaj logo"
                className="logo"
              />
              <div className="logo-text">
                <p className="logo-name">Founder-Acharya </p>
                <p className="logo-address">Mahant Maheshgiri Maharaj. </p>
              </div>
            </div>
          </div>
          <div className="place-info">
            <div className="logo">
              <img
                src={dattaMaharajLogo}
                alt="Datta Maharaj logo"
                className="logo"
              />
              <div className="logo-text">
                <p className="logo-name">Shri Datta Devasthan </p>
                <p className="logo-address">
                  Nirgun Paduka Math, Dharangaon, Khadak.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="contact-footer">
            <hr />
            <h2>Contact</h2>
            <div className="contact-footer-details">
              <p>Nirguna Paduka Math, Sri Datta Devasthan,</p>{" "}
              <p> Sri Kshetra Dharangaon Khadak,</p>
              <p>Taluka - Niphad, District - Nashik.</p>
            </div>
            <div className="contact-footer-phone">
              <div className="contact-phone-icon">
                <BsFillTelephoneFill />
              </div>
              <div className="contact-phone-no">+91 7020114739</div>
            </div>
          </div>
          <hr />
          <div className="footer-end">
            <div className="footer-end-left">
              <p>
                © Copyright {new Date().getFullYear()}{" "}
                <strong>Datta Devsthan.</strong>
              </p>
            </div>
            <div className="footer-end-right-links">
              <GrFacebookOption
                onClick={() => {
                  window.open(
                    "https://www.facebook.com/maheshgirimaharaj01",
                    "_blank"
                  );
                }}
              />
              <BsYoutube
                onClick={() => {
                  window.open(
                    "https://www.youtube.com/@shridattadevsthandharangav4841",
                    "_blank"
                  );
                }}
              />
              <FiInstagram
                onClick={() => {
                  window.open(
                    "https://www.instagram.com/dattadevsthan1608/",
                    "_blank"
                  );
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
