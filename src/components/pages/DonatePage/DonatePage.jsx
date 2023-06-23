import React from "react";
// import "./DonatePage.css";
import "./DonatePage.css";
// import DonatepageData from "../../Donatepagedata";
import { useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import QRcodeImg from "../../../assets/DonateQRcode.jpeg";

const DonatePage = () => {
  //   const { slideId } = useParams();
  //   const sectionRef = useRef({});

  //   useEffect(() => {
  //     const targetElement = sectionRef.current[slideId];
  //     console.log(targetElement);
  //     if (targetElement) {
  //       sectionRef.current[slideId].scrollIntoView({
  //         behavior: "smooth",
  //         block: "start",
  //       });
  //     }
  //   }, [slideId]);

  return (
    <div className="DonatePage">
      <div className="container">
        <div className="Donate-page-container">
          <div>
            <div>
              <h2 className="Donate-heading">Why Donate? </h2>
            </div>
            <div className="Donate-page-description qrcode">
              <div className="Donate-page-description-left">
                <p className="DonateInfo">
                  <p className="DonateInfo-padding">
                    At Dharangaon, one of the significant services provided is
                    offering free food to the devotees who visit this place.
                    Specially on Thursday there is MahaPrasad. This practice of
                    offering free food holds immense significance and serves
                    multiple purposes.
                  </p>
                  <p className="DonateInfo-padding">
                    Feeding others is often seen as a form of seva (selfless
                    service) in many spiritual traditions. When individuals
                    offer food to others, they engage in a spiritual practice
                    that promotes selflessness, empathy, and the welfare of
                    others. This resonates with the teachings and ideals of
                    Datta Maharaj.
                  </p>
                  <p className="DonateInfo-padding">
                    It is believed that Datta Maharaj stays close to those who
                    selflessly offer food and feed people. By participating in
                    such acts of service, individuals establish a deeper
                    spiritual connection with Datta Maharaj and invite his
                    presence into their lives.
                  </p>
                  <p className="DonateInfo-padding">
                    Remember, even a small donation can have a significant
                    impact when combined with the collective efforts of many.
                    So, feel free to donate and be part of the annadan service.
                    Your contribution will not only bring joy and nourishment to
                    others but also bring blessings and fulfillment to your own
                    heart.
                  </p>
                </p>
                {/* {element.id !== DonatepageData.length && (
                      <hr className="Donate-page-hr" />
                    )} */}
              </div>

              {/* images to be integrated here */}

              <div className="Donate-page-description-right-donate">
                <img className="donate-qr" src={QRcodeImg} alt="qrcodeimg" />
                <h3>SHREE DEOSTHAN TRUST</h3>
                <h4>shree91680119@barodampay</h4>
                <p className="qrcodep">SCAN TO PAY With Any BHIM UPI APP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;
