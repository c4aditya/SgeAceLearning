import { motion } from "framer-motion";
import { MdOutlineMessage } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { VscCallOutgoing } from "react-icons/vsc";
import { SiMinutemailer } from "react-icons/si";
function ContactUs() {
    const leftVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    };

    const rightVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    };
    return (
        <>
            <section>
                <div className="contact-ua-top-section">

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

                        <div className="para-about-us-hero-heading">
                            <p> We talk a lot about hope helping and teamwork.</p>
                        </div>

                        <div className="content-about-us-hero">
                            <ul>
                                <li><span><SlLocationPin /></span>Kamla Market sahawar gate Kasganj UP 207123</li>
                                <li><span><VscCallOutgoing /></span>+91 9910926523</li>
                                <li><span>< SiMinutemailer /></span>info@acelearning.com</li>
                                <li> <span>< SiMinutemailer /></span>admission@acelearning.com</li>
                            </ul>
                        </div>

                        <div className="button">
                            <button className="button-know-more">Connect Us</button>
                        </div>

                    </motion.div>

                    <motion.div
                     className="right-side-contact-us"
                      initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={rightVariants}
                     >
                        <div className="form-contact-us">
                            <div className="about-us-sub-heading">
                                <p>CONTACT US </p>
                            </div>
                            <div className="heading-content">
                                <p>Let's talk about your opportunity.</p>
                            </div>

                            <hr></hr>

                            <div className="main-contact-us-form">
                                <form className="contact-us-input-feild-form">

                                    <div className="two-input-feilds">
                                        <div className="f">
                                            <label>NAME</label>

                                            <input type="text" placeholder="Name"></input>
                                        </div>

                                        <div className="f">
                                            <label>EMAIL</label>
                                            <input type="text" placeholder="Email"></input>
                                        </div>

                                    </div>

                                    <div className="single-input-feild">
                                        <label>MOBLE NUMBER</label>
                                        <input type="number" placeholder="+ 91"></input>
                                    </div>

                                    <div className="single-input-feild">
                                        <label>SUBJECT</label>
                                        <input type="text" placeholder="Subject"></input>
                                    </div>

                                    <div className="single-input-feild">
                                        <label>MESSAGE</label>
                                        <textarea rows="8" placeholder="Enter Your Message Here We are happy to connect you ">

                                        </textarea>
                                    </div>


                                </form>

                                <div className="button-sub">

                                    <button className="submit-contact-us"><span><MdOutlineMessage /></span>SEND MESSAGE</button>

                                </div>


                            </div>

                        </div>

                    </motion.div>

                </div>
            </section>
        </>
    )
}

export default ContactUs;