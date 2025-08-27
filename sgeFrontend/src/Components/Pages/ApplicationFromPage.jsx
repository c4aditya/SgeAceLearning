import { motion } from "framer-motion";
function ApplicationForm() {
    const leftVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    };

    return (
        <>

            <section>

                <div className="top-poster-section-contact-us">


                    <motion.div
                        variants={leftVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="main-content-poster-page"
                    >


                        <div className="company-name">
                            <p>Application</p>
                        </div>

                        <div className="per-page-poster-content">
                            <p>Admission Form </p>
                        </div>

                        <div className="per-poster-para">

                            <p>Fill the form for Admission </p>
                        </div>
                    </motion.div>



                </div>

            </section>

            <section>
                <div className="addmission-form">



                    <form>
                        <div className="main-class-form">
                            <p className="heading-form">Apply Now</p>

                            <hr></hr>



                            <div className="wrapper-from">
                                <div className="input-form-for-three-input">

                                    <div className="three-feilds">

                                        <label>Full Name * </label>
                                        <input
                                            type="text"
                                            placeholder="First Name"
                                        />

                                    </div>

                                    <div className="three-feilds">

                                        <label>Father's Name * </label>
                                        <input
                                            type="text"
                                            placeholder="Middle Name"
                                        />

                                    </div>
                                </div>
                            </div>

                            <div className="wrapper-from">
                                <div className="input-form-for-three-input">

                                    <div className="three-feilds">

                                        <label>Contact * </label>
                                        <input
                                            type="numer"
                                            placeholder="First Name"
                                        />

                                    </div>

                                    <div className="three-feilds">

                                        <label>Email * </label>
                                        <input
                                            type="text"
                                            placeholder="Your @email"
                                        />

                                    </div>
                                </div>
                            </div>


                            <div className="wrapper-from">
                                <div className="input-form-for-three-input">

                                    <div className="three-feilds">

                                        <label>DOB * </label>
                                        <input
                                            type="numer"
                                            placeholder="Date of Birth"
                                        />

                                    </div>

                                    <div className="three-feilds">

                                        <label>Gender * </label>
                                        <input
                                            type="numer"
                                            placeholder="Gender"
                                        />

                                    </div>


                                </div>
                            </div>


                            <div className="wrapper-from">
                                <div className="input-form-for-three-input">

                                    <div className="three-feilds">

                                        <label>Aadhar Card No</label>
                                        <input
                                            type="numer"
                                            placeholder="Aadhar Card No. "
                                        />

                                    </div>

                                    <div className="three-feilds">

                                        <label>Pan Card</label>
                                        <input
                                            type="text"
                                            placeholder="Pan Card No. "
                                        />

                                    </div>
                                </div>
                            </div>



                            <div className="wrapper-from">
                                <div className="input-form-for-three-input">

                                    <div className="three-feilds">

                                        <label>Higest Qualification </label>
                                        <select>
                                            <option value="">Select Qualification</option>
                                            <option value="10th">10th</option>
                                            <option value="12th">12th</option>
                                            <option value="bachelors">Bachelor's</option>
                                            <option value="masters">Master's</option>
                                           
                                        </select>
                                    </div>

                                    <div className="three-feilds">

                                        <label>Gender</label>
                                        <input
                                            type="text"
                                            placeholder="Your @email"
                                        />

                                    </div>
                                </div>
                            </div>



                            <div className="wrapper-from">
                                <div className="input-form-for-three-input">

                                    <div className="three-feilds">

                                        <label>DOB</label>
                                        <input
                                            type="numer"
                                            placeholder="First Name"
                                        />

                                    </div>

                                    <div className="three-feilds">

                                        <label>Gender</label>
                                        <input
                                            type="text"
                                            placeholder="Your @email"
                                        />

                                    </div>
                                </div>
                            </div>



                            <div className="wrapper-from">
                                <div className="input-form-for-three-input">

                                    <div className="three-feilds">

                                        <label>DOB</label>
                                        <input
                                            type="numer"
                                            placeholder="First Name"
                                        />

                                    </div>

                                    <div className="three-feilds">

                                        <label>Gender</label>
                                        <input
                                            type="text"
                                            placeholder="Your @email"
                                        />

                                    </div>
                                </div>
                            </div>






                        </div>
                    </form>


                </div>
            </section>

        </>
    )
}

export default ApplicationForm;