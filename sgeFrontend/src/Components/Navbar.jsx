
import { PiFacebookLogo } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import { SlSocialTwitter } from "react-icons/sl";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { IoStar } from "react-icons/io5";
import FramerMotion from "./FramerMotion";
const { rightVariants } = FramerMotion;

function NavBar() {



    const Nevigate = useNavigate();
    const [hamburger, setHamburger] = useState(false);
    const [sideNavBar, setSideNavBar] = useState(false);
    const [counclerFrom, setCounclerFrom] = useState(false);

    function handleHamBurger() {
        console.log("The ham burger button is clicked ")
        setHamburger(!hamburger)
        setSideNavBar(!sideNavBar)
    }

    function handletoggleCouncler() {
        console.log("The Councler button is clicked ")
        setCounclerFrom(!counclerFrom)

    }

    // when form is open then background color will change for whole body 

    useEffect(() => {
        if (counclerFrom == true) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [counclerFrom]);




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
                                <li>admission@acelearningtraining.com</li>

                                <li> +91 9910926523 </li>
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
                                    <li><button onClick={() => Nevigate("/")}> HOME </button></li>
                                    <li> <button onClick={() => Nevigate("/aboutus")}> ABOUT US </button> </li>
                                    <li><button onClick={() => Nevigate("/ourCourses")} >TRANING PROGRAM </button></li>
                                    <li><button onClick={() => Nevigate("/contactUs")} >CONTACT US </button></li>
                                    <li><button onClick={() => Nevigate("/termAndCondition")}> TERMS AND CONDITIONS </button></li>

                                </ul>
                            </div>

                            <div className="buttons">

                                <div className="login-button">
                                    <button onClick={handletoggleCouncler}>Start Learning</button>
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

                                            <li onClick={() => { Nevigate("/") , closeSideBar() }}>Home</li>
                                            <li onClick={() => { Nevigate("/aboutus") , closeSideBar() }}>About us</li>
                                            <li onClick={() => { Nevigate("/ourCourses") , closeSideBar() }}>Training Program</li>
                                            <li onClick={() => { Nevigate("/contactUs"), closeSideBar()}}>Contact us</li>
                                            <li onClick={() => { closeSideBar(); }}>Terms and conditions</li>

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

            {counclerFrom && <div className="blur-overlay"></div>}

            <section>



                <div className="main-councler-from-section">
                    {counclerFrom && (
                        <div className="counclerForm">
                            <div className="councler-form-content">
                                
                                <ul>
                                    <li><span><IoStar /></span> Curriculum designed by industry leaders for maximum impact.</li>
                                    <li><span><IoStar /></span> Master skills through interactive and immersive learning.</li>
                                    <li><span><IoStar /></span> Access to exclusive project-based assignments.</li>
                                    <li><span><IoStar /></span> Personalized mentorship and career guidance.</li>
                                    <li><span><IoStar /></span> Flexible learning schedule to suit your pace.</li>
                                </ul>
                            </div>

                            <div className="main-councler-from">
                                <div className="heading-concler-form">
                                    <p className="h">Let's Talk </p>
                                </div>

                                

                                <div className="from-councler-form" >

                                    <form>

                                         <label>Full Name </label>
                                        <input type="text" placeholder="Name"></input>

                                          <label>Email </label>
                                        <input type="email" placeholder="Your @email"></input>


                                        <label>Contact Number </label>
                                        <input type="number" placeholder="+91"></input>

                                        <button className="conculer-submit">Request for call back </button>

                                    </form>



                                </div>

                            </div>

                            <div className="cross">
                                <button onClick={() => setCounclerFrom(false)}> X </button>
                            </div>
                        </div>
                    )}
                </div>

            </section>
        </>
    )
}

export default NavBar;