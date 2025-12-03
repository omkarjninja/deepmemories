import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactUs.css";

const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_z10fub9",
                "template_nlmvf1u",
                form.current,
                "KHi-x6MTin_CZnIDK"
            )
            .then(
                (result) => {
                    alert("✅ Message sent successfully!");
                    console.log(result.text);
                    form.current.reset();
                },
                (error) => {
                    alert("❌ Failed to send message. Try again.");
                    console.log(error.text);
                }
            );
    };

    return (
        <>
            <section className="contact-section" id="contact" data-aos="fade-up"data-aos-delay="50">
                <div className="contact-left" data-aos="fade-right">
                    <h2>Reach Us</h2>
                    <br />

                    <div className="contact-info">
                        <h3>📍 Address</h3>
                        <p>
                            Memories photography 
                            Adarsh colony, <br />
                            Degree collage road
                            Near BSNL exchange 
                            Khatima., <br />
                           U.S.Nagar 262308
                        </p>
                    </div>

                    <div className="contact-info">
                        <h3>📞 Contact</h3>
                        <p>
                            +91 9019797341<br />
                            <b />
                            +91 9411583866<br />
                            <a href="mailto:memoriesphotographyktm@gmail.com">
                                memoriesphotographyktm@gmail.com
                            </a>
                        </p>
                    </div>
                </div>

                {/* Right Side - Contact Form */}
                <div className="contact-right" data-aos="fade-left">
                    <h2>Get In Touch</h2>

                    <form ref={form} onSubmit={sendEmail} className="contact-form">
                        {/* Row for name + email */}
                        <div className="form-row">
                            <input type="text" name="user_name" placeholder="Name" required />
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

                        {/* Bottom: captcha + button */}
                        <div className="form-bottom">
                            <div className="captcha">
                                <span>13 + 6 =</span>
                                <input type="text" required />
                            </div>
                            <button type="submit">SEND REQUEST</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default ContactUs;
