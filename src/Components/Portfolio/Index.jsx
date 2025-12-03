import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import API from "../../../api";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Index.css";

export default function Portfolio() {
  const [covers, setCovers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCovers = async () => {
      const res = await API.get("/images");
      setCovers(res.data);
    };
    fetchCovers();
  }, []);

  return (
    <div className="portfolio-container">
      <h2 data-aos="fade-up" data-aos-delay="150" className="section-title" style={{ fontFamily: "'Allura', cursive", fontSize: "50px", color: "black" }}>Portfolio</h2>
      <div className="underline" data-aos="fade-down" data-aos-delay="300"></div>

      <div className="gallery" data-aos="fade-up" data-aos-delay="300">
        {covers.map((cover) => (
          <div
            key={cover._id}
            className="gallery-item"
            onClick={() => navigate(`/album/${cover.name}`)}
          >
            <div className="gallery-card">
              <img src={cover.url} alt={cover.name} />
              <span className="magnify-icon">
                <FaSearch className="gallery-icon" />
              </span>
            </div>
            <p className="gallery-title">{cover.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
