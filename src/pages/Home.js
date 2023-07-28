import React from 'react'
import textureImg from '../resources/images/background_texture.png'
import Pradip from '../resources/images/pradip.jpg'
import nextIcon from '../resources/images/Next_icon.svg'
import starIcon from '../resources/images/star1.svg'
import '../styles/Home.css'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import { Link } from 'react-router-dom'
import AboutMe from '../components/AboutMe'
import Service from '../components/ServiceOffering'
import Profile from '../components/Profile'
import WorkTogether from '../components/WorkTogether'
import Footer from '../components/Footer'
// import Loading from '../components/Loading'

const Home = () => {

  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 1000)
  // }, [])

  return (
    <>
        <>
          <Navbar/>
          <section className='about_area'>
            <div className="container">
              <div className="row">
                <div className="col-lg-6 mb-30">
                  <div className="about_me_box shadow_box">
                    <Link to="/about" className='overlay_link'></Link>
                    <img src={textureImg} alt="" className='bg_img' />
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
                <div className="col-lg-6">
                  <div className="row h-100">
                    <div className="col-lg-12">
                      <div className='banner shadow_box'>
                        <div className="marquee">
                          <div>
                            <span>DESIGN <b>CODE</b> INSPRITION
                              <img decoding="async" src={starIcon} alt="Star" />
                            </span>
                            <span>DESIGN <b>CODE</b> INSPRITION
                              <img decoding="async" src={starIcon} alt="Star" />
                            </span>
                            <span>DESIGN <b>CODE</b> INSPRITION
                              <img decoding="async" src={starIcon} alt="Star" />
                            </span>
                            <span>DESIGN <b>CODE</b> INSPRITION
                              <img decoding="async" src={starIcon} alt="Star" />
                            </span>
                            <span>DESIGN <b>CODE</b> INSPRITION
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
                <div className="col-lg-6 mb-30">
                  <Service />
                </div>
                <div className="col-lg-6 mb-30">
                  <Profile />
                </div>
                <div className="col-lg-6 mb-30">
                  <div className="about_client_box info_box shadow_box">
                    <img src={textureImg} alt="bg" className='bg_img' />
                    <div className="clients d-flex align-items-start justify-content-center">
                      <div className="client_item">
                        <h1>07</h1>
                        <p>Years <br />Experience</p>
                      </div>
                      <div className="client_item">
                        <h1>+125</h1>
                        <p>CLIENTS <br />WORLDWIDE</p>
                      </div>
                      <div className="client_item">
                        <h1>+210</h1>
                        <p>TOTAL <br />PROJECTS</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-30">
                  <WorkTogether />
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </>
      {/* {loading === false ? (
      ) : (
        <Loading />
      )} */}
    </>
  )
}

export default Home
