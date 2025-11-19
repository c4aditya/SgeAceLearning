import { motion } from "framer-motion";
import { useState } from "react";

export default function CertificatePage() {
  const leftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const [form, setForm] = useState({
    name: "",
    father: "",
    enrollment: "",
    email: "",
    contact: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitted!\n" + JSON.stringify(form, null, 2));
  };

  return (
    <>
      <style>
        {`
        .form-section {
            max-width: 90%;
            margin: 40px auto;
            background: #fff;
            border-radius: 14px;
            padding: 32px 24px 24px 24px;
            box-shadow: 0 2px 12px rgba(0,0,0,0.06);
        }
        .form-title {
            text-align: center;
            font-size: 2.2rem;
            font-weight: 700;
            color: #822727;
            letter-spacing: 1px;
            margin-bottom: 16px;
        }
        .certificate-form-label {
            font-size: 1rem;
            font-weight: 600;
            margin-bottom: 6px;
            display: block;
            color:black;
        }
        .certificate-form-input {
            width: 100%;
            padding: 12px 10px;
            border: 1px solid #d8d8d8;
            border-radius: 7px;
            margin-bottom: 15px;
            font-size: 1rem;
        }
        .certificate-form-button {
            display: block;
            background: #822727;
            color: #fff;
            padding: 12px 0;
            width: 180px;
            border: none;
            border-radius: 7px;
            font-size: 1.08rem;
            font-weight: 600;
            cursor: pointer;
            margin: 20px auto 0;
            transition: background 0.18s;
        }
        .certificate-form-button:hover, .certificate-form-button:focus {
            background: #612020;
        }
        @media (max-width: 600px) {
            .form-section {
                padding: 16px 6px 14px 6px;
            }
            .form-title {
                font-size: 1.3rem;
            }
        }
        `}
      </style>
      <section>
        <div className="top-poster-section">
          <motion.div
            variants={leftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="main-content-poster-page"
          >
            <div className="per-page-poster-content">
              <p>Certificate</p>
            </div>
          </motion.div>
          </div>

          {/* The FORM is outside the motion.div */}
          <div className="form-section">
            <div className="form-title">REQUEST FOR CERTIFICATE</div>
            <form className="certificate-form" onSubmit={handleSubmit}>
              <label className="certificate-form-label" htmlFor="name">
                Name<span style={{ color: "#a42626" }}>*</span>
              </label>
              <input
                className="certificate-form-input"
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
                required
              />

              <label className="certificate-form-label" htmlFor="father">
                Father's Name<span style={{ color: "#a42626" }}>*</span>
              </label>
              <input
                className="certificate-form-input"
                type="text"
                id="father"
                name="father"
                placeholder="Enter your father's name"
                value={form.father}
                onChange={handleChange}
                required
              />

              <label className="certificate-form-label" htmlFor="enrollment">
                Enrollment Number<span style={{ color: "#634f4fff" }}>*</span>
              </label>
              <input
                className="certificate-form-input"
                type="text"
                id="enrollment"
                name="enrollment"
                placeholder="Enter your enrollment number"
                value={form.enrollment}
                onChange={handleChange}
                required
              />

              <label className="certificate-form-label" htmlFor="email">
                Email<span style={{ color: "#a42626" }}>*</span>
              </label>
              <input
                className="certificate-form-input"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                required
              />

              <label className="certificate-form-label" htmlFor="contact">
                Contact Number<span style={{ color: "#a42626" }}>*</span>
              </label>
              <input
                className="certificate-form-input"
                type="text"
                id="contact"
                name="contact"
                placeholder="Enter your contact number"
                value={form.contact}
                onChange={handleChange}
                required
              />
     <p>
                Note*: Once we receive all these details, you'll get a confirmation email with the requested details. We
                will take up to 5 days to fulfill your request, and you'll receive your Certificate via Email.
              </p>
              <button className="certificate-form-button" type="submit">
                Submit
              </button>
            </form>
          </div>

          <div className="main-certificate-image">
            <div className="main-image">

            <img 
            src="https://www.botwaviation.com/assets/certificateex-DmVCaxyp.jpeg"
            />
             </div>

             <div className="main-image">
                         
            <img 
            src="https://www.botwaviation.com/assets/certificateex-DmVCaxyp.jpeg"
            />
             </div>

             <div className="main-image">
                         
            <img 
            src="https://www.botwaviation.com/assets/certificateex-DmVCaxyp.jpeg"
            />
             </div>
          </div>

        
      </section>
    </>
  );
}
