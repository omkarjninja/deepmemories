import React from "react";
import "./OurServices.css";
import birthdayImg from "../../assets/Services-hero-1_11zon.webp.jpg";
import luxuryImg from "../../assets/rightimge.jpg";
import destinationImg from "../../assets/Hero_Section_Image-2_11zon.jpg";
import lightsImg from "../../assets/light&sound.png";
import conceptImg from "../../assets/Decoration_Image-2_11zon.webp";
import NavBar from "../../Utilites/NavBar";
import FooterSection from "../../Utilites/FooterSection";

const services = [
  {
    title: "Wedding Photography",
    description:
      "Unique and personalized birthday decorations designed to make your celebrations unforgettable.",
    img: birthdayImg,
  },
  {
    title: "Pre-Wedding Photography",
    description:
      "Capture the love story before your big day with romantic and timeless pre-wedding photos in stunning locations.",
    img: luxuryImg,
  },
  {
    title: "Wedding Teaser",
    description:
      "A short, captivating glimpse of your wedding day that highlights the most memorable moments and emotions.",
    img: destinationImg,
  },
  {
    title: "Pre Wedding Film",
    description:
      "Bring your pre-wedding moments to life with a beautifully shot and edited cinematic film of your love story.",
    img: lightsImg,
  },
  {
    title: "Cinematic Full Wedding Film",
    description:
      "Relive your entire wedding day through a cinematic full-length film, capturing every emotion, detail, and celebration.",
    img: conceptImg,
  },
];

const OurServices = () => {
  return (
    <>
      <NavBar />
      <div className="services-page">
        {/* Hero Section */}
        <div
  className="services-hero"
  style={{
    backgroundImage: `url(${birthdayImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    minHeight: "400px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  }}
>
  <h1
    style={{
      fontFamily: "'Allura', cursive",
      fontSize: "50px",
      color: "white",
    }}
  >
    Our Services
  </h1>
  <p>
    We craft extraordinary experiences with customized designs, seamless
    planning, and attention to detail. Discover our wide range of event
    services below.
  </p>
</div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-img">
                <img src={service.img} alt={service.title} />
              </div>
              <h3
                style={{
                  fontFamily: "'Allura', cursive",
                  fontSize: "35px",
                  color: "black",
                }}
              >
                {service.title}
              </h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <FooterSection />
    </>
  );
};

export default OurServices;
