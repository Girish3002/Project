import React from "react";
import "./FEventCard.css";

import { BsFillPassFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";

const EventCard = ({ event }) => {
  const navigate = useNavigate();
  // const history = useHistory();

  const handleKnowMoreClick = (slideId) => {
    // history.push(`/events/${slideId}`);
    navigate(`/events/#${slideId}`);
  };

  return (
    <div className="Cards ">
      <div className="card_item">
        <div className="card">
          <div className="eventLeft">
            <div className="eventImg">
              <img src={event.image} alt={event.title} />
            </div>
          </div>
          <div className="eventRight">
            <h3>{event.title}</h3>
            <p className="eventInfo">{event.description.slice(0, 130)}...</p>
            <div className="eventBottomButtons">
              <div className="firstButton">
                <div className="donation-logo">
                  <BsFillPassFill />
                </div>
                <div
                  className="text"
                  onClick={() => {
                    navigate("/donate");
                    window.scrollTo(0, 0);
                  }}
                >
                  Donation
                </div>
              </div>
              <div
                className="secondButton"
                onClick={() => {
                  handleKnowMoreClick(event.id);
                }}
              >
                Know more
                {/* <Link key={event.id} to={`/events#${event.id}`}></Link>Know more */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
