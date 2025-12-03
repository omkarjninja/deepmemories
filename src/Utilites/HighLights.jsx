import React from 'react'
import "./HighLights.css"

const HighLights = () => {
    const videos = [
        "/videos/highlights.mp4",
        "/videos/straight.mp4",
        "/videos/best.mp4",
        "/videos/teasearVD.mp4"
    ];

    return (
        <section className="highlights-section">
            <h2 data-aos="fade-down"style={{ fontFamily: "'Allura', cursive", fontSize: "50px", color: "black" }}>Event Highlights</h2>
            <div className="underline" data-aos="zoom-in"></div>

            <div className="highlights-grid">
                {videos.map((video, i) => (
                    <div
                        key={i}
                        className="highlight-card"
                        data-aos="fade-up"
                        data-aos-delay={i * 150}
                    >
                        <video
                            src={video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="metadata"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HighLights;
