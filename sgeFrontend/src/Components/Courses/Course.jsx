// import { useState } from "react";
import Course from "./CourseData";
import { MdFlight } from "react-icons/md";
import { FaMedal } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { PiChalkboardTeacherThin } from "react-icons/pi";
import { MdOutlineSecurity } from "react-icons/md";
function CourseSection() {
    // const [courseData , setCourseData] = useState(Course)
    return (
        <>
            <div className="wrapper">


                <div className="our-program">

                    <div className="left-side-our-program">
                        <div className="about-us-sub-heading">
                            <p>OUR PROGRAMS</p>
                        </div>

                        <div className="para-about-us-hero-heading">
                            <p>Avation Industryes And Hotel Management</p>
                        </div>

                        <div className="content-about-us-hero">
                            <p>We offer the best courses to launch your career in the aviation industry, taught by highly experienced teachers from the field. Learn from experts and get industry-ready with our specialized training.</p>
                        </div>

                        <div className="provide">
                            <ul>
                                <li><span>< MdFlight /></span> Training Programs</li>
                                <li><span><FaMedal /></span>Certifications Programs</li>
                            </ul>
                        </div>


                    </div>

                    <div className="right-side-our-program">

                        <img src="https://demo.creativemox.com/aviatora/wp-content/uploads/sites/9/2023/09/13.jpg"></img>


                    </div>


                </div>

                <div className="course_data">
                    {
                        Course.map((data) => (
                            <div className="course-card">

                                <div className="course-images">
                                    <img src={data.image} />
                                </div>

                                <hr className="card-hr"></hr>

                                <div className="course-rating">
                                    <p><span><IoIosStar /></span>{data.rating}</p>
                                </div>

                                <div className="course-name">

                                    <p>{data.name}</p>

                                </div>


                                <div className="course-rating">
                                    <p><span><FaIndianRupeeSign /></span>{data.price} /- </p>
                                </div>




                                <hr className="card-hr"></hr>

                                <div className="course-cards-buttons">

                                    <button>Course Details </button>
                                    <button>Enquiry Now</button>

                                </div>

                            </div>
                        ))}
                </div>


                <div className="why-choose-us-section-main">
                    <div className="overlay">
                        <div className="our-program ">

                            <div className="left-side-our-program">
                                <div className="about-us-sub-heading ">
                                    <p>WHY CHOOSE US </p>
                                </div>

                                <div className="para-about-us-hero-heading white">
                                    <p>Join us to gain expert knowledge, practical skills,</p>
                                </div>

                                <div className="content-about-us-hero white">
                                    <p>We are committed to providing top-quality education that prepares you for a successful career in the aviation and hospitality sectors. Our programs are designed and delivered by industry veterans who bring real-world knowledge and experience into the classroom, ensuring you gain practical skills that employers value..</p>
                                </div>

                                <div className="provide why-choose-us-section">
                                    <ul>
                                        <li><span><PiChalkboardTeacherThin /></span> Flexible Scheduling</li>
                                        <li><span><FaMedal /></span>Varified Certificates </li>
                                        <li><span>< MdFlight /></span> Experienced Instructors</li>
                                        <li><span><MdOutlineSecurity /></span>State-of-the-Art Facilities</li>

                                    </ul>
                                </div>


                            </div>

                            <div className="right-side-our-program">

                                <img src="https://demo.creativemox.com/aviatora/wp-content/uploads/sites/9/2023/09/8.jpg"></img>


                            </div>


                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CourseSection;