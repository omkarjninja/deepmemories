import React, { useState} from "react";
import logo from "../assets/logo11.png"
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./NavBar.css"
import { Link } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io5";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-logo">
                    <img src={logo} alt="St. Martin Logo" />
                    <a href="#hero"><span>Memories Photography</span></a>
                </div>
                {/* Hamburger Icon */}
                <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>

            {/* Sidebar Menu */}
            <div className={`sidebar ${isOpen ? "active" : ""}`}>
                <button className="close-btn" onClick={toggleMenu}>×</button>

                {/* Social Icons + Phone */}
                <div className="sidebar-top">
                    <a href="https://wa.me/919411583866">
                        <IoLogoWhatsapp />
                    </a>
                    <a
                        href="https://www.instagram.com/__memoriesphotography?igsh=MXNxajdza2xnaDkwcw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                    >  <FaInstagram />
                    </a>
                    <a href="tel:+919916388141">
                        <FaPhoneAlt /> +91 90197 97341
                    </a>
                        
                    <a href="mailto:memoriesphotographyktm@gmail.com">
                        <FaEnvelope/>memoriesphotographyktm@gmail.com
                    </a>
                    
                </div>

                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/services">Our Services</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/teaser">Teaser</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar
