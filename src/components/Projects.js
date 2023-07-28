import React from 'react'
import textureImg from '../resources/images/background_texture.png'
import nextIcon from '../resources/images/Next_icon.svg'
import pradipSign from '../resources/images/pradip_sign.svg'
import { Link } from 'react-router-dom'
import '../styles/Home.css'

const AboutMe = () => {
    return (
        <div className="info_box shadow_box">
            <Link to="" className='overlay_link'></Link>
            <img src={textureImg} alt="bg" className='bg_img' />
            <img src={pradipSign} alt="sign" className='pradip_sign'/>
            <div className="d-flex align-items-center justify-content-between">
                <div className="infos">
                    <h4>SHOWCASE</h4>
                    <h1>Projects</h1>
                </div>
                <Link href="#" className="about_btn">
                    <img src={nextIcon} alt="Button" />
                </Link>
            </div>
        </div>
    )
}

export default AboutMe
