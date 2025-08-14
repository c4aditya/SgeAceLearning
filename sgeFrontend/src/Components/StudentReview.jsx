import { useState } from "react";
import { MdOutlineSignalWifiStatusbarConnectedNoInternet4 } from "react-icons/md";

function StudentReview() {
    const StudentData = [
        {
            id: 1,
            image:"https://demo.creativemox.com/aviatora/wp-content/uploads/sites/9/2023/09/09.jpg",
            studentName: "Ankit Singh",
            positionName: "Groud Staff",
            studentMessage: "Sgeace Learning’s aviation course provided me with practical skills and the confidence needed to succeed in this dynamic and fast-paced industry. The curriculum covers all essential aspects thoroughly, helping me build a strong foundation for my aviation career."
        },
        {
            id: 2,
             image:"https://demo.creativemox.com/aviatora/wp-content/uploads/sites/9/2023/09/09.jpg",
            studentName: "Prince Kumar ",
            positionName: "Groud Staff",
            studentMessage: "The well-organized lessons at Sgeace Learning made even the most complex aviation concepts easy to understand. The instructors are knowledgeable and supportive, which made the entire learning experience engaging and productive"
        },

        {
            id: 3,
             image:"https://demo.creativemox.com/aviatora/wp-content/uploads/sites/9/2023/09/09.jpg",
            studentName: "Saurabh Yadav ",
            positionName: "Groud Staff",
            studentMessage: "Thanks to Sgeace Learning, I now have a solid understanding of aviation operations and safety procedures. Their comprehensive training and real-world insights gave me the confidence to pursue my career goals in aviation with clarity"
        },

         {
            id: 4,
             image:"https://demo.creativemox.com/aviatora/wp-content/uploads/sites/9/2023/09/09.jpg",
            studentName: "Amit singh ",
            positionName: "Groud Staff",
            studentMessage: "Sgeace Learning covers all crucial areas for aviation careers, from ground staff responsibilities to cabin crew training. Their detailed modules and practical approach are perfect for anyone looking to start and thrive in the aviation sector"
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
              

                <div className="student-review-main-div">

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


                </div>

               </div>
            </section>

        </>
    )
}

export default StudentReview;