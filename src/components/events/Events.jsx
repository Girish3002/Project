import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EventCard from "../eventCard/EventCard";
import "./Events.css";
import EventData from "../EventData.jsx";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
    />
  );
}

export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div div className="Events">
        <div className="container">
          <h2 className="events-heading">Events and Festivals</h2>
          <Slider {...settings} style={{ width: "80vw", marginInline: "auto" }}>
            {EventData.map((event) => {
              return <EventCard key={event.id} event={event} />;
            })}
            {/* <div>
              <EventCard />
            </div>
            <div>
              <EventCard />
            </div>
            <div>
              <EventCard />
            </div>
            <div>
              <EventCard />
            </div> */}
          </Slider>
        </div>
      </div>
    );
  }
}
