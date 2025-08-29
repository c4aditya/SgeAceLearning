import { motion } from "framer-motion";
import FramerMotion from "./FramerMotion.js";
const {  bottomVariants } = FramerMotion;

function StudentReview() {
    const StudentData = [
        {
            id: 1,
            image:"https://do6gp1uxl3luu.cloudfront.net/assets/testimonials/shreya-prasad.webp",
            studentName: "Ankita Singh",
            studentMessage: "Sgace Learning’s aviation course provided me with practical skills and the confidence needed to succeed in this dynamic and fast-paced industry. The curriculum covers all essential aspects thoroughly, helping me build a strong foundation for my aviation career."
        },
        {
            id: 2,
             image:"https://do6gp1uxl3luu.cloudfront.net/assets/testimonials/abhay-goel.webp",
            studentName: "Prince Kumar" ,
            studentMessage: "The well-organized lessons at Sgace Learning made even the most complex aviation concepts easy to understand. The instructors are knowledgeable and supportive, which made the entire learning experience engaging and productive"
        },

        {
            id: 3,
             image:"https://do6gp1uxl3luu.cloudfront.net/assets/testimonials/s-s.webp",
            studentName: "Saurabh Yadav ",
            
            studentMessage: "Thanks to Sgace Learning, I now have a solid understanding of aviation operations and safety procedures. Their comprehensive training and real-world insights gave me the confidence to pursue my career goals in aviation with clarity"
        },

         {
            id: 4,
             image:"https://do6gp1uxl3luu.cloudfront.net/assets/testimonials/anand-gadagin.webp",
            studentName: "Amit singh ",
            
            studentMessage: "Sgace Learning covers all crucial areas for aviation careers, from ground staff responsibilities to cabin crew training. Their detailed modules and practical approach are perfect for anyone looking to start and thrive in the aviation sector"
        }

    ]
  
   
    return (
        <>

            <section className="student-review">

               <div className="wrapper testmonial">
                <div className="about-us-sub-heading  center ">
                    <p>TESTMONIAL</p>
                </div>

                <div className="para-about-us-hero-heading center">
                    <p>Student Feedback and Review 4500 + </p>
                </div>
              

                   <motion.div
                        variants={bottomVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                         className="student-review-main-div"
                    >
            

                    {
                        StudentData.map(data  =>(
                            <div className="main-student-div">
                            <div className="student-image">
                                <img src={data.image} alt="Student images"/>
                            </div>

                            <div className="student-message">

                                <p>{data.studentMessage}</p>

                            </div>

                            <div className="student-name-and-position">

                                <p className="student-name">{data.studentName}</p>
                                <p className="student-position">{data.positionName}</p>

                            </div>

                            </div>
                           
                        ))
                    }


                </motion.div>

               </div>
            </section>

        </>
    )
}

export default StudentReview;