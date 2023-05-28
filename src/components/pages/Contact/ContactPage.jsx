import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import "./ContactPage.css";
import Location from "../../location/Location";
const Contact = () => {
  return (
    <div className="EventsPage">
      <div className="container">
        <div className="ContactPageContainer">
          <div className="contact-page-left">
            <h2 className="events-heading">How to reach us? </h2>
            <div className="contact-page-container">
              <h3>For Queries</h3>
              <div className="contact-footer-phone">
                <div className="contact-phone-icon">
                  <BsFillTelephoneFill />
                </div>
                <div className="contact-phone-no">
                  <span style={{ fontWeight: 1000, color: "black" }}>
                    Please Call
                  </span>{" "}
                  <span style={{ color: "var(--primary-color" }}>
                    +91 7020114739
                  </span>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="contact-page-container">
              <h3>Address</h3>
              <div className="contact-footer-address">
                <span
                  style={{ display: "block", fontWeight: 1000, color: "black" }}
                >
                  Nirguna Paduka Math, Shri Datta Devasthan,
                </span>
                <span
                  style={{ display: "block", color: "var(--primary-color" }}
                >
                  Shri Kshetra Dharangaon Khadak,
                </span>
                <span
                  style={{ display: "block", color: "var(--primary-color" }}
                >
                  Taluka - Niphad, District - Nashik.
                </span>
              </div>
            </div>

            {/*  */}
            <div className="contact-page-container">
              <h3>Location</h3>
              <div className="contact-footer-address-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d468.5129774529172!2d74.19237670057785!3d20.04609369376739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddcb32635baec5%3A0x2199414833fffad8!2zU2hyaSBOaXJndW4gUGFkdWthIE1hdGggLyDgpLbgpY3gpLDgpYAg4KSo4KS_4KSw4KWN4KSX4KWB4KSjIOCkquCkvuCkpuClgeCkleCkviDgpK7gpKA!5e0!3m2!1sen!2sin!4v1681124975091!5m2!1sen!2sin"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="contact-page-right">
            <div className="sample-image">
              <div className="blank-image">
                <p>Devsthan images here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
