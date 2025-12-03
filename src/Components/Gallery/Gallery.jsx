import React from "react";
import "./Gallery.css";
import NavBar from "../../Utilites/NavBar";
import FooterSection from "../../Utilites/FooterSection";

const images = [
    new URL("../../assets/1.jpg", import.meta.url).href,
    new URL("../../assets/01.jpg", import.meta.url).href,
    new URL("../../assets/001.jpg", import.meta.url).href,
    new URL("../../assets/00001.jpg", import.meta.url).href,
    new URL("../../assets/02.jpg", import.meta.url).href,
    new URL("../../assets/002.jpg", import.meta.url).href,
    new URL("../../assets/3.jpg", import.meta.url).href,
    new URL("../../assets/03.jpg", import.meta.url).href,
    new URL("../../assets/003.jpg", import.meta.url).href,
    new URL("../../assets/4.jpg", import.meta.url).href,
    new URL("../../assets/00004.jpg", import.meta.url).href,
    new URL("../../assets/5.jpg", import.meta.url).href,
    new URL("../../assets/06.jpg", import.meta.url).href,
    new URL("../../assets/00008.jpg", import.meta.url).href,
    new URL("../../assets/09.jpg", import.meta.url).href,
    new URL("../../assets/00009.jpg", import.meta.url).href,
    new URL("../../assets/Decoration_Image-2_11zon.webp", import.meta.url).href,
    new URL("../../assets/corpo.jpg", import.meta.url).href,
    new URL("../../assets/dffas.jpg", import.meta.url).href,
    new URL("../../assets/Events_Section_Images-3.jpg", import.meta.url).href,
    new URL("../../assets/Hero_Section_Image-2_11zon.jpg", import.meta.url).href,
    new URL("../../assets/IMG_9689_11zon.webp", import.meta.url).href,
    new URL("../../assets/IMG_9689_11zon.webp.jpg", import.meta.url).href,
    new URL("../../assets/IMG_9699.jpg", import.meta.url).href,
    new URL("../../assets/IMG_9708.jpg", import.meta.url).href,
    new URL("../../assets/light&sound.jpg", import.meta.url).href,
    new URL("../../assets/rightimge.jpg", import.meta.url).href,
    new URL("../../assets/Services-hero-1_11zon.webp.jpg", import.meta.url).href
];

const Gallery = () => {
    return (
        <>
            <NavBar />
            <section className="gallery-section" id="gallery">
                <h2 style={{ fontFamily: "'Allura', cursive", fontSize: "50px", color: "black" }}>Our Gallery</h2>
                <div className="underline"></div>

                <div className="gallery-grid">
                    {images.map((img, index) => (
                        <div className="gallery-item" key={index}>
                            <img src={img} alt={`Gallery ${index + 1}`} loading="lazy" />
                        </div>
                    ))}
                </div>
            </section>
            <FooterSection />
        </>
    );
};

export default Gallery;
