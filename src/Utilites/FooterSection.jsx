import React from "react";
import {
  FaInstagram,
} from "react-icons/fa";
import { FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import "./FooterSection.css";

const FooterSection = () => {
  return (
    <div>
      <footer id="contact" className="footer">
        <div className="footer-container">
          {/* Left - Contact Info */}
          <div className="footer-column">
            <h3>Memories Photography</h3>
            <p>JAdarsh colony,</p>
            <p>Degree collage road Near BSNL exchange Khatima U.S.Nagar 262308.</p>
            <p>+91 9019797341</p>
            <p>memoriesphotographyktm@gmail.com</p>
          </div>

          {/* Middle - About & Social */}
          <div className="footer-column">
            <p>
              Memories Photographer is a professional wedding photography
              service, capturing timeless moments since 2022. We specialize in
              pre-wedding shoots, wedding teasers, and full cinematic wedding
              films — turning every celebration into unforgettable memories.
            </p>
            <div className="footer-socials">
              <div className="footer-socials">
                <a
                  href="https://www.instagram.com/__memoriesphotography?igsh=MXNxajdza2xnaDkwcw=="
                  target="blank"
                >
                  <FaInstagram />
                </a>
                   
              </div>
            </div>
          </div>
          {/* Right - Google Map */}
          <div className="footer-column">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14138.71723305299!2d79.953396!3d28.9212204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a051568b06958f%3A0xb8852698880f4546!2sMemories%20photography!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>© 2022 Memories Photographer. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default FooterSection;
