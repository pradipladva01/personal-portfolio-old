import React from 'react'
import nextIcon from '../resources/images/Next_icon.svg'
import textureImg from '../resources/images/background_texture.png'
import StarIcon from '../resources/images/star-icon.png'
import { Link } from 'react-router-dom'
import '../styles/Home.css'

const AboutMe = () => {
    return (
        <div className="about_contact_box info_box shadow_box">
            <Link to="" className='overlay_link'></Link>
            <img src={textureImg} alt="bg" className='bg_img' />
            <img src={StarIcon} alt="bg" className='star_icon' />
            <h1>Let's <br />work <span>together.</span></h1>
            <Link href="#" className="about_btn">
                <img src={nextIcon} alt="Button" />
            </Link>
        </div>
    )
}

export default AboutMe
