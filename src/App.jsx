import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";
import EventsPage from "./components/pages/EventsPage/EventsPage";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventsPage />} />
      </Routes>

      <Footer />
      {/* <h1 style={{ height: "300px" }}></h1> */}
    </div>
  );
}

export default App;
