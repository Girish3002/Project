import React from "react";
import "./Location.css";

const Location = () => {
  return (
    <div className="Location">
      <div className="container">
        <h2 className="heading">Location</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d468.5129774529172!2d74.19237670057785!3d20.04609369376739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddcb32635baec5%3A0x2199414833fffad8!2zU2hyaSBOaXJndW4gUGFkdWthIE1hdGggLyDgpLbgpY3gpLDgpYAg4KSo4KS_4KSw4KWN4KSX4KWB4KSjIOCkquCkvuCkpuClgeCkleCkviDgpK7gpKA!5e0!3m2!1sen!2sin!4v1681124975091!5m2!1sen!2sin"
          width="800"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
