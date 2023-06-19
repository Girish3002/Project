import React from "react";
import "./Hero.css";
import TypeWriter from "typewriter-effect";

const Hero = ({ active }) => {
  return (
    <div>
      <div className="Hero">
        {active && (
          <div className="type-writer">
            {/* <div className="static-text">Digambara Digambara</div> */}
            <div className="static-text"> दिगंबरा दिगंबरा</div>
            <div className="typewriter-text">
              {
                <TypeWriter
                  options={{
                    // strings: ["Shreepad Vallabh Digambara.", "Datta Gurunche Naam Smara.", "Bholi Seva Manya Kara."],
                    strings: [
                      "श्रीपाद वल्लभ दिगंबरा ",
                      "दत्त गुरुंचे नाम स्मरा ",
                      "भोळी सेवा मान्य करा ",
                    ],
                    autoStart: true,
                    loop: true,
                    cursorClassName: "cursor",
                  }}
                />
              }
            </div>
          </div>
        )}
        {/* <button onClick={() => navigate('/category')} className="cta btn-primary">Explore more</button> */}
      </div>
    </div>
  );
};

export default Hero;
