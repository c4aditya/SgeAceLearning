import { PiFacebookLogo } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import { SlSocialTwitter } from "react-icons/sl";
import { MdOutlineCopyright } from "react-icons/md";
function Footer() {
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
                                    <li>Home</li>
                                    <li>About Us</li>
                                    <li>Contact Us </li>
                                    <li>Our Courses</li>
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
                                    <li>Presonal Reengniring Program</li>
                                    <li>Hotel Managemnt</li>
                                    <li>Airport Management </li>
                                    <li>Aviation</li>
                                    <li>Air Hostess</li>
                                    <li>Curise Ship</li>
                                </ul>
                            </div>
                        </div>


                           <div className="footer-page-section-div">
                            <div className="inside-footer-links-sub">
                                <p>SUPPORT</p>
                            </div>

                            <div className="list-links-on-footer">
                                <ul>
                                    <li>Help Center</li>
                                    <li>Connect us</li>
                                    <li>Student Feed Backs</li>
                                    
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
                            <p>Copyright <span><MdOutlineCopyright/></span>2025 SGACE Learning Traning Institute | All rights reserved</p>
                        </div>

                        <div className="copy-links">
                            <p>Trem of services | Privacy Policy  </p>
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