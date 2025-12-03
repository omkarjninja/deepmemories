import "./Index.css";
import HeroSection from "../../Utilites/HeroSection";
import AboutSection from "../../Utilites/AboutSection";
import EventSection from "../../Utilites/EventSection";
import PortfolioSection from "../Portfolio/Index"
import FooterSection from "../../Utilites/FooterSection";
import NavBar from "../../Utilites/NavBar";
import ContactUs from "../../Utilites/ContactUs";
import HighLights from "../../Utilites/HighLights";
import OurServices from "../Services/OurServices";

const Home = () => {
  return (
    <div className="home-container">
      <NavBar />
      <HeroSection />
      <div className="blue-text-section">
        <p>We Are Getting A Heaven Ready For Your Wonderful
           Day</p>
      </div>
      <AboutSection />
      <EventSection />
      <HighLights />
      <PortfolioSection />
      <ContactUs />
      <FooterSection />
    </div>
  );
};

export default Home;
