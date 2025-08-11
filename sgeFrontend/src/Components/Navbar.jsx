
import { PiFacebookLogo } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import { SlSocialTwitter } from "react-icons/sl";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

import { useEffect } from 'react';
function NavBar({ aboutUs, ourCourse, contactUs, footer }) {




    const [hamburger, setHamburger] = useState(false);
    const [sideNavBar, setSideNavBar] = useState(false)

    function handleHamBurger() {
        console.log("The ham burger button is clicked ")
        setHamburger(!hamburger)
        setSideNavBar(!sideNavBar)
    }


    useEffect(() => {
        if (sideNavBar) {
            const scrollY = window.scrollY; // Save current scroll position
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.left = '0';
            document.body.style.right = '0';
        } else {
            const scrollY = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.left = '';
            document.body.style.right = '';
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }

        // Cleanup on unmount
        return () => {
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.left = '';
            document.body.style.right = '';
        };
    }, [sideNavBar]);


    function closeSideBar() {

        setSideNavBar(false)
        setHamburger(false)


    }



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
                                <li><IoLogoInstagram /></li>
                                <li><CiLinkedin /></li>
                                <li><SlSocialTwitter /></li>
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
                                    <li> <button onClick={() => aboutUs.current.scrollIntoView({ behavior: "smooth" })}> ABOUT US </button> </li>
                                    <li><button onClick={() => ourCourse.current.scrollIntoView({ behavior: "smooth" })} >TRANING PROGRAM </button></li>
                                    <li><button onClick={() => contactUs.current.scrollIntoView({ behavior: "smooth" })} >CONTACT US </button></li>
                                    <li><button onClick={() => footer.current.scrollIntoView({ behavior: "smooth" })} >MORE INFO </button></li>

                                </ul>
                            </div>

                            <div className="buttons">



                                <div className="signup-button">
                                    <button>SignUp</button>
                                </div>

                                <div className="login-button">
                                    <button>Login</button>
                                </div>

                                <div className="ham" onClick={handleHamBurger}>

                                    {
                                        hamburger ? (
                                            <div className="hamburger">
                                                <button>  <RxCross2 /></button>
                                            </div>)

                                            :

                                            (<div className="hamburger">
                                                <button><RxHamburgerMenu /></button>
                                            </div>)
                                    }
                                </div>

                            </div>



                        </div>
                    </div>


                    <div className="main-side-bar">
                        {
                            sideNavBar ? (

                                <div className="side-nav-bar">

                                    <div className="pages-list-side-bar">

                                        <ul>

                                        <li onClick={() => {closeSideBar();  window.scrollTo({ top: 0, behavior: "smooth" }); }}>Home</li>
                                        <li onClick={() => {closeSideBar();  aboutUs.current.scrollIntoView({ behavior: "smooth" });  }}>About us</li>
                                        <li onClick={() => {closeSideBar();  contactUs.current.scrollIntoView({ behavior: "smooth" });  }}>Contact us</li>
                                        <li onClick={() => { ourCourse.current.scrollIntoView({ behavior: "smooth" }); closeSideBar(); }}>Courses</li>
                                        <li onClick={() => { footer.current.scrollIntoView({ behavior: "smooth" }); closeSideBar(); }}>More</li>

                                        </ul>

                                    </div>

                                    <hr className="line-side-bar"></hr>

                                    <div className="side-bar-buttons ">

                                        <div className="mob-login-button s">
                                            <button>SignUp</button>
                                        </div>

                                        <div className="mob-login-button l">
                                            <button>Login</button>
                                        </div>



                                    </div>


                                    <hr className="line-side-bar"></hr>

                                    <div className="social-media-list-side-bar">

                                        <ul>
                                            <li><PiFacebookLogo /></li>
                                            <li><FaWhatsapp /></li>
                                            <li><IoLogoInstagram /></li>
                                            <li><CiLinkedin /></li>
                                            <li><SlSocialTwitter /></li>
                                        </ul>

                                    </div>
                                </div>

                            ) : (
                                null
                            )
                        }
                    </div>

                </nav>

            </section>
        </>
    )
}

export default NavBar;