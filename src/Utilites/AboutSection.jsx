import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./AboutSection.css"

const AboutSection = () => {
  return (
    <div>
      <section id="about" className="about-sectionn" data-aos="fade-right" data-aos-delay="50">
        <h2>Memories Photography</h2>
        <div className="underline"></div>
        <p data-aos="fade-left" data-aos-delay="50" >
          We, Memories Photography, feel truly honored every time you choose us to capture your special moments. Since our start in 2022, we’ve been devoted to turning emotions into timeless frames — crafting stories that speak beyond words. With creativity, passion, and precision, we ensure that every shot reflects the beauty, depth, and authenticity of your memories. Choosing us means preserving your moments in their most pure and artistic form.
        </p>
      </section>
    </div>
  )
}

export default AboutSection
