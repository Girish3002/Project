import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";
import { useStyleMediaQuery } from "../hooks/useStyleMediaQuery";

const Testimonials = () => {
  const { matches: isSmall } = useStyleMediaQuery({
    mixOrMax: "max",
    widthOrHeight: "width",
    // value: 775,
    value: 600,
  });

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      // {
      //   breakpoint: 1124,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 1,
      //     infinite: true,
      //   },
      // },
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className="Testimonials">
      <div className="container">
        <h2 className="testimonials-heading">
          Testimonials and Visitors Experiences
        </h2>
        <Slider
          {...settings}
          style={{
            width: "80vw",
            marginInline: "auto",
            gap: "5px",
          }}
        >
          {links.map((item) => {
            return (
              <div className="testimonial-wrapper" key={item.id}>
                <iframe
                  className="testimonial-video"
                  width={isSmall ? "290" : "450"}
                  height={isSmall ? "200" : "315"}
                  src={item.url}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;

// <iframe width="560" height="315" src="https://www.youtube.com/embed/1JncoIK5aY8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
// <iframe width="560" height="315" src="https://www.youtube.com/embed/Gw46536ehZc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
// <iframe width="560" height="315" src="https://www.youtube.com/embed/In9HFA7i9Cg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
// <iframe width="560" height="315" src="https://www.youtube.com/embed/mbTjhuYhaFc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
// <iframe width="560" height="315" src="https://www.youtube.com/embed/V04u_cHQKQ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

// <iframe width="560" height="315" src="https://www.youtube.com/embed/9xUcoIio_vc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
// <iframe width="560" height="315" src="https://www.youtube.com/embed/FfZ4mVUdEFU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

const links = [
  { id: 1, url: "https://www.youtube.com/embed/V04u_cHQKQ4" },
  { id: 2, url: "https://www.youtube.com/embed/1JncoIK5aY8" },
  { id: 3, url: "https://www.youtube.com/embed/Gw46536ehZc" },
  { id: 4, url: "https://www.youtube.com/embed/In9HFA7i9Cg" },
  { id: 5, url: "https://www.youtube.com/embed/mbTjhuYhaFc" },
  { id: 6, url: "https://www.youtube.com/embed/9xUcoIio_vc" },
  { id: 7, url: "https://www.youtube.com/embed/FfZ4mVUdEFU" },
];
