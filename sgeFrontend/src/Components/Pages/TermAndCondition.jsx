import { motion } from "framer-motion";
import FramerMotion from "../FramerMotion";
const { leftVariants } = FramerMotion
function TermAndCondition() {

    const termsAndConditionsCardsContent = [
        {
            id: 1,
            message: " 1 - Sge Ace Learning is an educational institute and does not give any job guarantee and/or job orientation to the students.",

        },
        {
            id: 2,
            message: "2 - The fees paid by the students to the Institute for any course are non-refundable and non-transferable under any circumstances whatsoever."
        },
        {
            id: 3,
            message: "3 - The fees can be paid either in lump sum or in installments. Provided however that in case of payment through E.M.I, the 1st installment should be paid before the commencement of Training and the remaining installments, are to be paid by A/C payee Post-Dated Cheques payable in favour of the Institute, at the time of admission itself."
        },
        {
            id: 4,
            message: "4 - The student opting for the payment of fees for any course through installments, affirms and undertakes to pay the full fees without fail even if, for any reason, the student discontinues with the training course in mid-way. If any student leaves the training in the middle of the course, that seat would remain vacant for the rest of the academic session, which adversely affects the financial position of the Institute."
        },
        {
            id: 4,
            message: "5 - The Institute shall only present the Post-Dated Cheques on the due dates of the installments of the fees. In the event of dishonor of Post-Dated Cheque provided by the student and/or their guardians/parents, the cheque bouncing charges shall be borne by the student and/or their guardians/parents. The failure to pay the fees by due date by the student shall result in imposition of 18% interest on the outstanding amount from the due date till realization."
        },
        {
            id: 5,
            message: "6 - The Institute may pursue legal proceedings in relation to non-payment of fees by the student and/or their guardians/parents including but not limited to the proceedings under the provisions of the Negotiable Instruments Act, 1881."
        },
        {
            id: 6,
            message: "7 - Any concern raised by the parents that the admission counsellors or somebody at the branch / centre or customer care did not inform/guide about the courses and/or about the terms & conditions properly, shall not be entertained by the Institute. It is also an equal responsibility of the parents / guardians of the students to read the terms & conditions thoroughly to enable them to take independent admission decision before making any payment of the fee for admission. The parents / students are free to ask any question or doubts before the admission process. Please be informed that post admission, this kind of complaint or representation shall not be entertained by the Institute nor can be used as an excuse for refund or additional discount."
        },
        {
            id: 7,
            message: "8 - The Institute also reserves the right to exclude the student from the Institute for disciplinary offences, for non-payment of fee, or for inadequate attendance or performance, in line with the relevant Institute’s policies and procedures."
        },
        {
            id: 8,
            message: "9 - In case the student is not satisfied with the quality and transmission of the classes, the student shall complain about the same with the management of the Institute and such problem will be rectified with immediate effect."
        },
        {
            id: 9,
            message: "10 -The Batch transfer is not permitted. In special cases, if allowed the student will be required to pay the requisite transfer fees to the Institute."
        },
        {
            id: 10,
            message: "11 -The Institute reserves the right to make any changes and/or amendments to terms and condition of admission at anytime without any prior notice. In addition, the Institute reserves the right to change the curriculum, course structure and the rules relating to admissions, fee structure, practical and examinations. The details may be modified from time to time for academic, regulatory and operational reasons. The students will be governed by the latest regulations applicable to them during the relevant batch / course."
        },
        {
            id: 11,
            message: "12 - The students are required to inform the Institute about any change in his/her contact details including permanent address/ temporary address/ PG address, mobile number and email-id at any point of time in order to update the records of the Institute."
        },
        {
            id: 12,
            message: "13 - The Institute may make mandatory submission of any certificate or education documents before or at the time of the admission or afterwards, for the purpose of admission or otherwise, as decided by the Institute."
        },
        {
            id: 13,
            message: "14 - The student undertake/ certify that the documents submitted by him/her are original/ genuine and not fake to the best of his/her knowledge. If found otherwise, the fee of the student shall be forfeited and separate legal action would be taken by the Institute under the relevant provisions of law before the appropriate court of jurisdiction."
        },
        {
            id: 14,
            message: "15 - The Institute reserves the right to cancel the admission of the student if he/she fails to submit the relevant documents or otherwise with the Institute."
        },
        {
            id: 15,
            message: "16 - The Institute will charge the appropriate fee for various facilities like reappear / backlog etc. as decided from time to time and the student shall be liable to pay the same without any objection and protest."
        },
        {
            id: 16,
            message: "17 - The students should keep himself/ herself well versed with the updates in the Institute through our notice boards / website. The Institute is not responsible for any individual intimation of information."
        },
        {
            id: 17,
            message: "18 - Our courses are for the educational enrichment, enhancing knowledge and professional developments, the Institute provide job assistance to our students if their basic qualification meets eligibility criteria, it means you must have strong basic qualifications, so these courses will give you additional weightage, it could not be considered as Job Guarantee or Assured Placement."

        },
        {
            id: 17,
            message: "19 - It is clearly understood and agreed that the Institute shall own and retain all right, title and interest in and to any Intellectual Property Rights created or developed by the Institute in teaching material, lectures, practical lessons etc. Nothing contained herein shall assign or transfer in any manner whatsoever, any of the rights, title, interest in Intellectual Property Rights of Institute and its affiliates to the other Party."
        },
        {
            id: 18,
            message: " 20 - All our Courses, Study Material and Contents with regard to the learning industry are for educational and informational purposes only. The Institute and its team will not be responsible for their misuse, the User will be solely responsible for misuse of the education, information, knowledge and tools or any other content."
        },
        {
            id: 19,
            message: " 21- The Institute shall not be liable for failure to perform any obligations under these terms and conditions if such failure is caused by any act or event beyond the Institute's reasonable control including acts of God, war, terrorism, industrial disputes (including disputes involving the Institute's employees), fire, flood, storm and national emergencies. If the Institute is the subject of a Force Majeure Event, it will take all reasonable steps to minimise the disruption to student studies."
        },
        {
            id: 20,
            message: "22 - It is further understood that in case of lockdown due to pandemic or for any reason on the account of which classes can't be held, no refund shall be given to any student/parent/guardian in such case. However, classes may not be conducted in any mode (offline and/or online), if running of the classes is prohibited as per the applicable laws, guidelines, regulations, during such period of Force Majeure event. No refund shall be made to any student/parent/guardian in this respect also."
        },
        {
            id: 21,
            message: "23 - A student agrees to indemnify, defend and hold the Institute harmless from and against any and all loss, damage, liability and expense (including reasonable attorneys’ fees and costs) arising out of any third party claim, action or proceeding based directly or indirectly on the acts of omission or commission by the member or his/her agents, the breach or alleged breach or failure to comply with any applicable laws or regulations, concerning the practice of profession."
        },
        {
            id: 22,
            message: "24 - The liability of the Institute towards the students is limited only to the extent of the Fees paid by them. The Institute shall also not be liable to the students for punitive, exemplary, special, indirect, or consequential damages, including without limitation, lost profits."
        },
        {
            id: 23,
            message: "25 - Each of the provisions of these terms and conditions shall be separate and severable. Should any provision be invalid or unenforceable, it shall be severed from the terms and conditions, and the remaining provisions of these terms and conditions shall continue in full force and effect and be amended so far as possible to give valid effect to the intentions of the parties under the severed provision."
        },
        {
            id: 24,
            message: "26 - If any part of these terms and conditions is determined to be invalid or unenforceable pursuant to applicable law including, but not limited to, the warranty disclaimers and liability limitations set forth hereinabove, then the invalid or unenforceable provision will be deemed superseded by a valid, enforceable provision that most closely matches the intent of the original provision and the remainder of the terms and conditions shall continue in effect."
        },
        {
            id: 25,
            message: "27 - The failure to exercise or delay in exercising any right or remedy under these Terms and Conditions shall not constitute a waiver of the right or remedy or a waiver of any other rights or remedies under these terms and conditions or at law. A waiver by the Institute of any terms or conditions in any instance should not be considered to be a waiver of any term or condition for the future or of any subsequent breach."
        },
        {
            id: 26,
            message: "28 - The courts of Noida/Gautam Budh Nagar shall have the jurisdiction over the dispute that may arise between the Institute and the students and their guardians/parents/authorized representatives."
        }
    ]
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
                            <p>Conditions</p>
                        </div>

                        <div className="per-page-poster-content">
                            <p>Terms & Conditions</p>
                        </div>


                    </motion.div>



                </div>

            </section>

            <section>
                <div className="trem-and-condition-main">

                    <div className="term-and-condition-content">

                        <div className="large-heading">

                            <p> 1 - Terms And Conditions</p>

                        </div>

                        <p>
                            Welcome to <bold className="bold-color"> SG ACE Learning. </bold>  We sincerely appreciate your interest in our platform. Before purchasing or accessing any of our online courses, please take a moment to review the following terms and conditions, as your use of our website and services indicates your agreement to them.


                        </p>

                        <p>By enrolling in a course through a computer, mobile phone, tablet, or any other electronic device, you confirm that you have carefully read, understood, and accepted these terms and conditions.</p>

                        <p>These terms, along with our associated policies, are legally binding on you under the provisions of the Information Technology Act, 2000 and the Information Technology (Intermediaries Guidelines) Rules, 2011.

                        </p>

                        <div className="main-card-termsAndConditions">
                            <div className="cards">
                                {
                                    termsAndConditionsCardsContent.map((items) => (
                                        <div className="main-cards-inside">
                                            <p>{items.message}</p>
                                        </div>
                                    ))
                                }


                            </div>
                        </div>

                    </div>


                    {/* <div className="term-and-condition-content">

                        <div className="large-heading">

                            <p> 2 -  Orders, Payments and Delivery</p>

                        </div>

                        <p> <bold className="bold-color">2.1 </bold> Once you complete your purchase, you will receive the course access link via email within 24 hours of payment confirmation. In the rare case of any delays or issues, you can always reach us at <bold className="bold-color"> info@acelearningtraining.com.</bold></p>

                        <p> <bold className="bold-color">2.2 </bold> All purchased courses come with lifetime access, enabling you to learn at your own pace without any expiration date.</p>

                        <p> <bold className="bold-color">2.3 </bold> You may revisit and review the course content an unlimited number of times, whenever required.</p>

                        <p> <bold className="bold-color">2.4 </bold> Certain recorded courses include a weekly one-on-one interaction with expert tutors, for which prior scheduling details will be shared with you.</p>

                        <p> <bold className="bold-color">2.5 </bold> Access to live sessions or doubt-clearing sessions, if included in your course package, will be notified to you via email or dashboard notifications.</p>

                        <p> <bold className="bold-color">2.6 </bold> Course access is strictly for individual use only. Sharing login credentials or redistributing course materials to others is not permitted and may lead to suspension of your account without refund.</p>

                        <p> <bold className="bold-color">2.7 </bold> All course videos, documents, study guides, and resources remain the intellectual property of SG ACE Learning and must not be copied, reproduced, or used for commercial purposes without prior written consent.</p>

                        <p> <bold className="bold-color">2.8 </bold> Any technical issues related to course access, video playback, or account login must be reported to us at info@acelearningtraining.com. Our support team will assist you within standard response timelines.</p>

                        <p> <bold className="bold-color">2.9 </bold> Course fees once paid are generally non-refundable, unless otherwise specified under a promotional guarantee or special refund policy clearly indicated at the time of purchase.</p>

                        <p> <bold className="bold-color">2.10 </bold> SG ACE Learning reserves the right to update, modify, or enhance the course content to keep it relevant and up to date with industry standards. Learners will be notified of such updates.</p>

                        <p> <bold className="bold-color">2.11 </bold>  Any misuse of the course platform, such as attempts to hack, misuse, or distribute unauthorized copies of study material, will lead to immediate termination of access without any refund and may also lead to legal action.</p>

                        <p> <bold className="bold-color">2.12</bold>  By enrolling in the course, learners acknowledge that the primary responsibility for completing the learning modules, practicing assignments, and engaging with the materials lies with them. The platform provides guidance and resources but does not guarantee results unless active participation is ensured</p>

                        <p> <bold className="bold-color">2.13 </bold>  Communication related to assignments, tutor interactions, and updates will primarily take place through the registered email ID used at the time of purchase. It is the learner’s responsibility to ensure they check and maintain access to that email address.</p>



                    </div> */}
                    {/* 
                    <div className="term-and-condition-content">

                        <div className="large-heading">

                            <p> 3 -  Return Policy </p>

                        </div>

                        <p><b class="bold-color">3.1</b> At <b class="bold-color">SG ACE Learning</b>, all course fees are strictly <b class="bold-color">non-refundable</b> due to the immediate access provided to digital content after purchase. Once paid, the fee cannot be reversed under any circumstances.</p>

                        <p><b class="bold-color">3.2</b> All course fees are <b class="bold-color">non-transferable</b>. Payments made for one course cannot be shifted to another course, batch, or student.</p>

                        <p><b class="bold-color">3.3</b> Students must carefully review all course details, features, and terms prior to enrollment. Refund claims made on the grounds of lack of awareness or misinterpretation will not be accepted.</p>

                        <p><b class="bold-color">3.4</b> No refunds will be processed if a student chooses to discontinue a course due to personal reasons such as relocation, change of job, health concerns, or lack of available time.</p>

                        <p><b class="bold-color">3.5</b> If a student is dissatisfied with the course, they may share their concerns with us at <a href="mailto:info@acelearningtraining.com">info@acelearningtraining.com</a>. While refunds are not eligible, our team will take steps to address concerns or provide alternative solutions where feasible.</p>

                        <p><b class="bold-color">3.6</b> Students making payments through <b class="bold-color">installments or EMIs</b> are obligated to clear all installments as per the agreed schedule. Failure to complete installments will not entitle a student to claim a refund for any portion already paid.</p>

                        <p><b class="bold-color">3.7</b> Any dishonored cheque or failed EMI transaction will result in additional penalties and bank charges, which must be borne entirely by the student or their guardian.</p>

                        <p><b class="bold-color">3.8</b> Delays in installment payments will result in an <b class="bold-color">18% annual interest</b> applied to the outstanding balance, calculated from the due date until full payment is made.</p>

                        <p><b class="bold-color">3.9</b> If a student fails to clear outstanding payments within the specified time, the Institute reserves the right to suspend or terminate their access to the course without any eligibility for refund.</p>

                        <p><b class="bold-color">3.10</b> Discounts, fee waivers, or promotional schemes applied during admission are <b class="bold-color">non-refundable</b>. If the student withdraws midway, these benefits automatically lapse without claim.</p>

                        <p><b class="bold-color">3.11</b> No refunds will be provided if classes are disrupted or postponed due to <b class="bold-color">Force Majeure events</b> such as natural disasters, pandemics, government restrictions, strikes, floods, or wars. Alternate arrangements may be considered at the Institute’s discretion.</p>

                        <p><b class="bold-color">3.12</b> If a student voluntarily withdraws enrollment, the paid fee will not be refunded, nor will it be adjusted against future enrollments or other courses.</p>

                        <p><b class="bold-color">3.13</b> The Institute shall not issue refunds for failure in course performance, exams, or non-completion of assignments. Academic success is the sole responsibility of the student.</p>

                        <p><b class="bold-color">3.14</b> Refunds will also not apply in cases of disciplinary action taken against a student for misconduct, violation of Institute rules, breach of terms, or misuse of resources.</p>

                        <p><b class="bold-color">3.15</b> The Institute’s maximum financial liability remains limited strictly to the total course fee paid by the student. No claims for consequential damages, loss of opportunity, or any indirect compensation will be entertained under this Return Policy.</p>



                    </div> */}

                    {/* <div className="term-and-condition-content">

                        <div className="large-heading">

                            <p> 3 -  User Data Security Policy </p>

                        </div>

                        <p><b class="bold-color">4.1</b> At <b class="bold-color">SGE ACE Learning</b>, we give the highest priority to your personal data protection. Any information shared by students during registration, payment, or communication is stored on encrypted and secure servers that meet industry-grade security standards.</p>

                        <p><b class="bold-color">4.2</b> Your personal details such as name, contact number, email address, and payment credentials are used only for academic and administrative purposes. We never sell, rent, or trade your data to third-party organizations for marketing or commercial gain.</p>

                        <p><b class="bold-color">4.3</b> We have strict <b class="bold-color">access control policies</b> in place. Only authorized staff members who are required to process your admission, payment, or academic records are allowed access to your information, ensuring a “need-to-know basis” approach.</p>

                        <p><b class="bold-color">4.4</b> All online transactions and communications are safeguarded through SSL encryption and verified payment gateways. This ensures protection against data leaks, fraud, or unauthorized interception of sensitive details.</p>

                        <p><b class="bold-color">4.5</b> In the rare event of a cyber threat or data breach, <b class="bold-color">SGE ACE Learning</b> will immediately initiate corrective measures, inform concerned users as per compliance requirements, and ensure transparency while safeguarding student interests.</p>





                    </div> */}

                    <div className="footer-upper-cards">
                        <div className="term-and-condition-content">
                            <div className="large-heading">

                                <p> 2 - User Eligibility
                                </p>

                            </div>

                            <div className="parat-text">
                                <p>Enrollment and access to Sge Ace Learning Institute courses are available only to individuals who meet the age and eligibility criteria specified for each program. By registering, learners confirm that they satisfy all requirements and possess the necessary skills and background to participate effectively. The institute reserves the right to deny enrollment or revoke access if eligibility criteria are not met or if false information is provided during registration. This ensures a safe and productive learning environment for all participants.</p>
                            </div>
                        </div>
                    </div>

                    <div className="footer-upper-cards">
                        <div className="term-and-condition-content">
                            <div className="large-heading">

                                <p> 3 - Intellectual Property
                                </p>

                            </div>

                            <div className="parat-text">
                                <p>All course materials, content, software, and resources provided by Sge Ace Learning Institute are the exclusive property of the institute. Learners are strictly prohibited from copying, distributing, reproducing, or using any materials for commercial purposes without prior written consent. Intellectual property includes, but is not limited to, video lectures, study materials, assessments, presentations, and branding. Respecting these rights ensures that the quality and integrity of our programs are maintained.</p>
                            </div>
                        </div>
                    </div>

                      <div className="footer-upper-cards">
                        <div className="term-and-condition-content">
                            <div className="large-heading">

                                <p> 4 - Code of Conduct
                                </p>

                            </div>

                            <div className="parat-text">
                                <p>Students are expected to maintain respectful and professional behavior in all interactions within Sge Ace Learning Institute’s platforms, including online forums, live recorded sessions, and communications with faculty or peers. Harassment, disruptive behavior, plagiarism, or misuse of resources is strictly prohibited and may result in suspension or permanent termination of access. Adherence to this code promotes a positive, inclusive, and productive learning environment for all participants.</p>
                            </div>
                        </div>
                    </div>

                       <div className="footer-upper-cards">
                        <div className="term-and-condition-content">
                            <div className="large-heading">

                                <p> 5 - Access to Materials

                                </p>

                            </div>

                            <div className="parat-text">
                                <p>Course materials and resources are provided digitally or physically, as applicable, and access is granted immediately upon enrollment. These materials are intended solely for personal learning purposes and must not be shared, reproduced, or distributed to third parties. Learners are responsible for safeguarding access credentials and ensuring that resources are used ethically. The institute may revoke access if these terms are violated.</p>
                            </div>
                        </div>
                    </div>

                        <div className="footer-upper-cards">
                        <div className="term-and-condition-content">
                            <div className="large-heading">

                                <p> 6 - Privacy and Data Protection

                                </p>

                            </div>

                            <div className="parat-text">
                          <p>Sge Ace Learning Institute collects and stores personal information for administrative, academic, and communication purposes only. All data is handled securely in accordance with applicable laws and industry standards. Personal information will not be shared with third parties without consent, except as required by law or necessary to provide educational services. Learners are encouraged to review the institute’s privacy practices and report any concerns regarding data security.</p>
                            </div>
                        </div>
                    </div>

                        <div className="footer-upper-cards">
                        <div className="term-and-condition-content">
                            <div className="large-heading">

                                <p> 7 - Governing Law


                                </p>

                            </div>

                            <div className="parat-text">
                        <p>These Terms and Conditions are governed by the laws of India. Any disputes, claims, or disagreements arising from enrollment, course access, use of services, or interpretation of these terms shall be subject to the exclusive jurisdiction of competent courts in India. By enrolling, learners agree to comply with applicable laws and regulations and acknowledge that any legal proceedings will be conducted within the Indian legal framework.</p>
                            </div>
                        </div>
                    </div>

                      <div className="footer-upper-cards">
                        <div className="term-and-condition-content">
                            <div className="large-heading">

                                <p> 8 - Governing Law


                                </p>

                            </div>

                            <div className="parat-text">
                        <p>These Terms and Conditions are governed by the laws of India. Any disputes, claims, or disagreements arising from enrollment, course access, use of services, or interpretation of these terms shall be subject to the exclusive jurisdiction of competent courts in India. By enrolling, learners agree to comply with applicable laws and regulations and acknowledge that any legal proceedings will be conducted within the Indian legal framework.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TermAndCondition;