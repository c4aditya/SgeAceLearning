// import { useState } from "react";
import { motion } from "framer-motion";
import Course from "./CourseData";
import { MdFlight } from "react-icons/md";
import { FaMedal } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { PiChalkboardTeacherThin } from "react-icons/pi";
import { MdOutlineSecurity } from "react-icons/md";
import { PiFacebookLogo } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import { SlSocialTwitter } from "react-icons/sl";
import FramerMotion from "../FramerMotion";
import { useNavigate } from "react-router-dom";
import { IoStar } from "react-icons/io5";
import { IoLanguageOutline } from "react-icons/io5";
import { RiTimeFill } from "react-icons/ri";
function CourseSection({ contactUs }) {
    // const [courseData , setCourseData] = useState(Course)
    const { leftVariants, rightVariants, bottomVariants } = FramerMotion;
    const nevigate = useNavigate();
    return (
        <>
            <div className="wrapper">


                <div className="our-program">

                    <motion.div
                        variants={leftVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="left-side-our-program">
                        <div className="about-us-sub-heading">
                            <p>OUR PROGRAMS</p>
                        </div>

                        <div className="para-about-us-hero-heading">
                            <p>Avation Industryes And Hotel Management</p>
                        </div>

                        <div className="content-about-us-hero">
                            <p>We offer the best courses to launch your career in the aviation industry, taught by highly experienced teachers from the field. Learn from experts and get industry-ready with our specialized training.</p>
                        </div>

                        <motion.div
                            variants={bottomVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            className="provide">
                            <ul>
                                <li><span>< MdFlight /></span> Training Programs</li>
                                <li><span><FaMedal /></span>Certifications Programs</li>
                            </ul>
                        </motion.div>


                    </motion.div>

                    <motion.div
                        variants={rightVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="right-side-our-program">

                        <img src="https://res.cloudinary.com/dxgmovaih/image/upload/v1756443830/traningPoster_spkrer.avif" alt="posterimage" loading="lazy"></img>


                    </motion.div>


                </div>

              
                <div  className="course_data">
                    {
                        Course.map((data) => (
                            <motion.div
                                variants={bottomVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                className="course-card"
                                onClick={() => nevigate("/courseDeatils", { state: data })}>

                                <div className="course-images">
                                    <img src={data.image} />
                                </div>

                                <hr className="card-hr"></hr>



                                <div className="course-name">

                                    <p>{data.name}</p>

                                </div>


                                <div className="course-rating">


                                    <div className="course-details-info border-in-course">

                                        <ul>
                                            <li><span><IoStar /></span>{data.rating}</li>
                                            <li><span>< IoLanguageOutline /></span>{data.language}</li>
                                            <li><span><RiTimeFill /></span>{data.hours}</li>
                                        </ul>
                                    </div>

                                </div>






                            </motion.div>
                        ))}
                </div>
            </div>

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

                            <img src="https://res.cloudinary.com/dxgmovaih/image/upload/v1756448138/DeWatermark.ai_1756448119929_rtuyqo.jpg"></img>


                        </motion.div>


                    </div>
                </div>

            </div>

            <div className="meet-our-team-section">
                <div className="meet-our-team">
                    <motion.div
                        variants={leftVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >


                        <div className="our-team-heading">
                            <p>MEET OUR INSTRUCTORS</p>
                        </div>

                        <div className="our-team-para">
                            <p>Empowering Minds, Inspiring Success: Meet our expert instructors at SGACE Learning. Experience excellence in education with industry-leading professionals dedicated to unlocking your full potential.</p>
                        </div>
                    </motion.div>
                    <div className="instructor-image-top-class">
                        <motion.div
                            variants={bottomVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            className="instructor-images">
                            <img src="https://res.cloudinary.com/dxgmovaih/image/upload/v1754237306/smiling-female-student-doing-homework-desk-1414x1536_my0vpk.jpg">

                            </img>


                            <div className="teacher-name-and-occ">

                                <p className="t-name">Kavya Sharma</p>
                                <p className="t-occ">Professor</p>


                            </div>

                            <div className="social-media-of-teachers">
                                <ul>
                                    <li><PiFacebookLogo /></li>
                                    <li><IoLogoInstagram /></li>
                                    <li><CiLinkedin /></li>

                                </ul>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={bottomVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            className="instructor-images">
                            <img src="https://res.cloudinary.com/dxgmovaih/image/upload/v1754237288/successful-businessman-1414x1536_mjuwfg.jpg">
                            </img>

                            <div className="teacher-name-and-occ">

                                <p className="t-name">Krishna Gopal</p>
                                <p className="t-occ">Professor</p>

                            </div>

                            <div className="social-media-of-teachers">
                                <ul>
                                    <li><PiFacebookLogo /></li>
                                    <li><IoLogoInstagram /></li>
                                    <li><CiLinkedin /></li>

                                </ul>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={bottomVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            className="instructor-images hide-images">
                            <img src="https://res.cloudinary.com/dxgmovaih/image/upload/v1754237280/confident-businessman-1414x1536_yvf2g5.jpg">
                            </img>

                            <div className="teacher-name-and-occ">

                                <p className="t-name">Dipanshu Chauhan</p>
                                <p className="t-occ">Professor</p>
                            </div>

                            <div className="social-media-of-teachers">
                                <ul>

                                    <li><PiFacebookLogo /></li>
                                    <li><IoLogoInstagram /></li>
                                    <li><CiLinkedin /></li>

                                </ul>
                            </div>
                        </motion.div>
                    </div>




                </div>
            </div>


        </>
    )
}

export default CourseSection;