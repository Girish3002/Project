import React from "react";
import "./EventCard.css";

import { BsFillPassFill } from "react-icons/bs";

const EventCard = ({event}) => {
  return (
    <div className="EventCard container">
      <div className="eventLeft">
        <div className="eventImg">
            
            <img src={event.image} alt={event.title} />
        </div>
      </div>
      <div className="eventRight">
        <h3>{event.title}</h3>
        <p className="eventInfo">
        {event.description.slice(0,130)}...
        </p>
        <div className="eventBottomButtons">
          <div className="firstButton">
            <div className="donation-logo">
              <BsFillPassFill />
            </div>
            <div className="text">Donation</div>
          </div>
          <div className="secondButton">Know more</div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
