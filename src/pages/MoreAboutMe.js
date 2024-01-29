import React from 'react'
import textureImg from '../resources/images/background_texture.png'
import Pradip from '../resources/images/about_pradip.png'
import Star from '../resources/images/star-2.png'
import StarIcon from '../resources/images/star-icon.png'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import '../styles/MoreAboutMe.css'
import nextIcon from '../resources/images/Next_icon.svg'
import AboutMe from '../components/AboutMe'
import WorkTogether from '../components/WorkTogether'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'


const MoreAboutMe = () => {

    return (
        <>
            <Helmet>
                <title>
                    About | {process.env.REACT_APP_APP_NAME}
                </title>
            </Helmet>
            <Navbar/>
            <section className="about_area">
                <div className="container">
                    <div className='d-flex about_me_wrap align-items-end mb-30'>
                        <div className="about_image_box shadow_box" data-aos="zoom-in">
                            <img src={textureImg} alt="BG" className="bg_img" />
                            <div className="image_inner">
                                <img src={Pradip} alt="About Me" />
                            </div>
                        </div>
                        <div className="about_details" data-aos="zoom-in">
                            <h1 className='section_heading' data-aos="fade-up">
                                <img src={Star} alt="star" />
                                SELF-SUMMARY
                                <img src={Star} alt="star" />
                            </h1>
                            <div className='about_details_inner shadow_box'>
                                <img src={StarIcon} alt="bg" className='star_icon' />
                                <h1>Lorem, ipsum.</h1>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis itaque repudiandae minima quas odit et eligendi recusandae temporibus veritatis exercitationem.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6" data-aos="zoom-in">
                            <div className='about_edc_exp about_experience shadow_box mb-30'>
                                <img src={textureImg} alt="BG" className="bg_img" />
                                <h3>EXPERIENCE</h3>
                                <ul>
                                    <li>
                                        <p className="date">DEC 2020 - JULY 2021</p>
                                        <h2>UI UX Designer</h2>
                                        <p className="type">Hevin Technoweb</p>
                                    </li>
                                    <li>
                                        <p className="date">AUG 2021 - MAY 2022</p>
                                        <h2>Web Designer</h2>
                                        <p className="type">HH Pramukh Tech</p>
                                    </li>
                                    <li>
                                        <p className="date">JUN 2022 - Running</p>
                                        <h2>Front-End Developer</h2>
                                        <p className="type">UniQual ITech</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="zoom-in">
                            <div className='about_edc_exp about_experience shadow_box mb-30'>
                                <img src={textureImg} alt="BG" className="bg_img" />
                                <h3>EDUCATION</h3>
                                <ul>
                                    <li>
                                        <p className="date">2015 - 2016</p>
                                        <h2>GSEB - Gujarat Secondary Education Board.</h2>
                                        <p className="type">Samarpan Techno school</p>
                                    </li>
                                    <li>
                                        <p className="date">2017 - 2018</p>
                                        <h2>HSEB - Higher Secondary Education Board.</h2>
                                        <p className="type">Samarpan Techno school</p>
                                    </li>
                                    <li>
                                        <p className="date">2018 - 2021</p>
                                        <h2>Bachelor of Commerce</h2>
                                        <p className="type">R. V. Patel College of Commerce</p>
                                    </li>
                                </ul>
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
            <Footer/>
        </>
    )
}

export default MoreAboutMe

