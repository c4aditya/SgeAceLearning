import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  function validateForm() {
    if (
      !form.fullName ||
      !form.fatherName ||
      !form.contact ||
      !form.email ||
      !form.dob ||
      !form.gender ||
      !form.termsAccepted
    ) {
      return false;
    }
    return true;
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
                    <label>Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="First Name"
                    />
                  </div>
                  <div className="three-feilds">
                    <label>Father's Name *</label>
                    <input
                      type="text"
                      name="fatherName"
                      value={form.fatherName}
                      onChange={handleChange}
                      placeholder="Father's Name"
                    />
                  </div>
                </div>
              </div>

              <div className="wrapper-from">
                <div className="input-form-for-three-input">
                  <div className="three-feilds">
                    <label>Contact *</label>
                    <input
                      type="text"
                      name="contact"
                      value={form.contact}
                      onChange={handleChange}
                      placeholder="Contact Number"
                    />
                  </div>
                  <div className="three-feilds">
                    <label>Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Your @email"
                    />
                  </div>
                </div>
              </div>

              <div className="wrapper-from">
                <div className="input-form-for-three-input">
                  <div className="three-feilds">
                    <label>DOB *</label>
                    <input
                      type="date"
                      name="dob"
                      value={form.dob}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="three-feilds">
                    <label>Gender *</label>
                    <select
                      name="gender"
                      value={form.gender}
                      onChange={handleChange}
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
                    <label>Aadhar Card No</label>
                    <input
                      type="text"
                      name="aadhar"
                      value={form.aadhar}
                      onChange={handleChange}
                      placeholder="Aadhar Card No."
                    />
                  </div>
                  <div className="three-feilds">
                    <label>Pan Card</label>
                    <input
                      type="text"
                      name="pan"
                      value={form.pan}
                      onChange={handleChange}
                      placeholder="Pan Card No."
                    />
                  </div>
                </div>
              </div>

              <div className="wrapper-from">
                <div className="input-form-for-three-input">
                  <div className="three-feilds">
                    <label>Highest Qualification</label>
                    <select
                      name="qualification"
                      value={form.qualification}
                      onChange={handleChange}
                    >
                      <option value="">Select Qualification</option>
                      <option value="10th">10th</option>
                      <option value="12th">12th</option>
                      <option value="bachelors">Bachelor&apos;s</option>
                      <option value="masters">Master&apos;s</option>
                    </select>
                  </div>
                  <div className="three-feilds">
                    <label>Highest Qualification Marksheet *</label>
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
                    <label>Aadhar Card *</label>
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
                    I have read all the terms and condition before filling the
                    form
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
