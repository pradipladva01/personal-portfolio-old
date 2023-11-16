import React from 'react'
import textureImg from '../resources/images/background_texture.png'
import camera from '../resources/images/Camera.svg'
import design from '../resources/images/design-nib.svg'
import figma from '../resources/images/figma.svg'
import code from '../resources/images/dev-mode-laptop.svg'
import Star from '../resources/images/star-2.png'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutMe from '../components/AboutMe'
import nextIcon from '../resources/images/Next_icon.svg'
import WorkTogether from '../components/WorkTogether'
import "../styles/Service.css"
import "../styles/Home.css"
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const Service = () => {
    return (
        <>
            <Helmet>
                <title>
                    Service | {process.env.REACT_APP_APP_NAME}
                </title>
            </Helmet>
            <section className="service_area">
                <div className="container">
                    <h1 className='section_heading'>
                        <img src={Star} alt="" />
                        MY OFFERINGS
                        <img src={Star} alt="" />
                    </h1>
                    <div className="row mb-30">
                        <div className="col-md-4">
                            <div className="service_sidebar" data-aos="fade-right">
                                <div className='service_sidebar_inner shadow_box'>
                                    <ul>
                                        <li>
                                            <img src={camera} alt="" />
                                            PHOTOGRAPHY
                                        </li>
                                        <li>
                                            <img src={figma} alt="" />
                                            UI UX DESIGN
                                        </li>
                                        <li>
                                            <img src={design} alt="" />
                                            WEB DESIGNING
                                        </li>
                                        <li>
                                            <img src={code} alt="" />
                                            WEB DEVELOPMENT
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <h1 className='section_heading' data-aos="fade-up">
                                <img src={Star} alt="" />
                                MY OFFERINGS
                                <img src={Star} alt="" />
                            </h1>
                            <div className="service_content_wrap" data-aos="zoom-in">
                                <div className="service_content_inner shadow_box">
                                    <div className="service_items">
                                        <div className="service_item">
                                            <h3>PHOTOGRAPHY</h3>
                                            <p>Photography is a captivating art form that transcends time and space, freezing moments and emotions into everlasting images. With a click of a button, photographers have the power to encapsulate the beauty of a landscape, the rawness of human emotion, or the essence of an event. </p>
                                        </div>
                                        <div className="service_item">
                                            <h3>UI UX DESIGN</h3>
                                            <p>User Interface (UI) and User Experience (UX) Design are crucial elements in creating digital products and services that resonate with users and deliver exceptional experiences. UI design focuses on crafting visually appealing and intuitive interfaces that users interact with directly.</p>
                                        </div>
                                        <div className="service_item">
                                            <h3>WEB DESIGNING</h3>
                                            <p>Web designing is the art and science of creating visually appealing and functional websites that cater to a diverse audience on the internet. It involves a seamless blend of creativity, technical expertise, and user-centric thinking.</p>
                                        </div>
                                        <div className="service_item">
                                            <h3>WEB DEVELOPMENT</h3>
                                            <p>Web developers utilize various programming languages and frameworks, such as HTML, CSS, JavaScript, Python, PHP, and Ruby, to create dynamic and interactive web pages. They work closely with web designers to bring the visual concepts to life and ensure a seamless user experience.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 mb-30" data-aos="zoom-in">
                            <div className="info_box shadow_box">
                                <img src={textureImg} alt="bg" className='bg_img' />
                                <div className='inner_profile_icons inner_profile_icons_2 shadow_box'>
                                    <Link to="https://www.linkedin.com/in/pradip-ladva-539b86219/" target='_blank'>
                                        <svg width="16px" height="16px" strokeWidth="1.6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FFFFFF"><path d="M21 8v8a5 5 0 01-5 5H8a5 5 0 01-5-5V8a5 5 0 015-5h8a5 5 0 015 5zM7 17v-7" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path><path d="M11 17v-3.25M11 10v3.75m0 0c0-3.75 6-3.75 6 0V17M7 7.01l.01-.011" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                    </Link>
                                    <Link to="https://www.instagram.com/pradip_ladva_official/" target='_blank'>
                                        <svg width="16px" height="16px" strokeWidth="1.6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FFFFFF"><path d="M12 16a4 4 0 100-8 4 4 0 000 8z" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 16V8a5 5 0 015-5h8a5 5 0 015 5v8a5 5 0 01-5 5H8a5 5 0 01-5-5z" stroke="#FFFFFF" strokeWidth="1.6"></path><path d="M17.5 6.51l.01-.011" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                    </Link>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="infos">
                                        <h4>STAY WITH ME</h4>
                                        <h1>Profiles</h1>
                                    </div>
                                    <Link to="/contact" className="about_btn">
                                        <img src={nextIcon} alt="Button" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 mb-30" data-aos="zoom-in">
                            <WorkTogether />
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 mb-30" data-aos="zoom-in">
                            <AboutMe />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />

        </>
    )
}

export default Service
