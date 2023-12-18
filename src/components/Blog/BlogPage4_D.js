import React, { useState, useEffect } from 'react'
// Conatct CSS
import "./BlogPage.css"
import "../../App.css"
// Images
import img1 from '../Pics/logo2.png'
import img2 from '../Pics/menu2.png'
import logo from '../Pics/logo2.png'

export default function BlogPage4_D() {
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
                            <h1>Document Checklist</h1>
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
                    <h2 style={{ textTransform: "capitalize" }}>Document Checklist for Study Abroad in Australia : -</h2>
                    <br /><br />
                    {/* 1 */}
                    <h4>For Bachelor's Program :</h4>
                    <p>1 - 10th-grade mark sheet and certificates</p>
                    <p>2 - FSC mark sheet and certificate</p>
                    <p>3 - ID card (front and back)</p>
                    <p>4 - Passport first page and signed page</p>
                    <p>5 - Copy of IELTS score (minimum 6 bands each)</p>
                    <p>6 - Gap Proof (job experience letter or course certificates)</p>
                    <p>7 - Updated Resume</p>
                    <br /><br />
                    {/* 2 */}
                    <h4>For Master's Program :</h4>
                    <p>1 - 10th-grade mark sheet and certificates</p>
                    <p>2 - FSC mark sheet and certificate</p>
                    <p>3 - ID card (front and back)</p>
                    <p>4 - Passport first page and signed page</p>
                    <p>5 - Copy of IELTS score (minimum 6 bands each)</p>
                    <p>6 - Gap Proof (job experience letter or course certificates)</p>
                    <p>7 - Updated Resume</p>
                    <p>8 - Bachelor Transcript and Degree</p>
                    {/* - */}
                    <br /><br />
                    <h2>Documentation Guideline : -</h2>
                    <br /><br />
                    {/* 4 - Part 1 */}
                    <h4>1 - Colored Copies:</h4>
                    <p>Ensure all documents are scanned and kept as colored copies for clarity and legibility.</p>
                    {/* 4 - Part 2 */}
                    <h4>2 - Attestation by Notary Public:</h4>
                    <p>Verify your documents from a Notary Public to validate their authenticity.</p>
                    {/* 4 - Part 3 */}
                    <h4>3 - Scanning Quality</h4>
                    <p>Use a high-quality scanner for scanning documents to ensure clarity and resolution.</p>
                    {/* - */}
                    <br /><br />
                    <h2>Steps for Document Submission : -</h2>
                    <br /><br />
                    {/* 4 - Part 1 */}
                    <h4>1 - Colored Copy:</h4>
                    <p>Prepare colored copies of all necessary documents.</p>
                    {/* 4 - Part 2 */}
                    <h4>2 - Notary Public Attestation:</h4>
                    <p>Get documents attested by a Notary Public to certify their authenticity.</p>
                    {/* 4 - Part 3 */}
                    <h4>3 - Scanning Process:</h4>
                    <p>Scan all documents using a reliable scanner with high-resolution settings.</p>
                    {/* 4 - Part 4 */}
                    <h4>4 - Upload Documents:</h4>
                    <p>Scan all documents using a reliable scanner with high-resolution settings.</p>
                    <br /><br />
                    <h2>Key Guidelines : -</h2>
                    <br />
                    <p>1 - Ensure all documents are legible and clear after scanning.</p>
                    <p>2 - Follow the specific guidelines provided by your educational institution for document submission.</p>
                    <p>3 - Keep both physical and digital copies of the documents for personal records and future references.</p>
                    <p>4 - Double-check the document requirements for the specific university or course to avoid any errors or omissions.</p>
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

