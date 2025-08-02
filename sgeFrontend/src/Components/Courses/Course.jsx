// import { useState } from "react";
import Course from "./CourseData";
import { MdFlight } from "react-icons/md";
import { FaMedal } from "react-icons/fa";
function CourseSection() {
    // const [courseData , setCourseData] = useState(Course)
    return (
        <>

        <div className="our-program">

            <div className="left-side-our-program">
                <div className="about-us-sub-heading">
                    <p>OUR PROGRAMS</p>
                </div>
   
                    <div className="para-about-us-hero-heading">
                    <p>Avation Industrys , Hotels Managements</p>
                </div>

                <div className="content-about-us-hero">
                 <p>We offer the best courses to launch your career in the aviation industry, taught by highly experienced teachers from the field. Learn from experts and get industry-ready with our specialized training.</p>
                </div>

                <div className="provide">
                    <ul>
                        <li><span>< MdFlight /></span> Training Programs</li>
                        <li><sapn><FaMedal/></sapn>Certifications Programs</li>
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
                            <img src={data.image}/>
                        </div>

                        <div className="course-name">

                            <p>{data.name}</p>

                        </div>

                

                        <div className="course-cards-buttons">

                            <button>Enquiry Now</button>
                             <button>Enquiry Now</button>

                         </div>

                        </div>
              ))  }
            </div>
        </>
    )
}

export default CourseSection;