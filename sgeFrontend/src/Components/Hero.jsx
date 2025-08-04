import NavBar from "./Navbar";
import CourseSection from "./Courses/Course";
import ContactUs from "./Contactus";
import Footer from "./Footer";
import { useRef } from "react";

function Hero(){
    const aboutUsref = useRef(null);
    const ourCourses = useRef(null);
    const contactUs = useRef(null);
    const footer = useRef(null)
  return(
  <>
  <NavBar
    aboutUs ={aboutUsref}
    ourCourse = {ourCourses}
    contactUs ={contactUs}
    footer = {footer}

  />

  <section>
    <div className="main-hero-section">

    <div className="main-hero-section-content-starts">
        <div className="company-name">
              <p>SGACE LEARNING TRAINING INSTITUTE</p>

        </div>

        <div className="company-discripction-heading">
           <p>Empowering Dreams Through Education</p>      
        </div>

        <div className="company-discripction">
               <p>SGACE Learning Training Institute India Pvt Ltd stands as a beacon of opportunity and empowerment. With a  steadfast commitment to excellence, we foster a culture where every learner, regardless of background or circumstance, can thrive and succeed.</p>
        </div>

        <div className="main-poster-buttons">
            <button onClick={()=>ourCourses.current.scrollIntoView({behavior:"smooth"})} className="enroll-now">See Courses</button>
            <button  onClick={()=>contactUs.current.scrollIntoView({behavior : "smooth"})} className="enquiry-now">Enquiry Now</button>
        </div>
    </div>
     

    </div>
  </section>

  {/* ---------------------------------------------------------------------------------about us section-start----------------------------------------------------------------------------------- */}

  <section>

    <div  ref={aboutUsref} className="about-us-section-start">
        <div className="wrapper">
        <div  className="about-us-hero">
            <div className="left-side-about-us">

                <div className="about-us-sub-heading">
                 <p>WHO WE ARE </p>
                </div>

                <div className="para-about-us-hero-heading">
                    <p>  SGACE LEARNING TRAINING INSTITUTE [OPC] PVT LTD</p>
                </div>

                <div className="content-about-us-hero">
                    <p>we sharing information about SGACE Learning Training Institute (OPC) Pvt. Ltd., which was established in 2020 and has grown into an academy registered with the Ministry of Corporate Affairs (MCA) in India by 2024. The academy is located in Kasganj and has been operating successfully for the past four years, offering a variety of aviation and related courses.</p>
                </div>

                <div className="button">
                    <button className="button-know-more">Know More </button>
                </div>

            </div>

            <div className="right-side-about-us">
                <div className="image-of-persion">
                    <img src="https://demo.creativemox.com/aviatora/wp-content/uploads/sites/9/2023/09/1.jpg"></img>
                    
                </div>

                  <div className="image-of-persion">
                    <img src="https://demo.creativemox.com/aviatora/wp-content/uploads/sites/9/2023/09/1.jpg"></img>
                    
                </div>
            </div>
        </div>
    </div>
    </div>

  </section>

  <section>
    <div className="posters-adv">
        <div className="main-img-posters-adv">
        <img src="https://res.cloudinary.com/dxgmovaih/image/upload/v1754132528/3_km3prp.png"></img>
        </div>

        <div className="main-img-posters-adv">
        <img src="https://res.cloudinary.com/dxgmovaih/image/upload/v1754132525/2_vxmdrk.png"/>
        </div>

         <div className="main-img-posters-adv">
        <img src="https://res.cloudinary.com/dxgmovaih/image/upload/v1754132522/1_rw4x45.png"/>
        </div>
    </div>
  </section>

  {/* ---------------------------------------------------------course section start-------------------------------------------------------------- */}

  <section>
  <div ref={ourCourses}>  
   <CourseSection
    contactUs ={contactUs}
   />
     </div>
  </section>

  {/*------------------------------------------------------------ Course section end ---------------------------------------------------------------*/}

{/*--------------------------------------------------------------- Contact us section-------------------------------------------------------------- */}
<div ref={contactUs}>
<ContactUs />
</div>
{/*--------------------------------------------------------------- contsct us section ends ---------------------------------------------------------*/}

{/* ----------------------------------------------------------------Footer section start ---------------------------------------------------------- */}

<div ref={footer}>
    <Footer/>
</div>

{/* ----------------------------------------------------------------Footer section end ---------------------------------------------------------- */}


  </>
  )
}

export default Hero;