import React, { useState, useEffect } from 'react'
// Conatct CSS
import "./BlogPage.css"
import "../../App.css"
// Images
import img1 from '../Pics/logo2.png'
import img2 from '../Pics/menu2.png'
import logo from '../Pics/logo2.png'

export default function BlogPage3_V() {
    // Some JS Logic
    // ---------------------------------------------
    // 1 - Function
    const [sliderMenuVisible, setSliderMenuVisible] = useState(false);
    const toggleSliderMenu = () => {
        setSliderMenuVisible(!sliderMenuVisible);
    };
    // ---------------------------------------------
    // Main Body
    return (
        <div id="MainBody">
            {/* -------  0 - Previous Navbar ------- */}
            <div id="first">
                <div className="container-fluid" id="sub_first">
                    <div className="row" id="sub_sub_first">
                        <div id="fir_1">
                            <div id="fir_1_img">
                                <img src={img1} alt="" />
                            </div>
                        </div>
                        <div id="fir_2">
                            <div id="fir_2_sub">
                                <a href="#" id="fir_2_s">Home</a>
                                <a href="#" id="fir_2_s">About</a>
                                <a href="#" id="fir_2_s">Blogs</a>
                                <a href="#" id="fir_2_s">Contact</a>
                            </div>
                        </div>
                        <div id="fir_3">
                            <a href="#" id="fir_3_1">
                                {/* Shining Color Button */}
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                JOIN
                            </a>
                        </div>
                        {/* Menu Option Button */}
                        <div id="fir_4">
                            <div id="sub_fir_4">
                                <img src={img2} alt="" id="fir_4_img" onClick={toggleSliderMenu} />
                            </div>
                        </div>
                        {/* Slider Menu */}
                        <div id="fir_5" style={{ display: sliderMenuVisible ? 'block' : 'none', backgroundColor: '#001400' }}>
                            <a href="#" id="fir_2_s" style={{ color: "white" }}>Home</a>
                            <a href="#" id="fir_2_s" style={{ color: "white" }}>About</a>
                            <a href="#" id="fir_2_s" style={{ color: "white" }}>Services</a>
                            <a href="#" id="fir_2_s" style={{ color: "white" }}>Contact</a>
                            {/* Shining Color Button */}
                            <a href="#" id="fir_3_1" style={{ color: "white" }}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                JOIN
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Uni Health Assurance */}
            {/* Blog Third */}
            <br />
            <div id="Blog_Third2">
                <div id="sub_Blog_Third2">
                    <div id="s_B_T_head2">
                        <div id="sBT_head2_1">
                            {/* Line */}
                        </div>
                        <div id="sBT_head2_2">
                            <h1>Visa Requirement</h1>
                        </div>
                        <div id="sBT_head2_1">
                            {/* Line */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Blog Health Data */}
            <div id="Blog_Third2_2">
                <div id="sub_Blog_Third2_2">
                    <h2>Documentation Required : -</h2>
                    <br />
                    {/* 1 */}
                    <h4>1 - Passport :</h4>
                    <p>Valid passport with at least 6 months validity beyond the intended period of stay.</p>
                    {/* 2 */}
                    <h4>2 - Confirmation of Enrollment (CoE):</h4>
                    <p>Proof of acceptance/enrollment from an Australian educational institution.</p>
                    {/* 2 - */}
                    <h4>3 - Genuine Temporary Entrant (GTE) statement:</h4>
                    <p>A written statement to assess the genuineness of your intention to study.</p>
                    {/* 2 - */}
                    <h4>4 - Financial Documents:</h4>
                    <p>Evidence of sufficient funds to cover tuition fees, living expenses, etc.</p>
                    {/* 2 - */}
                    <h4>5 - English Language Proficiency:</h4>
                    <p>IELTS, TOEFL, PTE test scores meeting the minimum requirements.</p>
                    {/* 2 - */}
                    <h4>6 - Health Insurance:</h4>
                    <p>Overseas Student Health Cover (OSHC) for the duration of stay.</p>
                    {/* 2 - */}
                    <h4>7 - Academic Documents:</h4>
                    <p>Transcripts, certificates, and degrees from previous education.</p>
                    {/* 2 - */}
                    <h4>8 - Statement of Purpose (SOP):</h4>
                    <p>Detailing reasons for choosing Australia for studies.</p>
                    {/* 2 - */}
                    <h4>9 - Character Certificate:</h4>
                    <p>Evidence of good character and no criminal record.</p>
                    {/* 2 - */}
                    <h4>10 - Notarized Copies:</h4>
                    <p>Colored copies of documents attested by a notary public.</p>
                    {/* 3 */}
                    <br /><br />
                    <h2>Visa Process Guide : -</h2>
                    <br />
                    {/* 4 - Part 1 */}
                    <h4>1 - Application Submission:</h4>
                    <p>Create an account on the Australian Government's immigration portal.</p>
                    {/* 4 - Part 2 */}
                    <h4>2 - Form Filling:</h4>
                    <p>Fill out the Student Visa (subclass 500) application form with accurate details.</p>
                    {/* 4 - Part 3 */}
                    <h4>3 - Document Upload:</h4>
                    <p>Upload scanned copies of all required documents.</p>
                    {/* 4 - Part 4 */}
                    <h4>4 - Biometrics & Health Check:</h4>
                    <p>Some applicants might need to provide biometrics and undergo a health examination.</p>
                    {/* 4 - Part 5 */}
                    <h4>5 - Visa Interview:</h4>
                    <p>Attend an interview if requested by the authorities.</p>
                    {/* 4 - Part 6 */}
                    <h4>6 - Processing Time: </h4>
                    <p>Visa processing time may vary; it's advisable to apply well in advance.</p>
                    <br /><br />
                    <h2>Duration of Visa Processing : -</h2>
                    {/* <br /> */}
                    {/* 4 - Part 1 */}
                    <p>The typical processing time for a student visa is approximately 8 to 12 weeks. However, this might vary based on individual circumstances and the volume of applications being processed.</p>
                    <br /><br />
                    <h2>Steps for Visa Application : -</h2>
                    {/* 4 - Part 1 */}
                    <p>Create an ImmiAccount on the Department of Home Affairs website.
                        Fill out the online application form (subclass 500).
                        Upload the necessary documents as per the checklist.
                        Pay the visa application fee.
                        Monitor the application status and respond to any additional requests or queries.
                    </p>
                    <br /><br />
                    <h2>Visa Application Fees : -</h2>
                    {/* 4 - Part 1 */}
                    <p>The visa application fee for Student Visa (subclass 500) starts at AUD 620. Additional charges might apply based on individual circumstances.</p>
                    <br />
                </div>
            </div>
            {/* ---------------------------------- */}
            {/* - Footer - Contact Us - Eight - */}
            <div id="eight">
                <div id="sub_eight">
                    <div id="eight_1">
                        {/* 1 */}
                        <div id="eig_1_1">
                            <div id="eig_1_1_sub">
                                <img src={logo} alt="No Answer" />
                            </div>
                            <p>Acha Parhlo Refers Empowering Dreams, Shaping Futures, Your Gateway to Educational Success</p>
                        </div>
                        <div id="eig_1_2">
                            <div id="eig_1_2_sub">
                                <h5>Get in Touch With</h5>
                                <p>User@AchaParhlo.com</p>
                                <p>+92 3321275952</p>
                            </div>
                        </div>
                        <div id="eig_1_3">
                            <div id="eig_1_2_sub">
                                <h5>Associations</h5>
                                <p>Home</p>
                                <p>About</p>
                                <p>Blogs</p>
                                <p>Contact Us</p>
                            </div>
                        </div>
                        <div id="eig_1_4">
                            <div id="eig_1_4_sub">
                                <h5>Find Us Online</h5>
                                <div id="eig_1_4_sub_2">
                                    {/* Facebook */}
                                    <div id="eig_1_4_circle">
                                        <i className='fa fa-facebook'></i>
                                    </div>
                                    {/* Instagram */}
                                    <div id="eig_1_4_circle">
                                        <i className='fa fa-instagram'></i>
                                    </div>
                                    {/* Twitter */}
                                    <div id="eig_1_4_circle">
                                        <i className='fa fa-twitter'></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="eight_2">
                        <span><hr className='bg-white' /></span>
                        <span>Acha Parhlo &#169; 2023 - All Rights Reserved</span>
                    </div>
                </div>
            </div>
            {/* ---------------------------------- */}
            {/* The End */}
        </div>
    )
}

