import React from "react";
import "./About.css"
import NavBar from "../../Utilites/NavBar";
import FooterSection from "../../Utilites/FooterSection";

const About = () => {
  return (
    <div>
      <NavBar />

      <section className="about-section" id="about">
        <div className="about-container">
          <h2 style={{ fontFamily: "'Allura', cursive", fontSize: "45px", color: "black" }}>About Us</h2>
          <p>
            <strong>Memories Photography</strong> began its journey in{" "}
            <strong>2017</strong> in the vibrant city of{" "}
            <strong>Uttarkhand</strong>. Since then, we have been
            dedicated to creating memorable experiences through innovative and
            seamless event management. Our passion for excellence and eye for
            detail has helped us organize weddings, corporate events, cultural
            celebrations, and much more.
          </p>

          <p>
            With years of experience, Seraphic Events has grown into a trusted
            name in the industry. Our team ensures every event is not just an
            occasion but a cherished memory.
          </p>

          <div className="about-highlight">
            <h3>✨ What We Believe In</h3>
            <ul>
              <li>Delivering unique and personalized event experiences</li>
              <li>Seamless planning and execution</li>
              <li>Creativity, innovation, and attention to detail</li>
              <li>Turning visions into unforgettable moments</li>
            </ul>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default About;
