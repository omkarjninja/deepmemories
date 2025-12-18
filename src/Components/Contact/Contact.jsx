import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import NavBar from "../../Utilites/NavBar";
import FooterSection from "../../Utilites/FooterSection";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_z10fub9",   // 🔹 Your EmailJS service ID
        "template_nlmvf1u",  // 🔹 Your EmailJS template ID
        form.current,
        "KHi-x6MTin_CZnIDK"  // 🔹 Your EmailJS public key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error.text);
          alert("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div>
      <NavBar />

      <section className="contact-section" id="contact">
        {/* Left Side - Contact Info */}
        <div className="contact-left">
          <h2>Reach Us</h2>
          <div className="contact-info">
            <h3>📍 Address</h3>
            <p>
              JAdarsh colony, <br />
              Degree collage road Near BSNL exchange Khatima U.S.Nagar, <br />
              262308
            </p>
          </div>

          <div className="contact-info">
            <h3>📞 Contact</h3>
            <p>
              +91 9019797341 <br />
              <a href="mailto:memoriesphotographyktm@gmail.com">
                memoriesphotographyktm@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="contact-right">
          <h2>Get In Touch</h2>

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            {/* Name + Email */}
            <div className="form-row">
              <input
                type="text"
                name="user_name"
                placeholder="Name"
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email Address"
                required
              />
            </div>

            {/* Message */}
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>

            {/* Captcha (basic) */}
            <div className="form-bottom">
              <div className="captcha">
                <span>13 + 6 =</span>
                <input
                  type="number"
                  name="captcha"
                  required
                  placeholder="Answer"
                />
              </div>
              <button type="submit">SEND REQUEST</button>
            </div>
          </form>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Contact;

