import CourseSection from "./Courses/Course";
import ContactUs from "./Contactus";
import { motion } from "framer-motion";
import FramerMotion from "./FramerMotion";
import { useNavigate } from "react-router-dom";

const { leftVariants, rightVariants, bottomVariants } = FramerMotion;

function Hero() {

  const navigate = useNavigate();


  return (
    <>
     

      <section>
        <div className="main-hero-section">
          <div className="main-hero-section-content-starts">
            {/* Animate this from left */}
            <motion.div
              variants={leftVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="company-name">
                <p>SGACE LEARNING TRAINING INSTITUTE</p>
              </div>

              <div className="company-discripction-heading">
                <p>Empowering Dreams Through Education</p>
              </div>

              <div className="company-discripction">
                <p>
                  SGACE Learning Training Institute India Pvt Ltd stands as a
                  beacon of opportunity and empowerment. With a steadfast
                  commitment to excellence, we foster a culture where every
                  learner, regardless of background or circumstance, can thrive
                  and succeed.
                </p>
              </div>
            </motion.div>

            {/* Animate buttons from bottom */}
            
            <motion.div
              variants={bottomVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="main-poster-buttons">

              <button className="enroll-now">  See Courses  </button>
              <button className="enquiry-now" onClick={()=> navigate("/contactUs")} > Enquiry Now </button>

            </motion.div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
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

                <div className="button">
                  <button className="button-know-more" onClick={()=>navigate("/aboutus") }>Know More</button>
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
                <div className="image-of-persion">
                  <img
                    src="https://acelearningtraining.com/wp-content/uploads/2024/03/9963629-removebg-preview.png" 
                    alt="Person 1"
                  />
                </div>

                
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Posters section */}

      <section>
        <div className="posters-adv">
          <motion.div
            variants={leftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="main-img-posters-adv"
          >
            <img src="https://res.cloudinary.com/dxgmovaih/image/upload/v1755680851/3_dedag2.png" alt="Poster_1" />
          </motion.div>

          <motion.div
            variants={bottomVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="main-img-posters-adv">
            <img src="https://res.cloudinary.com/dxgmovaih/image/upload/v1754915677/Blue_and_Yellow_Modern_Online_Learning_Courses_LinkedIn_Post_1_iznsqf.png" alt="Poster 2" />
          </motion.div>

          <motion.div
            variants={rightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="main-img-posters-adv">
            <img src="https://res.cloudinary.com/dxgmovaih/image/upload/v1755680847/1_npojur.png" alt="Poster 3" />
          </motion.div>
        </div>
      </section>

      {/* Course section */}
      <section>
        <div>
          <CourseSection />
        </div>
      </section>

      {/* Contact Us section */}
      <div >
        <ContactUs />
      </div>

    
    </>
  );
}

export default Hero;
