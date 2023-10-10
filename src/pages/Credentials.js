import React from 'react'
import Navbar from '../components/Navbar'
import Pradip from '../resources/images/pradip.png'
import textureImg from '../resources/images/background_texture.png'
import '../styles/Credentials.css'
import { Link, NavLink } from 'react-router-dom'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet-async'

const Credentials = () => {
  return (
    <>
      <Helmet>
        <title>
          About | Personal Portfolio
        </title>
      </Helmet>
      <Navbar />
      <section className="credential_area">
        <div className="container">
          <div className='gx-row d-flex'>
            <div className='credential_sidebar_wrap' data-aos="zoom-in">
              <div className='credential_sidebar text-center'>
                <div className="shadow_box">
                  <img src={textureImg} alt="" className='bg_img' />
                  <div className="img_box">
                    <img src={Pradip} alt="About Me" />
                  </div>
                  <h2>Pradip Ladva</h2>
                  <p>@pradipladva</p>
                  <ul className="social_links d-flex justify-content-center">
                    <li>
                      <Link to="https://github.com/pradipladva01" target='_blank'>
                        <svg width="16px" height="16px" strokeWidth="1.6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FFFFFF"><path d="M16 22.027v-2.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 00-1.5-3.75 5.07 5.07 0 00-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 00-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 005 5.797a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.58v2.87M9 20.027c-3 .973-5.5 0-7-3" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.linkedin.com/in/pradip-ladva-539b86219/" target='_blank'>
                        <svg width="16px" height="16px" strokeWidth="1.6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FFFFFF"><path d="M21 8v8a5 5 0 01-5 5H8a5 5 0 01-5-5V8a5 5 0 015-5h8a5 5 0 015 5zM7 17v-7" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path><path d="M11 17v-3.25M11 10v3.75m0 0c0-3.75 6-3.75 6 0V17M7 7.01l.01-.011" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.instagram.com/pradip_ladva_official/" target='_blank'>
                        <svg width="16px" height="16px" strokeWidth="1.6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FFFFFF"><path d="M12 16a4 4 0 100-8 4 4 0 000 8z" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 16V8a5 5 0 015-5h8a5 5 0 015 5v8a5 5 0 01-5 5H8a5 5 0 01-5-5z" stroke="#FFFFFF" strokeWidth="1.6"></path><path d="M17.5 6.51l.01-.011" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                      </Link>
                    </li>
                    <li>
                      {/* <Link to="https://twitter.com/pradip_ladva" target='_blank'>
                        <svg width="16px" height="16px" strokeWidth="1.6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FFFFFF"><path d="M23 3.01s-2.018 1.192-3.14 1.53a4.48 4.48 0 00-7.86 3v1a10.66 10.66 0 01-9-4.53s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83C21.94 5.674 23 3.01 23 3.01z" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                      </Link> */}
                    </li>
                  </ul>
                  <NavLink to="/contact" className="theme_btn">
                    <img src={textureImg} alt="" className='bg_img' />
                    Contact Me
                  </NavLink>
                </div>
              </div>
            </div>
            <div className='credential_content flex-1'>
              <div className='credential_about' data-aos="zoom-in">
                <h2>About Me</h2>
                <p>I'm Pradip Ladva a passionate front-end developer with 2 years of experience crafting immersive and user-friendly web experiences. My love for coding and creating visually appealing interfaces led me to specialize in front-end technologies, and I find joy in bringing designs to life through clean, elegant code.</p>
                <p>As a front-end developer, my focus is on building responsive and interactive websites and web applications. I'm well-versed in HTML, CSS, and JavaScript, and I thrive on turning complex design concepts into pixel-perfect reality. I have hands-on experience with modern front-end frameworks like React Js and continuously seek ways to improve web performance and user experience.</p>
              </div>
              <div className='credential_edc_exp credential_experience'>
                <h2 data-aos="fade-up">Experience</h2>
                <div className='credential_edc_exp_item' data-aos="zoom-in">
                  <h4>DEC 2020 - JULY 2021</h4>
                  <h3>UI UX Designer</h3>
                  <h5>Hevin Technoweb</h5>
                  <p>As a UI/UX designer, I redesigned a mobile app for a well-known e-commerce company. I conducted user research, created wireframes and prototypes, and performed usability testing with target users. The iterative design process based on feedback led to a well-received final design, resulting in increased user engagement and higher app conversion rates.</p>
                </div>
                <div className='credential_edc_exp_item' data-aos="zoom-in">
                  <h4>AUG 2021 - MAY 2022</h4>
                  <h3>Web Designer</h3>
                  <h5>HH PramukhTech</h5>
                  <p>As a web designer in a design agency, I created a responsive website for a local restaurant. Through close collaboration with the client, I understood their brand identity and preferences. After wireframing and designing mockups, I used HTML, CSS, and JavaScript to deliver a modern, visually appealing site that improved user experience and attracted more online customers, garnering positive feedback.</p>
                </div>
                <div className='credential_edc_exp_item' data-aos="zoom-in">
                  <h4>JUN 2022 - Running</h4>
                  <h3>Front-End Developer</h3>
                  <h5>UniQual ITech</h5>
                  <p>As a front-end developer at Uniqual ITech I contributed to innovative projects, utilizing cutting-edge technologies like React JS. I thrived in a collaborative environment, working with designers and back-end developers to deliver exceptional user experiences. Agile development allowed me to adapt quickly, while continuous learning and client collaboration fueled my growth and success.</p>
                </div>
              </div>
              <div className='credential_edc_exp credential_education'>
                <h2 data-aos="fade-up">Education</h2>
                <div className='credential_edc_exp_item' data-aos="zoom-in">
                  <h4>2015 - 2016</h4>
                  <h3>GSEB - Gujarat Secondary Education Board.</h3>
                  <h5>Samarpan Techno school</h5>
                </div>
                <div className='credential_edc_exp_item' data-aos="zoom-in">
                  <h4>2017 - 2018</h4>
                  <h3>HSEB - Higher Secondary Education Board.</h3>
                  <h5>Samarpan Techno school</h5>
                </div>
                <div className='credential_edc_exp_item' data-aos="zoom-in">
                  <h4>2018 - 2021</h4>
                  <h3>Bachelor of Commerce</h3>
                  <h5>R. V. Patel College of Commerce</h5>
                </div>
              </div>
              <div className='skills_wrap'>
                <h2 data-aos="fade-up">Skills</h2>
                <div className='d-grid skill_items flex-wrap'>
                  <div className='skill_item' data-aos="zoom-in">
                    <span className="percent">85%</span>
                    <h3 className="name">Figma</h3>
                  </div>
                  <div className='skill_item' data-aos="zoom-in">
                    <span className="percent">90%</span>
                    <h3 className="name">HTML5</h3>
                  </div>
                  <div className='skill_item' data-aos="zoom-in">
                    <span className="percent">92%</span>
                    <h3 className="name">CSS3</h3>
                  </div>
                  <div className='skill_item' data-aos="zoom-in">
                    <span className="percent">90%</span>
                    <h3 className="name">Responsive Web Design</h3>
                  </div>
                  <div className='skill_item' data-aos="zoom-in">
                    <span className="percent">80%</span>
                    <h3 className="name">JavaScript</h3>
                  </div>
                  <div className='skill_item' data-aos="zoom-in">
                    <span className="percent">75%</span>
                    <h3 className="name">React js</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Credentials
