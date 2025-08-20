import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { IoStar } from "react-icons/io5";
import { IoLanguageOutline } from "react-icons/io5";
import { RiTimeFill } from "react-icons/ri";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { FaIndianRupeeSign } from "react-icons/fa6";

function CourseDetails() {
    const location = useLocation();
    const data = location.state;
    const leftVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    };


    return (
        <>
            <section>

                <div className="top-poster-section-contact-us">


                    <motion.div
                        variants={leftVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="main-content-poster-page"
                    >


                        <div className="company-name">
                            <p>Course Details </p>
                        </div>

                        <div className="course-name-course-details">
                            <p>{data.name}</p>
                        </div>

                        <div className="course-details-info">

                            <ul>
                                <li><span><IoStar /></span>{data.rating}</li>
                                <li><span>< IoLanguageOutline /></span>{data.language}</li>
                                <li><span><RiTimeFill /></span>{data.hours}</li>
                            </ul>
                        </div>
                    </motion.div>



                </div>

            </section>

            <section>
                <div className="course-details-section">

                    <div className="course-deatils-contents">

                        <div className="about-job">
                            <p className="about-job-p">About Course </p>
                            <p className="course-details">{data.courseDetails}</p>

                        </div>

                        <hr></hr>

                        <div className="what-we-will-provide">

                            <p className="about-job-p">What you will get </p>

                            <ul>
                                <li><span><IoCheckmarkCircleOutline /></span>{data.whatYouWillGet.one}</li>
                                <li><span><IoCheckmarkCircleOutline /></span>{data.whatYouWillGet.two}</li>
                                <li><span><IoCheckmarkCircleOutline /></span>{data.whatYouWillGet.three}</li>
                                <li><span><IoCheckmarkCircleOutline /></span>{data.whatYouWillGet.four}</li>
                                <li><span><IoCheckmarkCircleOutline /></span>{data.whatYouWillGet.five}</li>
                            </ul>

                        </div>
                        <hr></hr>

                        <div className="job-responsibility">
                            <p className="about-job-p">Responsibility at work </p>
                               <ul>
                                <li><span><IoCheckmarkCircleOutline /></span>{data.jobResponsibilities.one}</li>
                                <li><span><IoCheckmarkCircleOutline /></span>{data.jobResponsibilities.two}</li>
                                <li><span><IoCheckmarkCircleOutline /></span>{data.jobResponsibilities.three}</li>
                                <li><span><IoCheckmarkCircleOutline /></span>{data.jobResponsibilities.four}</li>
                                <li><span><IoCheckmarkCircleOutline /></span>{data.jobResponsibilities.five}</li>
                            </ul>

                        </div>
                        <hr></hr>



                    </div>

                    <div className="course-thumbnail">

                        <div className="course-image-main">                       
                        <img src={data.image} loading="lazy" alt="courseThumbnailImage"/>
                        </div>

                            <div className="what-we-will-provide">

                            <p className="about-job-p">Course Includes </p>

                            <ul>
                                <li><span><IoCheckmarkCircleOutline /></span>{data.courseInclude.one}</li>
                                <li><span><IoCheckmarkCircleOutline /></span>{data.courseInclude.two}</li>
                                <li><span><IoCheckmarkCircleOutline /></span>{data.courseInclude.three}</li>
                                <li><span><IoCheckmarkCircleOutline /></span>{data.courseInclude.four}</li>
                                <li><span><IoCheckmarkCircleOutline /></span>{data.courseInclude.five}</li>
                            </ul>

                        </div>

                        <div className="with-price">
                            <div className="course-price">
                                <p className="cut"> <span><FaIndianRupeeSign /></span>{data.oldPrice} /- </p>
                                 <p> <span><FaIndianRupeeSign /></span>{data.price} /- </p>
                            </div>
                           
                        </div>

                        <div className="enroll-btn">
                            <button>Enroll Now </button>
                        </div>

                    </div>


                </div>
            </section>

        </>
    )
}

export default CourseDetails;