import React from "react";
import "./EventsPage.css";
import eventspageData from "../../eventpagedata";
import { useParams } from "react-router-dom";
import { useEffect, useRef } from "react";

const EventsPage = () => {
  const { slideId } = useParams();
  const sectionRef = useRef({});

  useEffect(() => {
    const targetElement = sectionRef.current[slideId];
    console.log(targetElement);
    if (targetElement) {
      sectionRef.current[slideId].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [slideId]);

  return (
    <div className="EventsPage">
      <div className="container">
        <div className="events-page-container">
          {eventspageData.map((element) => {
            return (
              <div key={element.id} id={element.id} ref={sectionRef}>
                <div>
                  <h2 className="events-heading">{element.title}</h2>
                </div>
                <div className="events-page-description">
                  <div className="events-page-description-left">
                    <p className="eventInfo">
                      <p className="eventInfo-padding">
                        {element.description[0]}
                      </p>
                      <p className="eventInfo-padding">
                        {element.description[1]}
                      </p>
                      <p className="eventInfo-padding">
                        {element.description[2]}
                      </p>
                    </p>
                    {element.id !== eventspageData.length && (
                      <hr className="events-page-hr" />
                    )}
                  </div>

                  {/* images to be integrated here */}

                  <div className="events-page-description-right">
                    {/* <img src="" alt="" /> */}
                    <div className="sample-image">
                      <div className="blank-image">
                        <p>Event related images here</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
