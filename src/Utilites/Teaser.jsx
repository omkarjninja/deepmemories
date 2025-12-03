import React from "react";
import NavBar from "./NavBar";
import FooterSection from "./FooterSection";

function Teaser() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
    <br /><br />
      {/* PAGE CONTENT */}
      <div className="flex-grow mt-10 px-4">
        <div className="w-full flex flex-col gap-6"> 
          
          {/* VIDEO 1 */}
          <video
            src="/videos/teaser.mp4"
            className="w-full max-h-[400px] md:max-h-[500px] lg:max-h-[700px] object-cover rounded-xl shadow-lg"
            autoPlay
            loop
            muted
            playsInline
          ></video>

          {/* VIDEO 2 */}
          <video
            src="/videos/straight.mp4"
            className="w-full max-h-[400px] md:max-h-[500px] lg:max-h-[700px] object-cover rounded-xl shadow-lg"
            autoPlay
            loop
            muted
            playsInline
          ></video>

          {/* VIDEO 3 */}
          <video
            src="/videos/teasearVD.mp4"
            className="w-full max-h-[400px] md:max-h-[500px] lg:max-h-[700px] object-cover rounded-xl shadow-lg"
            autoPlay
            loop
            muted
            playsInline
          ></video>

        </div>
      </div>

      <FooterSection />
    </div>
  );
}

export default Teaser;
