import React from "react";
import "./AboutPage.css";
// import aboutpageData from "../../eventpagedata";
// import { useParams } from "react-router-dom";
// import { useEffect, useRef } from "react";
import maharajImg from "../../../assets/mgm3.jpg";

const AboutPage = () => {
  // const { slideId } = useParams();
  // const sectionRef = useRef({});

  // useEffect(() => {
  //   const targetElement = sectionRef.current[slideId];
  //   console.log(targetElement);
  //   if (targetElement) {
  //     sectionRef.current[slideId].scrollIntoView({
  //       behavior: "smooth",
  //       block: "start",
  //     });
  //   }
  // }, [slideId]);

  return (
    <div className="AboutPage">
      <div className="container">
        <div className="about-page-container">
          <div>
            <div>
              <h2 className="about-heading">
                Importance of Sri Kshetra Dharangaon Khadak
              </h2>
            </div>
            <div className="about-page-description">
              <div className="about-page-description-left">
                <p className="aboutInfo">
                  <p className="aboutInfo-padding">
                    Sri Gurudev Datta is the deity created by the union of the
                    three deities namely Brahma, Vishnu and Mahesh. The first
                    incarnation of Sri Gurudev Datta is Sripad Srivallabh and
                    the second incarnation is Sri Nrusimha Saraswati Maharaj.
                    Sri Nrusimha Saraswati Maharaj is the guru of the entire
                    world (jagadguru). They lived in ​​Gangapur for 23 years and
                    the importance of this place is known to the entire world.
                  </p>
                  <p className="aboutInfo-padding">
                    Jagadguru Nrusimha Saraswati Maharaj blessed Shri Guruvarya
                    Maheshgiri Maharaj on the auspicious occasion of Datta
                    Jayanti in December 2015 and asked him to continue his work.
                  </p>
                  <p className="aboutInfo-padding">
                    In order to reach this great work of social service to
                    maximum number of devotees, Shri Guruvarya Maheshgiri
                    Maharaj has established Prati Gangapur at Sri Kshetra
                    Dharangaon Khadak to serve the devotees just like Gangapur.
                    With the blessings of Sri Nrusimha Saraswati Maharaj, Shri
                    Guruvarya Maheshgiri Maharaj continues to serve the devotees
                    wholeheartedly.
                  </p>
                </p>
                {/* {element.id !== aboutpageData.length && (
                  <hr className="about-pagehr" />
                  )} */}
                <hr className="about-page-hr" />
              </div>

              {/* images to be integrated here */}

              <div className="about-page-description-right">
                <div className="imagebox">
                  <img src={maharajImg} alt="devsthanImg1" />
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <div>
            <div>
              <h2 className="about-heading">
                A humble request to all devotees
              </h2>
            </div>
            <div className="about-page-description">
              <div className="about-page-description-left">
                <p className="aboutInfo">
                  <p className="aboutInfo-padding">
                    By the grace and blessings of Shri Nrusimha Saraswati Datta
                    Maharaj, it is a humble request to all devotees who are
                    facing various difficulties and challenges in their
                    families, such as financial crisis, physical ailments,
                    mental distress, and those who desire worldly and spiritual
                    happiness, peace, and solutions, to attend the program.
                  </p>
                  <p className="aboutInfo-padding">
                    The program is held on every Thursday. Devotees should reach
                    devsthan before 11am of every Thursday. It is through the
                    devotion of Shri Guru Dev Datta Maharaj that we receive
                    special blessings, and to obtain those blessings, we urge
                    you to participate in the darbar and be present in the
                    program.
                  </p>
                  <p className="aboutInfo-padding">
                    Teachings : Principles of Bhaktimarga, Difference between
                    faith and superstition, Devotees with physical ailments,
                    mental problems experience reduction of physical ailments on
                    the spot.
                  </p>
                  <p className="aboutInfo-padding">
                    Devotional Places at Shri Datta Devasthan Dharnagaon: 1.
                    Nirgun Paduka Math 2. Papavinashi Kund 3. Kalpavriksha 4.
                    Madhukari Bhiksha Annadan (Mahaprasad) 5. Siddhakhamb
                  </p>
                </p>
                {/* {element.id !== aboutpageData.length && (
                  <hr className="about-pagehr" />
                  )} */}
                <hr className="about-page-hr" />
              </div>

              {/* images to be integrated here */}

              <div className="about-page-description-right">
                <div className="imagebox">
                  <img src={maharajImg} alt="devsthanImg1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
