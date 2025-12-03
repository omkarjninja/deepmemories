import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./HeroSection.css";

import hero2 from "../assets/IMG_9689_11zon.webp"; //done
import hero3 from "../assets/IMG_9708.jpg"; //done
import hero4 from "../assets/IMG_9689_11zon.webp.jpg";
import hero5 from "../assets/IMG_9699.jpg";

const HeroSection = () => {
  const headlines = [
    "Get Married In Style",
    "Big Fat Weddings. Bigger Moments.",
    "Tradition Meets Sass.",
    "From ‘Yes’ to ‘I Do’ — Flawlessly.",
    "Because Your Wedding Deserves a Standing Ovation."
  ];

  const images = [hero2, hero3, hero4, hero5];
  const [currentImage, setCurrentImage] = useState(0);
  const [currentHeadlineIndex, setCurrentHeadlineIndex] = useState(0);

  // Auto image rotation
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Auto headline rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadlineIndex((prev) => (prev + 1) % headlines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <header id="hero" className="hero-section">
      <div className="hero-slideshow">
        {images.map((img, index) => (
          <div
            key={index}
            className={`slide ${index === currentImage ? "active" : ""}`}
          >
            <LazyLoadImage
              src={img}
              alt={`hero-${index}`}
              effect="blur"
              className="hero-image"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      <div className="overlay"></div>

      {/* Controls */}
      <button className="prev-btn" onClick={prevSlide}>
        ‹
      </button>
      <button className="next-btn" onClick={nextSlide}>
        ›
      </button>

      {/* Dots indicator */}
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentImage ? "active" : ""}`}
            onClick={() => setCurrentImage(index)}
          >
            •
          </span>
        ))}
      </div>

      {/* Hero text */}
      {/* <div className="hero-content">
        <h1>{headlines[currentHeadlineIndex]}</h1>
        <p>
          To a new chapter of your life and a beautiful beginning, we at Memories Photographer are here to frame every emotion, every smile, and every fleeting moment. Together, let’s turn your special day into memories that live forever.
        </p>
      </div> */}
    </header>
  );
};

export default HeroSection;
