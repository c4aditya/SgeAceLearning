import "./page.css"
import { motion } from "framer-motion";
import FramerMotion from "../FramerMotion.js";
import { IoStar } from "react-icons/io5";
import StudentReview from "../StudentReview.jsx";
import { MdFlight } from "react-icons/md";
import { FaMedal } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { PiChalkboardTeacherThin } from "react-icons/pi";
const { leftVariants, rightVariants, bottomVariants } = FramerMotion;
function AboutUs() {
    return (
        <>
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
                            <p>ABOUT US </p>
                        </div>

                        <div className="per-page-poster-content">
                            <p>We create those who will create the future</p>
                        </div>

                        <div className="per-poster-para">

                            <p>Part of the rich legacy of the Sge Ace Learnign Training Institute , we aim to transform education by creating programs delivered by leading industry practitioners</p>
                        </div>
                    </motion.div>



                </div>

            </section>

            <section>
                <div className="about-us-section-start">
                    <div className="wrapper">
                        <div className="about-us-hero">
                            {/* Left side from left */}
                            <motion.div
                                variants={leftVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                className="left-side-about-us"
                            >
                                <div className="about-us-sub-heading">
                                    <p>WHO WE ARE</p>
                                </div>

                                <div className="para-about-us-hero-heading">
                                    <p>SGACE LEARNING TRAINING INSTITUTE [OPC] PVT LTD</p>
                                </div>

                                <div className="content-about-us-hero">
                                    <p>
                                        We share information about SGACE Learning Training Institute
                                        (OPC) Pvt. Ltd., which was established in 2020 and has grown
                                        into an academy registered with the Ministry of Corporate
                                        Affairs (MCA) in India by 2024. The academy is located in
                                        Kasganj and has been operating successfully for the past four
                                        years, offering a variety of aviation and related courses.
                                    </p>
                                </div>

                            </motion.div>

                            {/* Right side from right */}
                            <motion.div
                                variants={rightVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                className="right-side-about-us"
                            >
                                <div>
                                    <img src="https://st3.depositphotos.com/1092019/15323/i/450/depositphotos_153233456-stock-photo-who-we-are-concept-on.jpg" />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>


            <section>

                <div className="our-future">


                    <motion.div
                        variants={leftVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="main-class-future"
                    >


                        <div className="image-and-heading-future">

                            <div className="future-icon">
                                <img src="https://res.cloudinary.com/dxja3zaez/image/upload/v1765607164/Icon_la06g3.svg" />
                            </div>

                            <div className="future-heading">
                                <p>Our Mission </p>
                            </div>

                        </div>

                        <div className="future-para">
                            <p>At SGE Ace Learning, we aim to deliver high-quality, accessible aviation education that equips aspiring professionals with practical skills, industry knowledge, and hands-on training. Our goal is to bridge the gap between learning and real-world application through innovative teaching and an up-to-date curriculum.</p>
                        </div>



                    </motion.div>



                    <motion.div
                        variants={bottomVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="main-class-future"
                    >

                        <div className="image-and-heading-future">

                            <div className="future-icon">
                                <img src="https://res.cloudinary.com/dxja3zaez/image/upload/v1765607164/Icon-3_sy4vil.svg" />
                            </div>

                            <div className="future-heading">
                                <p> Our Vision </p>
                            </div>

                        </div>

                        <div className="future-para">

                            <p>To be a leading aviation learning platform known for excellence, integrity, and student success. We strive to develop skilled professionals who enhance global aviation safety, efficiency, and innovation, empowered by modern technology and expert guidance.</p>

                        </div>

                    </motion.div>

                    <motion.div
                        variants={rightVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="main-class-future">


                        <div className="image-and-heading-future">

                            <div className="future-icon">
                                <img src="https://res.cloudinary.com/dxja3zaez/image/upload/v1765607164/Icon-1_bwzuil.svg" />
                            </div>

                            <div className="future-heading">
                                <p>Our Moto</p>
                            </div>

                        </div>

                        <div className="future-para">

                            <p>At SGE Ace Learning, we help aspiring aviation professionals take flight by providing expert guidance, advanced training, and industry-focused skills. Our mission is to shape confident, skilled, and innovative aviators ready to excel in the global aviation sector</p>
                        </div>

                    </motion.div>

                </div>
            </section>

            <section className="varify-by-section">

              
                 <motion.div
                        variants={bottomVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                       className="main-varified-section"
                    >

               

                    <div className="varified-by-main-div">
                        <div className="about-us-sub-heading">
                            <p>WHY CHOOSE US </p>
                        </div>

                        <div className="para-about-us-hero-heading">
                            <p>ACCREDITATION AND AFFILIATIONS</p>
                        </div>
                    </div>

                    <div className="varify-by-name-and-subnames">
                       
                        
                     
                        <div className="certified-by">

                            <div className="sort-form">
                                <div className="certified-icon">
                                    <IoStar />
                                </div>

                                <div className="certified-name">
                                    <p>ISO</p>
                                </div>
                            </div>

                            <div className="full-form">

                                <p>International Organization for Standardization</p>

                            </div>

                            <hr></hr>
                        </div>



                        <div className="certified-by">

                            <div className="sort-form">
                                <div className="certified-icon">
                                    <IoStar />
                                </div>

                                <div className="certified-name">
                                    <p>MSME</p>
                                </div>
                            </div>

                            <div className="full-form">

                                <p>Micro, Small, and Medium Enterprises</p>

                            </div>

                            <hr></hr>
                        </div>




                        <div className="certified-by">

                            <div className="sort-form">
                                <div className="certified-icon">
                                    <IoStar />
                                </div>

                                <div className="certified-name">
                                    <p>IICA</p>
                                </div>
                            </div>

                            <div className="full-form">

                                <p>Indian Institute of Corporate Affairs</p>

                            </div>

                            <hr></hr>
                        </div>

                     





                        <div className="certified-by">

                            <div className="sort-form">
                                <div className="certified-icon">
                                    <IoStar />
                                </div>

                                <div className="certified-name">
                                    <p>NCTE</p>
                                </div>
                            </div>

                            <div className="full-form">

                                <p>National Council for Teacher Education</p>

                            </div>

                            <hr></hr>
                        </div>




                        <div className="certified-by">

                            <div className="sort-form">
                                <div className="certified-icon">
                                    <IoStar />
                                </div>

                                <div className="certified-name">
                                    <p>MCA</p>
                                </div>
                            </div>

                            <div className="full-form">

                                <p>Ministry of Corporate Affairs, Government of India</p>

                            </div>

                            <hr></hr>
                        </div>




                        <div className="certified-by">

                            <div className="sort-form">
                                <div className="certified-icon">
                                    <IoStar />
                                </div>

                                <div className="certified-name">
                                    <p>SIDH</p>
                                </div>
                            </div>

                            <div className="full-form">

                                <p>Skill India Digital Hub</p>

                            </div>

                            <hr></hr>
                        </div>
                   
                    </div>

                </motion.div>

            </section>

            <section>
                <StudentReview/>
            </section>

            <section>

                 <div className="why-choose-us-section-main">
                                <div className="overlay">
                                    <div className="our-program ">
                
                                        <div className="left-side-our-program">
                                            <motion.div
                                                variants={leftVariants}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true, amount: 0.3 }}
                                            >
                
                
                                                <div className="about-us-sub-heading ">
                                                    <p>WHY CHOOSE US </p>
                                                </div>
                
                                                <div className="para-about-us-hero-heading white">
                                                    <p>Join us to gain expert knowledge, practical skills,</p>
                                                </div>
                
                                                <div className="content-about-us-hero white">
                                                    <p>We are committed to providing top-quality education that prepares you for a successful career in the aviation and hospitality sectors. Our programs are designed and delivered by industry veterans who bring real-world knowledge and experience into the classroom, ensuring you gain practical skills that employers value..</p>
                                                </div>
                                            </motion.div>
                
                                            <div className="provide why-choose-us-section">
                                                <motion.div
                                                    variants={bottomVariants}
                                                    initial="hidden"
                                                    whileInView="visible"
                                                    viewport={{ once: true, amount: 0.3 }}
                                                >
                
                
                                                    <ul>
                                                        <li><span><PiChalkboardTeacherThin /></span> Flexible Scheduling</li>
                                                        <li><span><FaMedal /></span>Varified Certificates </li>
                                                        <li><span>< MdFlight /></span> Experienced Instructors</li>
                                                        <li><span><MdOutlineSecurity /></span>State-of-the-Art Facilities</li>
                
                                                    </ul>
                                                </motion.div>
                                            </div>
                
                
                                        </div>
                
                                        <motion.div
                                            variants={rightVariants}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true, amount: 0.3 }}
                                            className="right-side-our-program">
                
                                            <img src="https://demo.creativemox.com/aviatora/wp-content/uploads/sites/9/2023/09/8.jpg"></img>
                
                
                                        </motion.div>
                
                
                                    </div>
                                </div>
                
                            </div>
            </section>



        </>
    )
}

export default AboutUs;