import { motion } from "framer-motion";
import FramerMotion from "../FramerMotion";
const { leftVariants } = FramerMotion
function TermAndCondition() {
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

                    </div>


                    <div className="term-and-condition-content">

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



                    </div>

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



                    </div>

                    <div className="term-and-condition-content">

                        <div className="large-heading">

                            <p> 4 -  User Data Security Policy </p>

                        </div>

                        <p><b class="bold-color">4.1</b> At <b class="bold-color">SGE ACE Learning</b>, we give the highest priority to your personal data protection. Any information shared by students during registration, payment, or communication is stored on encrypted and secure servers that meet industry-grade security standards.</p>

                        <p><b class="bold-color">4.2</b> Your personal details such as name, contact number, email address, and payment credentials are used only for academic and administrative purposes. We never sell, rent, or trade your data to third-party organizations for marketing or commercial gain.</p>

                        <p><b class="bold-color">4.3</b> We have strict <b class="bold-color">access control policies</b> in place. Only authorized staff members who are required to process your admission, payment, or academic records are allowed access to your information, ensuring a “need-to-know basis” approach.</p>

                        <p><b class="bold-color">4.4</b> All online transactions and communications are safeguarded through SSL encryption and verified payment gateways. This ensures protection against data leaks, fraud, or unauthorized interception of sensitive details.</p>

                        <p><b class="bold-color">4.5</b> In the rare event of a cyber threat or data breach, <b class="bold-color">SGE ACE Learning</b> will immediately initiate corrective measures, inform concerned users as per compliance requirements, and ensure transparency while safeguarding student interests.</p>





                    </div>
                </div>
            </section>
        </>
    )
}

export default TermAndCondition;