import React from "react";
import linkArrow from "../resources/images/link-arrow.svg";
import Star from "../resources/images/star-2.png";
import StarIcon from "../resources/images/star-icon.png";
import textureImg from "../resources/images/background_texture.png";
import Footer from "../components/Footer";
import "../styles/WorkDetails.css";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import WorkData from "./data/WorkData";

const WorkDetails = () => {
  const { id } = useParams();

  const projectData = WorkData.find((work) => work.id === String(id));

  if (!projectData) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "100vh",
          justifyContent: "center",
        }}
      >
        Work not found.
      </div>
    );
  }
  return (
    <>
      <Helmet>
        <title>Work Detail | {process.env.REACT_APP_APP_NAME}</title>
      </Helmet>
      <section className="breadcrumb_area">
        <div className="container">
          <div className="breadcrumb_content" data-aos="fade-up">
            <p>{projectData.name}</p>
            <h1 className="section_heading">
              <img src={Star} alt="star" />
              {projectData.description}
              <img src={Star} alt="star" />
            </h1>
          </div>
        </div>
      </section>
      <section className="project_details_wrap">
        <div className="project_details_img" data-aos="zoom-in">
          <img src={projectData.bannerImage} alt="project1" />
          <img src={projectData.image} alt="project1" className="main-img" />
          <div className="live_link" data-aos="fade-up">
            <Link to={projectData.liveLink}>
              Click to Watch
              <img src={linkArrow} alt="" className="linkArrow" />
            </Link>
          </div>
        </div>
        <div className="container">
          <div data-aos="zoom-in">
            <div className="d-flex project_infos_wrap shadow_box">
              <img src={textureImg} alt="" className="bg_img" />
              <img src={StarIcon} alt="bg" className="star_icon" />
              <div className="project_details_info flex-1">
                <h3>Uniqual Itech</h3>
                <p>
                  Crafted a dynamic company website with PHP and Laravel on the
                  backend, while spearheading frontend development using HTML,
                  CSS, and JavaScript. Focused on optimizing user experience by
                  implementing responsive design, interactive features, and
                  ensuring seamless navigation. Translated design concepts into
                  a visually appealing and functional website, contributing to a
                  polished and engaging digital presence
                </p>
              </div>
              <div className="project_details_info flex-1">
                <h3>Tech Stack</h3>
                <p>Frontend: Html, Css and JS</p>
                <p>Backend: Laravel</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6" data-aos="zoom-in">
              <div className="project_details_3_img">
                <img src={projectData.image1} alt="image1" />
              </div>
            </div>
            <div className="col-md-6" data-aos="zoom-in">
              <div className="project_details_3_img">
                <img src={projectData.image2} alt="image2" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6" data-aos="zoom-in">
              <div className="project_details_3_img">
                <img src={projectData.image3} alt="image3" />
              </div>
            </div>
            <div className="col-md-6" data-aos="zoom-in">
              <div className="project_details_3_img">
                <img src={projectData.image4} alt="image4" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="container d-flex align-items-center justify-content-center"
          data-aos="zoom-in"
        >
          <button className="big_btn shadow_box">Next Project</button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default WorkDetails;
