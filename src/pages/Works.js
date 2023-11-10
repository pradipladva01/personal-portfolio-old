import React from "react";
import textureImg from "../resources/images/background_texture.png";
import Star from "../resources/images/star-2.png";
// import project1 from "../resources/images/project2.jpeg";
import nextIcon from "../resources/images/Next_icon.svg";
import Navbar from "../components/Navbar";
import "../styles/Works.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
import WorkData from "../resources/data/WorkData";

const Works = () => {
  return (
    <>
      <Helmet>
        <title>Work | Personal Portfolio</title>
      </Helmet>
      <section className="project_area">
        <div className="container">
          <h1 className="section_heading" data-aos="fade-up">
            <img src={Star} alt="star" />
            All Projects
            <img src={Star} alt="star" />
          </h1>
          <div className="row">
            {WorkData.map((work) => (
              <div className="col-lg-4 col-md-6 col-sm-6" data-aos="zoom-in" key={work.id}>
                <div className="project_item shadow_box">
                  <Link className="overlay_link" to={`/work-details/${work.id}`}></Link>
                  <img src={textureImg} alt="" className="bg_img" />
                  <div className="project_img">
                    <img src={work.image} alt="project1" />
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="project_info">
                      <p>{work.name}</p>
                      <h1>{work.description}</h1>
                    </div>
                    <Link to={`/work-details/${work.id}`} className="project_btn">
                      <img src={nextIcon} alt="Button" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            {/* <div className="col-lg-4 col-md-6 col-sm-6" data-aos="zoom-in">
              <div className="project_item shadow_box">
                <Link className="overlay_link" to="/work-details"></Link>
                <img src={textureImg} alt="" className="bg_img" />
                <div className="project_img">
                  <img src={project1} alt="project1" />
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="project_info">
                    <p>Project 1</p>
                    <h1>Project</h1>
                  </div>
                  <Link to="/work-details" className="project_btn">
                    <img src={nextIcon} alt="Button" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6" data-aos="zoom-in">
              <div className="project_item shadow_box">
                <Link className="overlay_link" to="/work-details"></Link>
                <img src={textureImg} alt="" className="bg_img" />
                <div className="project_img">
                  <img src={project1} alt="project1" />
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="project_info">
                    <p>Project 1</p>
                    <h1>Project</h1>
                  </div>
                  <Link to="/work-details" className="project_btn">
                    <img src={nextIcon} alt="Button" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6" data-aos="zoom-in">
              <div className="project_item shadow_box">
                <Link className="overlay_link" to="/work-details"></Link>
                <img src={textureImg} alt="" className="bg_img" />
                <div className="project_img">
                  <img src={project1} alt="project1" />
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="project_info">
                    <p>Project 1</p>
                    <h1>Project</h1>
                  </div>
                  <Link to="/work-details" className="project_btn">
                    <img src={nextIcon} alt="Button" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6" data-aos="zoom-in">
              <div className="project_item shadow_box">
                <Link className="overlay_link" to="/work-details"></Link>
                <img src={textureImg} alt="" className="bg_img" />
                <div className="project_img">
                  <img src={project1} alt="project1" />
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="project_info">
                    <p>Project 1</p>
                    <h1>Project</h1>
                  </div>
                  <Link to="/work-details" className="project_btn">
                    <img src={nextIcon} alt="Button" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6" data-aos="zoom-in">
              <div className="project_item shadow_box">
                <Link className="overlay_link" to="/work-details"></Link>
                <img src={textureImg} alt="" className="bg_img" />
                <div className="project_img">
                  <img src={project1} alt="project1" />
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="project_info">
                    <p>Project 1</p>
                    <h1>Project</h1>
                  </div>
                  <Link to="/work-details" className="project_btn">
                    <img src={nextIcon} alt="Button" />
                  </Link>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Works;
