import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRef } from "react";

function ApplicationForm() {
  const [form, setForm] = useState({
    fullName: "",
    fatherName: "",
    contact: "",
    email: "",
    dob: "",
    gender: "",
    aadhar: "",
    pan: "",
    qualification: "",
    marksheet: null,
    aadharFile: null,
    termsAccepted: false,
  });

  const leftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  function handleChange(e) {
    const { name, value, type, files, checked } = e.target;
    if (type === "file") {
      setForm((prev) => ({
        ...prev,
        [name]: files[0] || null,
      }));
    } else if (type === "checkbox") {
      setForm((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  }

  const fieldRefs = {
    fullName: useRef(null),
    fatherName: useRef(null),
    contact: useRef(null),
    email: useRef(null),
    dob: useRef(null),
    gender: useRef(null),
    qualification: useRef(null),
  };

  const [errors, setErrors] = useState({});


  function validateForm() {
    const newErrors = {};

    if (!form.fullName) newErrors.fullName = true;
    if (!form.fatherName) newErrors.fatherName = true;
    if (!form.contact) newErrors.contact = true;
    if (!form.email) newErrors.email = true;
    if (!form.dob) newErrors.dob = true;
    if (!form.gender) newErrors.gender = true;
    if (!form.qualification) newErrors.qualification = true;
    if (!form.termsAccepted) newErrors.termsAccepted = true;

    setErrors(newErrors);

    const firstErrorField = Object.keys(newErrors)[0];
    if (firstErrorField && fieldRefs[firstErrorField]) {
      fieldRefs[firstErrorField].current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }

    return Object.keys(newErrors).length === 0;
  }


  function handleSubmit(e) {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fill all required fields (*) and accept terms");
      return;
    }

    const formDataToSend = new FormData();

    for (const key in form) {
      if (key !== "marksheet" && key !== "aadharFile") {
        formDataToSend.append(key, form[key]);
      }
    }

    if (form.marksheet) formDataToSend.append("marksheet", form.marksheet);
    if (form.aadharFile) formDataToSend.append("aadharFile", form.aadharFile);

    fetch("https://api.acelearningtraining.com/api/submit-application", {
      method: "POST",
      body: formDataToSend,
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Form submitted successfully!");
        console.log(data);
        setForm({
          fullName: "",
          fatherName: "",
          contact: "",
          email: "",
          dob: "",
          gender: "",
          aadhar: "",
          pan: "",
          qualification: "",
          marksheet: null,
          aadharFile: null,
          termsAccepted: false,
        });
      })
      .catch((err) => {
        toast.error("Submission failed. Please try again.");
        console.error(err);
      });
  }

  return (
    <>
      <ToastContainer />
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
          <form onSubmit={handleSubmit}>
            <div className="main-class-form">
              <p className="heading-form">Apply Now</p>
              <hr />
              <div className="wrapper-from">
                <div className="input-form-for-three-input">
                  <div className="three-feilds">
                    <label>Full Name <span>*</span> </label>
                    <input
                      ref={fieldRefs.fullName}
                      type="text"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="First Name"
                      style={{
                        border: errors.fullName ? "2px solid red" : "",
                      }}
                    />
                  </div>
                  <div className="three-feilds">
                    <label>Father's Name <span>*</span> </label>
                    <input
                      ref={fieldRefs.fatherName}
                      type="text"
                      name="fatherName"
                      value={form.fatherName}
                      onChange={handleChange}
                      placeholder="Father's Name"
                        style={{
                        border: errors.fatherName ? "2px solid red" : "",
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="wrapper-from">
                <div className="input-form-for-three-input">
                  <div className="three-feilds">
                    <label>Contact <span>*</span></label>
                    <input
                      ref={fieldRefs.contact}
                      type="text"
                      name="contact"
                      value={form.contact}
                      onChange={handleChange}
                      placeholder="Contact Number"
                        style={{
                        border: errors.contact ? "2px solid red" : "",
                      }}
                    />
                  </div>
                  <div className="three-feilds">
                    <label>Email <span>*</span> </label>
                    <input
                      ref={fieldRefs.email}
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Your @email"
                        style={{
                        border: errors.email ? "2px solid red" : "",
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="wrapper-from">
                <div className="input-form-for-three-input">
                  <div className="three-feilds">
                    <label>DOB <span>*</span></label>
                    <input
                      ref={fieldRefs.dob}
                      type="date"
                      name="dob"
                      value={form.dob}
                      onChange={handleChange}
                        style={{
                        border: errors.dob ? "2px solid red" : "",
                      }}
                    />
                  </div>
                  <div className="three-feilds">
                    <label>Gender <span>*</span></label>
                    <select
                      ref={fieldRefs.gender}
                      name="gender"
                      value={form.gender}
                      onChange={handleChange}
                        style={{
                        border: errors.gender ? "2px solid red" : "",
                      }}
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="wrapper-from">
                <div className="input-form-for-three-input">
                  <div className="three-feilds">
                    <label>Aadhar Card No <span>*</span></label>
                    <input
                      type="text"
                      name="aadhar"
                      value={form.aadhar}
                      onChange={handleChange}
                      placeholder="Aadhar Card No."
                        style={{
                        border: errors.aadhar ? "2px solid red" : "",
                      }}
                    />
                  </div>
                  <div className="three-feilds">
                    <label>Pan Card <span>*</span></label>
                    <input
                      type="text"
                      name="pan"
                      value={form.pan}
                      onChange={handleChange}
                      placeholder="Pan Card No."
                        style={{
                        border: errors.pan ? "2px solid red" : "",
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="wrapper-from">
                <div className="input-form-for-three-input">
                  <div className="three-feilds">
                    <label>Highest Qualification <span>*</span></label>
                    <select
                      name="qualification"
                      value={form.qualification}
                      onChange={handleChange}
                        style={{
                        border: errors.qualification ? "2px solid red" : "",
                      }}
                    >
                      <option value="">Select Qualification</option>
                      <option value="10th">10th</option>
                      <option value="12th">12th</option>
                      <option value="bachelors">Bachelor&apos;s</option>
                      <option value="masters">Master&apos;s</option>
                    </select>
                  </div>
                  <div className="three-feilds">
                    <label>Highest Qualification Marksheet <span>*</span></label>
                    <input
                      type="file"
                      name="marksheet"
                      onChange={handleChange}
                      
                    />
                  </div>
                </div>
              </div>

              <div className="wrapper-from">
                <div className="input-form-for-three-input">
                  <div className="three-feilds">
                    <label>Aadhar Card <span>*</span></label>
                    <input
                      type="file"
                      name="aadharFile"
                      onChange={handleChange}
                       
                    />
                  </div>
                </div>
              </div>

              <div className="wrapper-fro">
                <div className="check-box-recived">
                  <input
                    type="checkbox"
                    name="termsAccepted"
                    checked={form.termsAccepted}
                    onChange={handleChange}
                     
                  />
                  <label>
                    I agree to the terms and conditions and declare that the name, date of birth, address and other information given by me in the online admission form is correct to the best of my knowledge and belief. Which I declare to be truely correct. If the above information is found incomplete or incorrect, my candidature is liable to be terminated at any time
                  </label>
                </div>
              </div>

              <div className="buttons-form">
                <button className="subit-button" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default ApplicationForm;
