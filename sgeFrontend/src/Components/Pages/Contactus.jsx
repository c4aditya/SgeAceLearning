import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineMessage } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { VscCallOutgoing } from "react-icons/vsc";
import { SiMinutemailer } from "react-icons/si";

function ContactUs() {
    // Single state object for all form inputs
    const leftVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    };
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://api.acelearningtraining.com/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                alert("Message sent successfully!");
                setFormData({
                    name: "",
                    email: "",
                    mobile: "",
                    subject: "",
                    message: "",
                });
            } else {
                alert(`Error: ${data.error || "Failed to send message"}`);
            }
        } catch (error) {
            alert("Network error. Please try again later.");
            console.error("Network error:", error);
        }
    };

    return (
        <section>

            <div className="top-poster-section">


                <motion.div
                    variants={leftVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="main-content-poster-page"
                >


                    <div className="company-name">
                        <p>Contact Us  </p>
                    </div>

                    <div className="per-page-poster-content">
                        <p>Need Help </p>
                    </div>


                </motion.div>



            </div>


            <div className="flex-items">

           

            <div className="contact-ua-top-section ">

                <motion.div
                    className="left-side-about-us contact-us-main-content"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={leftVariants}
                >

                    <div className="about-us-sub-heading ">
                        <p>CONTACT US</p>

                    </div>

                    <div className="content-about-us-hero">
                        <ul>
                            <li><span><SlLocationPin /></span>Near Galla Mandi oppsit Indian Oil petrol pump Amanpur road Kasganj , Pin - 207123</li>
                            <li><span><VscCallOutgoing /></span>+91 9910926523</li>
                            <li><span>< SiMinutemailer /></span>info@acelearningtraining.com</li>
                            <li> <span>< SiMinutemailer /></span>admission@acelearningtraining.com</li>
                        </ul>
                    </div>

                    <div className="button">
                        <button className="button-know-more">Connect Us</button>
                    </div>

                </motion.div>
            </div>


            <div className="contact-ua-top-section">
                <motion.div
                    className="right-side-contact-us"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: 100 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
                    }}
                >
                    <div className="form-contact-us">
                        <div className="about-us-sub-heading">
                            <p>CONTACT US</p>
                        </div>
                        <div className="heading-content">
                            <p>Let's talk about your opportunity.</p>
                        </div>

                        <hr />

                        <div className="main-contact-us-form">
                            <form
                                className="contact-us-input-feild-form"
                                onSubmit={handleSubmit}
                            >
                                <div className="two-input-feilds">
                                    <div className="f">
                                        <label>NAME</label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="f">
                                        <label>EMAIL</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="single-input-feild">
                                    <label>MOBILE NUMBER</label>
                                    <input
                                        type="tel"
                                        name="mobile"
                                        placeholder="+91"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="single-input-feild">
                                    <label>SUBJECT</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="single-input-feild">
                                    <label>MESSAGE</label>
                                    <textarea
                                        name="message"
                                        rows="8"
                                        placeholder="Enter Your Message Here We are happy to connect you"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="button-sub">
                                    <button type="submit" className="submit-contact-us">
                                        <span>
                                            <MdOutlineMessage />
                                        </span>
                                        SEND MESSAGE
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </div>
             </div>
        </section>
    );
}

export default ContactUs;
