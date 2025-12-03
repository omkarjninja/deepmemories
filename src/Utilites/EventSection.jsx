import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./EventSection.css";

import Events_Section_Images_1 from "../assets/corpo.jpg";
import Events_Section_Images_2 from "../assets/IMG_9714.jpg";
import Events_Section_Images_3 from "../assets/Events_Section_Images-3.jpg";
import BridalImaage from "../assets/centerImage.jpg";

const EventSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,   // Animation duration
      easing: "ease-in-out", 
      once: true,       // Animation runs once
      mirror: false     
    });
  }, []);

  return (
    <div>
      <h2 className="section-title" style={{ fontFamily: "'Allura', cursive", fontSize: "50px", color: "black" }}>Services</h2>
      <div className="underline" data-aos="zoom-in" data-aos-delay="10"></div>

      {/* Events Section */}
      <section id="events" className="events-section">
        <div className="event-card" >
          <img src={Events_Section_Images_1} alt="Bespoke Weddings" />
          <h3 style={{ fontFamily: "'Allura', cursive", fontSize: "35px", color: "black" }}>Pre-Wedding Photography</h3>
          <p>
           A perfect blend of love and creativity — we craft cinematic frames that tell your story even before the wedding begins.
          </p>
        </div>

        <div className="event-card" >
          <img src={Events_Section_Images_2} alt="Corporate Galas" />
          <h3 style={{ fontFamily: "'Allura', cursive", fontSize: "35px", color: "black" }}>Wedding Teaser</h3>
          <p>
            Short, cinematic highlights that bring out the essence of your wedding — emotional, exciting, and unforgettable.
          </p>
        </div>

        <div className="event-card" >
          <img src={Events_Section_Images_3} alt="Luxury Events" />
          <h3 style={{ fontFamily: "'Allura', cursive", fontSize: "35px", color: "black" }}>Pre Wedding Film</h3>
          <p>
           Turn your love story into a movie — cinematic storytelling that reflects your journey, chemistry, and bond.
          </p>
        </div>
      </section>

      {/* Featured Services */}
      <section className="featured-services">
        <div className="service-box" data-aos="fade-right" data-aos-delay="20">
                      {[
            new URL("../assets/light&sound.png", import.meta.url).href
          ].map((img, i) => (
            <img key={i} src={img} alt="Decoration" loading="lazy" />
          ))}
          <h2 style={{ fontFamily: "'Allura', cursive", fontSize: "35px", color: "black" }}>Cinematic Full Wedding Film</h2>
          <p>
           Relive your special day through a beautifully edited film that captures every precious moment in cinematic brilliance.
          </p>
          {[
            new URL("../assets/ligttsound.jpg", import.meta.url).href
          ].map((img, i) => (
            <img key={i} src={img} alt="Decoration" loading="lazy" />
          ))}
        </div>

        <div className="service-image" data-aos="fade-left" data-aos-delay="20">
          <img src={BridalImaage} alt="Bridal" loading="lazy" />
          <div className="bridal-text">
            <h2 style={{ fontFamily: "'Allura', cursive", fontSize: "35px", color: "black" }}>Concept Event photography</h2>
            <p>
             Creative and theme-based photography designed to match your vision — from dreamy romantic setups to vibrant festive moods.
            </p>
          </div>
        </div>

        <div className="service-box" data-aos="fade-right" data-aos-delay="20">
          <h2 style={{ fontFamily: "'Allura', cursive", fontSize: "35px", color: "black" }}>Custom Events</h2>
          <p>
            From award nights to product launches, we specialize in creating sophisticated and memorable events that leave a lasting impression on your guests.
          </p>
          {[
            new URL("../assets/rightimge.jpg", import.meta.url).href,
            new URL("../assets/lightsound.png", import.meta.url).href,
          ].map((img, i) => (
            <img key={i} src={img} alt="Custom Events" loading="lazy" />
          ))}
        </div>
      </section>
    </div>
  );
};

export default EventSection;
