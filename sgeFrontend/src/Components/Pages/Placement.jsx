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
function Placement() {
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
                            <p>Our Placement </p>
                        </div>

                        <div className="per-page-poster-content">
                            <p>Our Placement </p>
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

                                    <p>We provide professional certifications in Aviation Management, Hotel Management, and Cruise Hospitality Management. SGE Ace Learning does not provide direct job placement support; instead, we share information about genuine job vacancies and ongoing recruitment opportunities available in different companies. SGE Ace Learning is associated with a strong placement cell that offers employment opportunities across various departments every year.

                                        Students from all over the country secure jobs in different sectors through our placement support. Candidates with the right skills and talent have access to numerous opportunities through campus selection drives. SGE Ace Learning regularly organizes multiple campus recruitment programs for students who are seeking job placements.

                                        During our batch, the overall placement rate was 80–90%, and this percentage continues to grow consistently each year.</p>

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
                                    <img src="https://plus.unsplash.com/premium_photo-1688822014591-30d7b089b43c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
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

                            {/* <div className="future-icon">
                                <img src="https://res.cloudinary.com/dxja3zaez/image/upload/v1765607164/Icon_la06g3.svg" />
                            </div> */}

                            <div className="future-heading">
                                <p>Recruiting Companies</p>
                            </div>

                        </div>

                        <div className="future-para">
                            <p>Leading national and international companies actively engage in recruitment activities through our campus network, providing students with exposure to a wide range of career opportunities across various industries and departments, based on skills, talent, and eligibility criteria.</p>
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

                            {/* <div className="future-icon">
                                <img src="https://res.cloudinary.com/dxja3zaez/image/upload/v1765607164/Icon-3_sy4vil.svg" />
                            </div> */}

                            <div className="future-heading">
                                <p> Average Salary </p>
                            </div>

                        </div>

                        <div className="future-para">

                            <p>Graduates are offered attractive and competitive salary packages across various industries, based on their skills, professional qualifications, and overall performance, providing them with opportunities for career growth, financial stability, and long-term success in their respective fields.</p>

                        </div>

                    </motion.div>

                    <motion.div
                        variants={rightVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="main-class-future">


                        <div className="image-and-heading-future">

                            {/* <div className="future-icon">
                                <img src="https://res.cloudinary.com/dxja3zaez/image/upload/v1765607164/Icon-1_bwzuil.svg" />
                            </div> */}

                            <div className="future-heading">
                                <p>Nationwide Placements</p>
                            </div>

                        </div>

                        <div className="future-para">

                            <p>Our alumni are successfully placed in reputed organizations across the country, where they are working in a wide range of roles across various industries, contributing their skills, knowledge, and professional training while building strong and sustainable careers in their respective fields.</p>
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
                <div className="main-wrapper-placement">

                    <div className="main-heading-forplacement">
                        <h1 color="orange">SGE ACE Learning : Comprehensive Placement Support Across All Courses</h1>
                    </div>
                    <div className="main-para-forplacement" />
                    <p>At SGE Ace Learning, we understand that securing a job after completing your diploma can be one of the most crucial aspects of your education journey. That’s why we are dedicated to offering unparalleled placement support and assistance across all our diploma programs. Securing a job after graduation can be challenging, particularly in competitive fields. Our placement support services are designed to bridge the gap between your academic achievements and your professional aspirations. By offering robust placement assistance, we help you transition smoothly from student life to the workforce, giving you a significant advantage in your job search.</p>
                </div>

                <div className="main-wrapper-placement">

                    <div className="main-heading-forplacement">
                        <h1 color="orange">Our Placement Support Services</h1>
                    </div>
                    <div className="main-para-forplacement">

                        <p> <b className="color-orange">1. Personalized Career Counseling: </b> Our expert career counselors provide one-on-one guidance tailored to your specific course and career interests. They help you identify your strengths, understand the job market, and set realistic career goals. Whether you're aiming for a role in aviation, hotel management, or any other field, our counselors offer personalized advice to align your career path with your ambitions</p>

                    </div>

                    <div className="main-para-forplacement">

                        <p> <b className="color-orange">2. Resume and Cover Letter Assistance: </b> A strong resume and cover letter are crucial for making a great first impression. Our team helps you craft professional and compelling resumes and cover letters that highlight your skills, qualifications, and experiences. We ensure that your documents are tailored to the industry you’re entering, making you stand out to potential employers.</p>

                    </div>
                    <div className="main-para-forplacement">
                        <p>
                            <b className="color-orange">3. Interview Preparation: </b>
                            Interviews can be daunting, but our comprehensive preparation services are here to help. We conduct mock interviews to help you practice and refine your responses, while providing constructive feedback to improve your performance. Our goal is to ensure you are confident, well-prepared, and ready to face real-world interviews successfully.
                        </p>
                    </div>
                    <div className="main-para-forplacement">
                        <p>
                            <b className="color-orange">4. Networking Opportunities: </b>
                            Networking is a powerful tool in job searching. SGE Ace Learning connects you with industry professionals through workshops, seminars, and networking events. These opportunities help you build valuable connections, gain insights into industry trends, and potentially discover job leads.
                        </p>
                    </div>

                    <div className="main-para-forplacement">
                        <p>
                            <b className="color-orange">5. Job Fairs and Recruitment Drives: </b>
                            We organize job fairs and recruitment drives specifically tailored to our diploma programs. These events bring together leading employers from various industries, providing direct access to job opportunities and allowing you to interact face-to-face with potential employers.
                        </p>
                    </div>

                    <div className="main-para-forplacement">
                        <p>
                            <b className="color-orange">6. Internship and Job Placement Assistance: </b>
                            Internships often serve as a pathway to full-time employment. Our placement team assists students in identifying relevant internships and job opportunities aligned with their diploma programs. Through established industry connections, we help link students with roles that match their career goals.
                        </p>
                    </div>

                    <div className="main-para-forplacement">
                        <p>
                            <b className="color-orange">7. Ongoing Support: </b>
                            Our support continues even after placement. We provide ongoing guidance to help students manage early career challenges, adapt to professional work environments, and continue their long-term professional growth.
                        </p>
                    </div>

                </div>

                <div className="main-wrapper-placement">
                    <div className="main-heading-forplacement">
                        <h1 color="orange">Course-Specific Placement Assistance</h1>
                    </div>

                    <div className="main-para-forplacement">
                        <p>
                            <b className="color-orange">1. Diploma in Aviation & Cabin Crew: </b>
                            Our placement-related guidance in the aviation sector focuses on connecting students with airlines and aviation companies. We provide training on industry-specific requirements, and our strong industry network helps students access suitable career opportunities.
                        </p>
                    </div>

                    <div className="main-para-forplacement">
                        <p>
                            <b className="color-orange">2. Diploma in Air Hostess: </b>
                            For students aspiring to become air hostesses, we share information about opportunities with airlines and hospitality groups. Special focus is given to preparing students for customer service excellence and safety-related responsibilities.
                        </p>
                    </div>

                    <div className="main-para-forplacement">
                        <p>
                            <b className="color-orange">3. Diploma in IT: </b>
                            The IT sector is vast and constantly evolving. We provide updates on opportunities with tech companies, startups, and multinational organizations, covering various IT domains such as software development and network administration.
                        </p>
                    </div>

                    <div className="main-para-forplacement">
                        <p>
                            <b className="color-orange">4. Diploma in Airport Management: </b>
                            Airport management requires specialized skills and operational knowledge. We share information about opportunities with airport authorities and management companies across roles in operations, customer service, and administration.
                        </p>
                    </div>

                    <div className="main-para-forplacement">
                        <p>
                            <b className="color-orange">5. Diploma in Hotel Management: </b>
                            The hospitality industry offers diverse career options. We inform students about openings in hotels, resorts, and restaurants across departments such as management, operations, and guest services.
                        </p>
                    </div>

                    <div className="main-para-forplacement">
                        <p>
                            <b className="color-orange">7. Diploma in Fire and Safety: </b>
                            Fire and safety is a critical professional field. We share vacancy information related to fire departments, safety agencies, and industrial safety roles based on students’ training and qualifications.
                        </p>
                    </div>

                    <div className="main-para-forplacement">
                        <p>
                            <b className="color-orange">8. Diploma in Cruise Ship: </b>
                            A career on cruise ships offers global exposure. We provide information about recruitment opportunities on cruise liners, including roles in hospitality, entertainment, and onboard safety services.
                        </p>
                    </div>

                    <div className="main-para-forplacement">
                        <p>
                            <b className="color-orange">9. Diploma in Tourism Management & Tourism Studies: </b>
                            Tourism is a global industry with wide-ranging opportunities. We inform students about roles in travel agencies, tour operators, and tourism organizations, aligned with their interests and specialization.
                        </p>
                    </div>

                    <div className="main-para-forplacement">
                        <p>
                            <b className="color-orange">10. Diploma in Merchant Navy: </b>
                            The merchant navy requires specialized professional training. We share recruitment-related information from shipping companies and maritime organizations to help students begin careers at sea.
                        </p>
                    </div>

                    <div className="main-para-forplacement">
                        <p>
                            <b className="color-orange">11. Diploma in Banking & Finance: </b>
                            The banking and finance sector offers multiple career pathways. We provide updates on opportunities in banks, financial institutions, and investment firms across roles in finance management, analysis, and advisory services.
                        </p>
                    </div>


                </div>
                <div className="main-wrapper-placement">
                    <div className="main-heading-forplacement">
                        <h1 color="orange">Career-Focused Placements Across High-Demand Industries</h1>
                    </div>
                    <div className="main-para-forplacement">
                        <p><b className="orange">SGE Ace Learning </b>is committed to your success, and our career guidance, job-related assistance, and support reflect this commitment. We are dedicated to providing the right resources, industry insights, and opportunities to help you move closer to your career goals.

                            By choosing SGE Ace Learning, you are not just investing in education, but also in a future with strong career prospects and continuous professional growth. Join us and take the first step toward a rewarding career with the confidence of having dedicated career support and guidance by your side.</p>
                    </div>


                </div>

                <div className="main-wrapper-placement">
                    <div className="main-heading-forplacement">
                        <h1 color="orange">Course-Specific Placement Assistance</h1>
                    </div>

                    <div className="main-heading-forplacement-small">
                        <h1 color="orange">Placement in Aviation Industry</h1>
                    </div>
                    <div className="main-para-forplacement">
                        <p>
                            Placement in the aviation industry involves matching individuals to specific roles across various sectors such as commercial aviation, air traffic management, aerospace manufacturing, and airport operations. Key challenges include meeting high qualification standards, navigating regulatory requirements, and adapting to rapid technological advancements. Effective placement strategies include obtaining relevant education and certifications, gaining practical experience through internships, and leveraging industry-specific networks. By focusing on continuous professional development and being adaptable to global opportunities, individuals can successfully secure and excel in aviation-related positions.
                        </p>
                    </div>



                </div>

                <div className="main-wrapper-placement">


                    <div className="main-heading-forplacement-small">
                        <h1 color="orange">Placement in Hotel Management</h1>
                    </div>
                    <div className="main-para-forplacement">
                        <p>
                            Placement in hotel management plays a pivotal role in shaping the careers of individuals entering the hospitality industry. It involves transitioning from academic training to real-world employment, where practical experience gained through internships and hands-on training becomes crucial. The process not only helps in securing roles such as front office manager, food and beverage supervisor, or event coordinator but also equips candidates with the skills to thrive in a rapidly evolving sector. Industry trends, such as technological advancements, sustainability practices, and personalized guest experiences, influence the demand for specific skills, including digital literacy, customer service excellence, and cultural awareness. Furthermore, the global nature of the hospitality industry offers diverse opportunities beyond local markets, allowing professionals to explore international careers and gain valuable cross-cultural experiences. In essence, successful placement in hotel management requires a blend of academic knowledge, practical experience, and adaptability to industry trends.
                        </p>
                    </div>



                </div>

                <div className="main-wrapper-placement">


                    <div className="main-heading-forplacement-small">
                        <h1 color="orange">Placement in Mass Communication</h1>
                    </div>
                    <div className="main-para-forplacement">
                        <p>
                            Placement in mass communication involves transitioning from academic training to professional roles in various media and communication sectors. This phase is crucial as it allows graduates to apply their theoretical knowledge and practical skills gained through coursework and internships to real-world scenarios. Effective placement requires not only a solid educational foundation in areas such as journalism, public relations, and digital media but also hands-on experience that hones essential skills like writing, content creation, and media management. As the industry evolves with technological advancements and changing media consumption patterns, professionals must stay adept in digital tools, social media strategies, and multimedia production. Success in this field often involves navigating a competitive job market, building a robust professional network, and embracing global opportunities, which can offer diverse career paths and cross-cultural experiences. Ultimately, successful placement in mass communication demands a blend of academic prowess, practical experience, and adaptability to industry trends.
                        </p>
                    </div>



                </div>

                   <div className="main-wrapper-placement">


                    <div className="main-heading-forplacement-small">
                        <h1 color="orange">Placement in Air Hostess</h1>
                    </div>
                    <div className="main-para-forplacement">
                       <p>
                        Placement in air hostess positions involves transitioning from comprehensive training to active roles in the aviation industry, where individuals are responsible for ensuring passenger safety and comfort during flights. This role requires rigorous training in safety procedures, customer service, and in-flight duties, coupled with certification from aviation authorities. As the aviation industry evolves with technological advancements and changing passenger expectations, air hostesses must adapt to new tools, maintain high standards of service, and handle diverse international travel scenarios. Successful placement not only hinges on acquiring necessary skills and certifications but also on managing the challenges of irregular hours and global travel, all while delivering exceptional service and maintaining a professional demeanor.
                       </p>
                    </div>



                </div>

            </section>

            <section>
                <StudentReview />
            </section>







        </>
    )
}

export default Placement;