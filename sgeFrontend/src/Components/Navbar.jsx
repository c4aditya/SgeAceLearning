
import { PiFacebookLogo } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import { SlSocialTwitter } from "react-icons/sl";
function NavBar({aboutUs , ourCourse , contactUs , footer }) {
    return (
        <>
            <section>
                <nav>
                    
                <div className="top-nev">
                    <div className="contact-details">
                        <ul>
                            <li>info@sgeacelearnign.com</li>

                            <li> 9569300792</li>
                        </ul>
                    </div>

                    <div className="social-media-links">
                        <ul>
                            <li><PiFacebookLogo /></li>
                            <li><FaWhatsapp /></li>
                            <li><IoLogoInstagram/></li>
                            <li><CiLinkedin/></li>
                            <li><SlSocialTwitter/></li>
                        </ul>
                    </div>

                </div>
                <div className="full-width">
                    <div className="main-wrapper">
                        <div className="logo">
                            <img src="https://res.cloudinary.com/dxgmovaih/image/upload/v1754122815/cropped-Web_Photo_Editor-removebg-preview-1_tckv9x.png" />
                        </div>

                        <div className="pages">
                            <ul>
                                <li>HOME</li>
                                <li> <button onClick={()=>aboutUs.current.scrollIntoView({ behavior :"smooth"})}> ABOUT US </button> </li>
                                <li><button onClick={()=> ourCourse.current.scrollIntoView({ behavior: "smooth" })} >TRANING PROGRAM </button></li>
                                 <li><button onClick={()=> contactUs.current.scrollIntoView({ behavior: "smooth" })} >CONTACT US </button></li>
                                 <li><button onClick={()=> footer.current.scrollIntoView({ behavior: "smooth" })} >MORE INFO </button></li>
                              
                            </ul>
                        </div>

                        <div className="buttons">

                            <div className="signup-button">
                                <button>SignUp</button>
                            </div>

                            <div className="login-button">
                                <button>Login</button>
                            </div>

                        </div>
                    </div>
                </div>

                </nav>

            </section>
        </>
    )
}

export default NavBar;