import { motion } from "framer-motion";
import FramerMotion from "../FramerMotion.js";
import { useState } from "react";
import Course from "../Courses/CourseData";
import { HiAdjustments } from "react-icons/hi";
import { IoStar } from "react-icons/io5";
import { IoLanguageOutline } from "react-icons/io5";
import { RiTimeFill } from "react-icons/ri";
import { FaIndianRupeeSign } from "react-icons/fa6";
const { leftVariants, rightVariants, bottomVariants } = FramerMotion;
import { useNavigate } from "react-router-dom";
import StudentReview from "../StudentReview.jsx";
function OurCourses() {
    const [courseData, setCourseData] = useState(Course);
    const navigate =useNavigate();
    // console.log(Course)
    let CourseType;
    function handleFilter(event) {

        console.log("the button is clicked")
        // console.log(event.target.innerHTML.toLowerCase());
        
        CourseType = event.target.innerHTML.toLowerCase().trim();
        // console.log(CourseType)       
        
        const filterCourse = Course.filter(course => course.type.toLowerCase() === CourseType);
        // console.log(filterCourse)
        setCourseData(filterCourse)
        console.log(courseData)

    }



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
                            <p>Our Courses </p>
                        </div>

                        <div className="per-page-poster-content">
                            <p>Our Courses created for you</p>
                        </div>


                    </motion.div>



                </div>

            </section>

            <section className="bg-color">

                <h1 className="c-h">Get the skills and real-world experience employers want with Career Accelerators.</h1>

                <section>
                    <div className="button-categoryes">
                        <div className="filter-icon">
                            <button><HiAdjustments /></button>
                        </div>
                        <div className="buttons-cat">
                            <button onClick={() => setCourseData(Course)}> All </button>
                        </div>

                        <div className="buttons-cat">
                            <button onClick={handleFilter}> Aviation </button>
                        </div>

                        <div className="buttons-cat">
                            <button onClick={handleFilter}> Ship </button>
                        </div>

                        <div className="buttons-cat">
                            <button onClick={handleFilter}> Hr </button>
                        </div>

                        <div className="buttons-cat">
                            <button onClick={handleFilter}> Hotel </button>
                        </div>
                    </div>
                </section>


                <section>
                    <div className="course-deatils-course-page">

                        {

                            courseData.map((data) => (
                                <div className="sub-class-our-course" key={data.id}>
                                    <div className="course-image">
                                        <img src={data.image} alt="courseImage" loading="lazy" />
                                    </div>

                                    <div className="course-page-course-content">
                                        <div className="course-page-course-name">
                                            <p>{data.name}</p>
                                        </div>

                                        <div className="course-page-course-detials">
                                            <p>{data.courseDetails}</p>
                                        </div>

                                        <div className="course-details-info">

                                            <ul>
                                                <li><span><IoStar /></span>{data.rating}</li>
                                                <li><span>< IoLanguageOutline /></span>{data.language}</li>
                                                <li><span><RiTimeFill /></span>{data.hours}</li>
                                            </ul>
                                        </div>


                                    </div>

                                    <div className="course-page-buttons">


                                        <div className="course-price-course-page">
                                            <p className="cut"> <span><FaIndianRupeeSign /></span>{data.oldPrice} /- </p>
                                            <p> <span><FaIndianRupeeSign /></span>{data.price} /- </p>
                                        </div>

                                        <div className="enq">
                                            <button onClick={()=> navigate("/courseDeatils" , {state :data})}>Course Deatils</button>
                                        </div>

                                        <div className="enq">
                                            <button onClick={()=> navigate("/applicationForm")}>Enroll Now </button>
                                        </div>

                                    </div>
                                </div>
                            ))

                        }

                    </div>

                </section>


            </section>

            <StudentReview/>

        </>
    )
}

export default OurCourses;