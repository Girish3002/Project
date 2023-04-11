import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/hero/Hero";
import Events from "./components/events/Events";
import Testimonials from "./components/testimonials/Testimonials.jsx";
import Location from "./components/location/Location";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Hero/> */}
      <Events />
      <Testimonials />
      <Location />
      <Footer />
      {/* <h1 style={{ height: "300px" }}></h1> */}
    </div>
  );
}

export default App;
