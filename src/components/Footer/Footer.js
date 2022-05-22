import React from 'react'
import "./Footer.css"
import {FaFacebookF} from "react-icons/fa"
import {FiInstagram} from "react-icons/fi"
import {IoLogoTwitter} from "react-icons/io"

const Footer = () => {
  return (
    <footer id='footer'>
    <a href="/#" className='footer_logo'>Arijit</a>
    <ul className="links">
    <li><a href="#header">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#education">Education</a></li>
    <li><a href="#experience">Experience</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#portfolio">Portfolio</a></li>
    <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="footer_socials">
    
    <a href="https://www.facebook.com/arijit.patra.988" target="_blank" rel="noreferrer"><FaFacebookF/></a>
    <a href="https://www.instagram.com/heyitsarijit/" target="_blank" rel="noreferrer"><FiInstagram/></a>
    <a href="https://twitter.com/ar1stin" target="_blank" rel="noreferrer"><IoLogoTwitter/></a>
    
    </div>

    <div className="footer_copyright">
    <small>&copy; Arijit. All right reserved. </small>
    </div>
    </footer>
  )
}

export default Footer