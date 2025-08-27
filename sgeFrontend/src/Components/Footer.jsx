import { PiFacebookLogo } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import { SlSocialTwitter } from "react-icons/sl";
import { MdOutlineCopyright } from "react-icons/md";
import { useNavigate } from "react-router-dom";
function Footer() {
    const Navigate = useNavigate()
    return (
        <>
            <section>
                <footer>
                <div className="main-footer-section">
                    <div className="main-footer-wrapper">


                        <div className="footer-image">
                            <img src="https://res.cloudinary.com/dxgmovaih/image/upload/v1754122815/cropped-Web_Photo_Editor-removebg-preview-1_tckv9x.png" />
                        </div>

                        <div className="history-and-social-meadia-links-footer">

                            <div className="history-of-us">
                                <p>SGACE Learning Training Institute (OPC) Pvt. Ltd., established in 2020 in Kasganj, is MCA-registered and offers modern, hands-on aviation training.With experienced faculty and interactive teaching, we focus on practical learning and real-time simulations.Our mission is to prepare students for success in competitive professional environments through quality education and industry partnerships.</p>
                            </div>

                            <div className="footer-section-social-media">
                                <ul>
                                    <li><PiFacebookLogo /></li>
                                    <li><FaWhatsapp /></li>
                                    <li><IoLogoInstagram /></li>
                                    <li><CiLinkedin /></li>
                                    <li><SlSocialTwitter /></li>
                                </ul>
                            </div>
                        </div>

                        <hr className="line"></hr>

                        <div className="footer-links">

                        <div className="footer-page-section-div">
                            <div className="inside-footer-links-sub">
                                <p>COMPANY</p>
                            </div>

                            <div className="list-links-on-footer">
                                <ul>
                                    <li onClick={()=> Navigate("/")}>Home</li>
                                    <li onClick={()=> Navigate("/aboutus")}>About Us</li>
                                    <li onClick={()=>Navigate("/contactUs")}>Contact Us </li>
                                    <li onClick={()=>Navigate("/ourCourses")}>Our Courses</li>
                                    <li>Testominals</li>
                                </ul>
                            </div>
                        </div>


                           <div className="footer-page-section-div">
                            <div className="inside-footer-links-sub">
                                <p>TRAINING PROGRAM</p>
                            </div>

                            <div className="list-links-on-footer">
                                <ul>
                                    <li onClick={()=>Navigate("/ourCourses")}>Presonal Reengniring Program</li>
                                    <li onClick={()=>Navigate("/ourCourses")}>Hotel Managemnt</li>
                                    <li onClick={()=>Navigate("/ourCourses")}>Airport Management </li>
                                    <li onClick={()=>Navigate("/ourCourses")}>Aviation</li>
                                    <li onClick={()=>Navigate("/ourCourses")}>Air Hostess</li>
                                    <li onClick={()=>Navigate("/ourCourses")}>Curise Ship</li>
                                </ul>
                            </div>
                        </div>


                           <div className="footer-page-section-div">
                            <div className="inside-footer-links-sub">
                                <p>SUPPORT</p>
                            </div>

                            <div className="list-links-on-footer">
                                <ul>
                                    <li onClick={()=>Navigate("/contactUs")}>Help Center</li>
                                    <li onClick={()=>Navigate("/contactUs")}>Connect us</li>
                                    <li onClick={()=>Navigate("/aboutus")}>Student Feed Backs</li>
                                    
                                </ul>
                            </div>
                        </div>

                           <div className="footer-page-section-div">
                            <div className="inside-footer-links-sub">
                                <p>RESOURCES</p>
                            </div>

                            <div className="list-links-on-footer">
                                <ul>
                                    <li>Blogs</li>
                                    <li>Our Feets</li>
                                    <li>Aviation News</li>
                                    <li>Eventd</li>
                                </ul>
                            </div>

                            
                        </div>

                              <div className="footer-page-section-div">
                            <div className="inside-footer-links-sub">
                                <p>QUICK LINKS</p>
                            </div>

                            <div className="list-links-on-footer">
                                <ul>
                                    <li>Apply For Admission</li>
                                    <li>Courses</li>
                                    <li>Fee Structure</li>
                                    
                                </ul>
                            </div>
                        </div>

                    </div>

                      <hr className="line"></hr>

                      <div className="copy-right-sections">
                        <div className="main-copy">
                            <p>Copyright <b><MdOutlineCopyright/></b>2025 SGACE Learning Traning Institute | All rights reserved</p>
                        </div>

                        <div className="copy-links">
                            <p onClick={()=> Navigate("/termAndCondition")}> Trem of services | Privacy Policy  </p>
                        </div>
                      </div>
                    </div>
                    <hr></hr>
                    
                </div>
                </footer>
            </section>
        </>
    )
}

export default Footer;