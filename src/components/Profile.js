import React from 'react'
import textureImg from '../resources/images/background_texture.png'
import nextIcon from '../resources/images/Next_icon.svg'
import { Link } from 'react-router-dom'
import '../styles/Home.css'

const AboutMe = () => {
    return (
        <div className="info_box shadow_box">
            <img src={textureImg} alt="bg" className='bg_img' />
            <div className='inner_profile_icons shadow_box'>
                <Link to="">
                    <svg width="16px" height="16px" strokeWidth="1.6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FFFFFF"><path clipRule="evenodd" d="M17.057 2.544a.2.2 0 01.378-.008l3.114 8.31 1.398 3.73a.2.2 0 01-.07.232l-9.76 7.106a.2.2 0 01-.235 0l-9.76-7.106a.2.2 0 01-.069-.231l1.398-3.73.167-.45 2.944-7.861a.2.2 0 01.378.008l2.47 7.6a.2.2 0 00.19.137h4.8a.2.2 0 00.19-.138l2.467-7.599z" stroke="#FFFFFF" strokeWidth="1.6"></path></svg>
                </Link>
                <Link to="">
                    <svg width="16px" height="16px" strokeWidth="1.6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FFFFFF"><path d="M21 8v8a5 5 0 01-5 5H8a5 5 0 01-5-5V8a5 5 0 015-5h8a5 5 0 015 5zM7 17v-7" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path><path d="M11 17v-3.25M11 10v3.75m0 0c0-3.75 6-3.75 6 0V17M7 7.01l.01-.011" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </Link>
                <Link to="">
                    <svg width="16px" height="16px" strokeWidth="1.6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FFFFFF"><path d="M12 16a4 4 0 100-8 4 4 0 000 8z" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 16V8a5 5 0 015-5h8a5 5 0 015 5v8a5 5 0 01-5 5H8a5 5 0 01-5-5z" stroke="#FFFFFF" strokeWidth="1.6"></path><path d="M17.5 6.51l.01-.011" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </Link>
                <Link to="">
                    <svg width="16px" height="16px" strokeWidth="1.6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FFFFFF"><path d="M23 3.01s-2.018 1.192-3.14 1.53a4.48 4.48 0 00-7.86 3v1a10.66 10.66 0 01-9-4.53s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83C21.94 5.674 23 3.01 23 3.01z" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </Link>
            </div>
            <div className="d-flex align-items-center justify-content-between">
                <div className="infos">
                    <h4>STAY WITH ME</h4>
                    <h1>Profiles</h1>
                </div>
                <Link to="" className="about_btn">
                    <img src={nextIcon} alt="Button" />
                </Link>
            </div>
        </div>
    )
}

export default AboutMe
