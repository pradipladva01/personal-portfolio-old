import React, { useEffect, useState } from "react";
import textureImg from "../resources/images/background_texture.png";
import Pradip from "../resources/images/pradip.png";
import nextIcon from "../resources/images/Next_icon.svg";
import starIcon from "../resources/images/star1.svg";
import "../styles/Home.css";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import { Link } from "react-router-dom";
import AboutMe from "../components/AboutMe";
import Service from "../components/ServiceOffering";
import Profile from "../components/Profile";
import WorkTogether from "../components/WorkTogether";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

const Home = () => {
  // const [nameActive, setNameActive] = useState(false);
  // const [pActive, setPActive] = useState(false);

  // useEffect((_) => {
  //   const handleScroll = (_) => {
  //     if (window.pageYOffset > 10) {
  //       setNameActive(true);
  //       setPActive(true);
  //     } else {
  //       setNameActive(false);
  //       setPActive(false);
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll, false);
  //   return (_) => {
  //     window.addEventListener("scroll", handleScroll, false);
  //   };
  // }, []);
  return (
    <>
      <Helmet>
        <title>Pradip | Personal Portfolio</title>
      </Helmet>
      
      <section className="about_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-30" data-aos="zoom-in">
              <div className="about_me_box shadow_box">
                <Link to="/about" className="overlay_link"></Link>
                <img src={textureImg} alt="" className="bg_img" />
                <div className="img_box">
                  <img src={Pradip} alt="" />
                </div>
                <div className="infos">
                  <h4>A FRONTEND DEVELOPER</h4>
                  <h1>Pradip Ladva.</h1>
                  <p>I am a Frontend Developer based in Surat.</p>
                  <Link href="#" className="about_btn">
                    <img src={nextIcon} alt="Button" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="zoom-in">
              <div className="row h-100">
                <div className="col-lg-12">
                  <div className="banner shadow_box">
                    <div className="marquee">
                      <div>
                        <span>
                          DESIGN <b>CODE</b> INSPRITION
                          <img decoding="async" src={starIcon} alt="Star" />
                        </span>
                        <span>
                          DESIGN <b>CODE</b> INSPRITION
                          <img decoding="async" src={starIcon} alt="Star" />
                        </span>
                        <span>
                          DESIGN <b>CODE</b> INSPRITION
                          <img decoding="async" src={starIcon} alt="Star" />
                        </span>
                        <span>
                          DESIGN <b>CODE</b> INSPRITION
                          <img decoding="async" src={starIcon} alt="Star" />
                        </span>
                        <span>
                          DESIGN <b>CODE</b> INSPRITION
                          <img decoding="async" src={starIcon} alt="Star" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 mb-30">
                  <AboutMe />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 mb-30">
                  <Projects />
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-30" data-aos="zoom-in">
              <Service />
            </div>
            <div className="col-lg-6 mb-30" data-aos="zoom-in">
              <Profile />
            </div>
            <div className="col-lg-6 mb-30" data-aos="zoom-in">
              <div className="about_client_box info_box shadow_box">
                <img src={textureImg} alt="bg" className="bg_img" />
                <div className="clients d-flex align-items-start justify-content-center">
                  <div className="client_item">
                    <h1>03</h1>
                    <p>
                      Years <br />
                      Experience
                    </p>
                  </div>
                  <div className="client_item">
                    <h1>+07</h1>
                    <p>
                      CLIENTS <br />
                      WORLDWIDE
                    </p>
                  </div>
                  <div className="client_item">
                    <h1>+15</h1>
                    <p>
                      TOTAL <br />
                      PROJECTS
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-30" data-aos="zoom-in">
              <WorkTogether />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
