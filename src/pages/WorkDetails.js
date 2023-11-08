import React from "react";
import linkArrow from "../resources/images/link-arrow.svg";
import Star from "../resources/images/star-2.png";
import StarIcon from "../resources/images/star-icon.png";
import textureImg from "../resources/images/background_texture.png";
import Project1 from "../resources/images/project1.jpeg";
import Project2 from "../resources/images/project1.jpeg";
import Project3 from "../resources/images/project3.jpeg";
import Project4 from "../resources/images/project4.jpeg";
import Project5 from "../resources/images/project5.jpeg";
import Project6 from "../resources/images/project6.jpeg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/WorkDetails.css";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import WorkData from "../resources/data/WorkData";

const WorkDetails = () => {
  const { id } = useParams();

  const selectedWork = WorkData.find((work) => work.id === parseInt(id));

  if (!selectedWork) {
    return <div>Work not found.</div>;
  }
  return (
    <>
      <Helmet>
        <title>Work Detail | Personal Portfolio</title>
      </Helmet>
      <Navbar />
      <section className="breadcrumb_area">
        <div className="container">
          <div className="breadcrumb_content" data-aos="fade-up">
            <p>{selectedWork.name}</p>
            <h1 className="section_heading">
              <img src={Star} alt="star" />
              {selectedWork.description}
              <img src={Star} alt="star" />
            </h1>
          </div>
        </div>
      </section>
      <section className="project_details_wrap">
        <div className="project_details_img" data-aos="zoom-in">
          <img src={Project1} alt="project1" />
        </div>
        <div className="container">
          <div data-aos="zoom-in">
            <div className="d-flex project_infos_wrap shadow_box">
              <img src={textureImg} alt="" className="bg_img" />
              <img src={StarIcon} alt="bg" className="star_icon" />
              <div className="project_details_info flex-1">
                <h3>Raven studio</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate exercitationem accusantium magnam dicta dolor
                  dolorum veniam natus consectetur, distinctio autem asperiores
                  maxime? Veritatis rerum laborum eligendi eos, voluptatibus
                  cupiditate ab.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate exercitationem accusantium magnam dicta dolor
                  dolorum veniam natus consectetur, distinctio autem asperiores
                  maxime? Veritatis rerum laborum eligendi eos, voluptatibus
                  cupiditate ab.
                </p>
              </div>
              <div className="project_details_info flex-1">
                <h3>Raven studio</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate exercitationem accusantium magnam dicta dolor
                  dolorum veniam natus consectetur, distinctio autem asperiores
                  maxime? Veritatis rerum laborum eligendi eos, voluptatibus
                  cupiditate ab.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate exercitationem accusantium magnam dicta dolor
                  dolorum veniam natus consectetur, distinctio autem asperiores
                  maxime? Veritatis rerum laborum eligendi eos, voluptatibus
                  cupiditate ab.
                </p>
              </div>
            </div>
          </div>
          <div className="live_link">
            <Link>
              Live Demo - Click to Watch
              <img src={linkArrow} alt="" />
            </Link>
          </div>
          <div className="project_details_2_img mb-30" data-aos="zoom-in">
            <img src={Project2} alt="project2" />
          </div>
          <div className="row">
            <div className="col-md-6" data-aos="zoom-in">
              <div className="project_details_3_img">
                <img src={Project3} alt="Project3" />
              </div>
            </div>
            <div className="col-md-6" data-aos="zoom-in">
              <div className="project_details_3_img">
                <img src={Project4} alt="Project4" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6" data-aos="zoom-in">
              <div className="project_details_3_img">
                <img src={Project5} alt="Project5" />
              </div>
            </div>
            <div className="col-md-6" data-aos="zoom-in">
              <div className="project_details_3_img">
                <img src={Project6} alt="Project6" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="container d-flex align-items-center justify-content-center"
          data-aos="zoom-in"
        >
          <Link to="#" className="big_btn shadow_box">
            Next Project
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default WorkDetails;
