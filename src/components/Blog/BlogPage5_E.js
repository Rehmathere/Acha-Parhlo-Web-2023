import React, { useState, useEffect } from 'react'
// Conatct CSS
import "./BlogPage.css"
import "../../App.css"
// Images
import img1 from '../Pics/logo2.png'
import img2 from '../Pics/menu2.png'
import logo from '../Pics/logo2.png'

export default function BlogPage5_E() {
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
                            <h1>English Test</h1>
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
                    <h2 style={{ textTransform: "capitalize" }}>English Proficiency Tests : -</h2>
                    <br /><br />
                    <p>English proficiency examinations assess a candidate's language skills, specifically in reading, writing, listening, and speaking. These standardized tests evaluate an individual's ability to comprehend and communicate effectively in English, a crucial requirement for international students seeking admission to universities in English-speaking countries like Australia.</p>
                    <br />
                    {/* 1 */}
                    <h2>Importance of English Tests in Higher Education</h2>
                    <br /><br />
                    <h2>Academic Requisites : -</h2>
                    <br />
                    <h4>1 - Admission Prerequisite :</h4>
                    <p>Most universities demand a specific level of English proficiency for admission.</p>
                    <br />
                    {/* 2 */}
                    <h4>2 - Course Requirements :</h4>
                    <p>Programs often necessitate a minimum score for acceptance.</p>
                    {/* - */}
                    <br /><br />
                    <h2>Ensuring Academic Success : -</h2>
                    <br />
                    <h4>1 - Facilitating Learning :</h4>
                    <p>Proficiency aids in comprehending lectures, engaging in discussions, and completing assignments.</p>
                    <br />
                    {/* 2 */}
                    <h4>2 - Improving Communication :</h4>
                    <p>Enhances interaction with peers and professors.</p>
                    {/* - */}
                    <br /><br />
                    <h2>Evaluation Criterion : -</h2>
                    <br />
                    <h4>1 - Assessment Standardization :</h4>
                    <p>Allows fair comparison among diverse applicants.</p>
                    <br />
                    {/* 2 */}
                    <h4>2 - Universities' Benchmark :</h4>
                    <p>Provides a common metric for admission evaluation.</p>
                    {/* - */}
                    <br /><br />
                    <h2>Demonstrating Language Proficiency : -</h2>
                    <br />
                    <h4>1 - Proving Competence :</h4>
                    <p>Exhibits the ability to study in an English-medium academic environment.</p>
                    <br />
                    {/* 2 */}
                    <h4>2 - Enhancing Application Profiles :</h4>
                    <p>Strong scores add weight to applications.</p>
                    {/* - */}
                    <br /><br />
                    <h2>Types of English Proficiency Tests : -</h2>
                    <br /><br />
                    <h4>1 - IELTS (International English Language Testing System) :</h4>
                    <p>IELTS is a globally recognized English proficiency examination designed to assess an individual's ability to communicate effectively in English. It evaluates four key language skills: reading, writing, listening, and speaking. The test is widely accepted by universities, employers, and immigration authorities in English-speaking countries. IELTS scores are measured on a scale from 1 to 9, categorizing proficiency levels from non-user (band score 1) to expert (band score 9). It's known for its accuracy in assessing practical English language skills needed for study, work, and migration.</p>
                    <h4>Format :</h4>
                    <p>Comprises four sections assessing various language skills.</p>
                    <br />
                    {/* 2 */}
                    <br />
                    <h4>2 - TOEFL (Test of English as a Foreign Language) :</h4>
                    <p>TOEFL is a standardized English proficiency test accepted by universities worldwide. It assesses the English language skills of non-native speakers in academic contexts. The test evaluates reading, writing, listening, and speaking abilities. TOEFL scores range from 0 to 120, indicating different proficiency levels. It's recognized for its academic focus and measures the ability to understand North American English, emphasizing academic English skills needed for university success.</p>
                    <h4>Format :</h4>
                    <p>Internet-based test with sections for different skills.</p>
                    <br />
                    {/* 3 */}
                    <br />
                    <h4>3 - PTE (Pearson Test of English) :</h4>
                    <p>PTE is a computer-based English language assessment that evaluates an individual's English proficiency across four sections: speaking, writing, reading, and listening. It's recognized by universities, colleges, and governments globally. PTE scores range from 10 to 90, measuring proficiency levels from beginner to advanced. The test format is known for its quick turnaround in delivering results and offers a fair, unbiased assessment of candidates' English language abilities through computer algorithms.</p>
                    <h4>Format :</h4>
                    <p>Computer-based assessment covering listening, reading, speaking, and writing.</p>
                    <br />
                    {/* - */}
                    <br /><br />
                    <h2>English Test Requirements for Student Visas : -</h2>
                    <br /><br />
                    <h2>Minimum Requirements</h2>
                    <br /><br />
                    <h4>1 - IELTS:</h4>
                    <p>Minimum 6.5 bands overall (varies with universities)</p>
                    <br />
                    <h4>2 - PTE:</h4>
                    <p>Minimum 50-58 overall (varies with universities)</p>
                    <br />
                    <h4>3 - TOEFL:</h4>
                    <p>Minimum 70-90 (iBT) (varies with universities)</p>
                    <br /><br />
                    <h2>Scoring Criteria</h2>
                    <br /><br />
                    <h4>1 - IELTS:</h4>
                    <p>Scores from 0 to 9 bands in each section.</p>
                    <br />
                    <h4>2 - PTE:</h4>
                    <p>Scores from 10 to 90.</p>
                    <br />
                    <h4>3 - TOEFL:</h4>
                    <p>Scores from 0 to 120 (iBT).</p>
                    <br /><br />
                    <h2>Test Comparisons</h2>
                    <br /><br />
                    <h4>1 - IELTS:</h4>
                    <p>Traditional, broader accent range.</p>
                    <br />
                    <h4>2 - PTE:</h4>
                    <p>Computer-based, quick results.</p>
                    <br />
                    <h4>3 - TOEFL:</h4>
                    <p>Online, academic English.</p>
                    <br /><br />
                    <h2>Test Duration</h2>
                    <br /><br />
                    <h4>1 - IELTS:</h4>
                    <p>Around 2 hours 45 minutes.</p>
                    <br />
                    <h4>2 - PTE:</h4>
                    <p>Approximately 3 hours.</p>
                    <br />
                    <h4>3 - TOEFL:</h4>
                    <p>About 4 hours.</p>
                    <br /><br />
                    <h2>Tips & Tricks for IELTS</h2>
                    <br /><br />
                    <h4>1 - Listening & Note-Taking:</h4>
                    <p>Practice listening and summarizing key points.</p>
                    <br />
                    <h4>2 - Time Management:</h4>
                    <p>Use time effectively during the exam.</p>
                    <br />
                    <h4>3 - Vocabulary Practice:</h4>
                    <p>Focus on expanding your vocabulary.</p>
                    <br />
                    <h4>4 - Official Preparation:</h4>
                    <p>IELTS Official Preparation Materials</p>
                    <a href="https://ielts.org/" target="_blank">https://ielts.org/</a>
                    <br /><br />
                    <h2>Tips & Tricks for PTE</h2>
                    <br /><br />
                    <h4>1 - Practice in Real-Time:</h4>
                    <p>Simulate test conditions while practicing.</p>
                    <br />
                    <h4>2 - Note Highlighting:</h4>
                    <p>Master note-highlighting for the listening section.</p>
                    <br />
                    <h4>3 - Time Management:</h4>
                    <p>Learn to manage time effectively.</p>
                    <br />
                    <h4>4 - Official Preparation:</h4>
                    <p>PTE Official Practice</p>
                    <a href="https://www.pearsonpte.com/preparation/" target="_blank">https://www.pearsonpte.com/preparation/</a>
                    <br /><br />
                    <h2>Tips & Tricks for TOEFL</h2>
                    <br /><br />
                    <h4>1 - Reading Strategies:</h4>
                    <p>Practice skimming and scanning techniques.</p>
                    <br />
                    <h4>2 - Speaking Fluency:</h4>
                    <p>Work on your spoken English fluency.</p>
                    <br />
                    <h4>3 - Grammar Refinement:</h4>
                    <p>Focus on grammar practice.</p>
                    <br />
                    <h4>4 - YouTube Channels:</h4>
                    <p>Video 1 : Asad Yaqub IELTS:</p>
                    <a href="https://www.youtube.com/@AsadYaqubOfficial" target="_blank">https://www.youtube.com/@AsadYaqubOfficial</a>
                    <br /><br />
                    <p>Video 2 :Language Academy PTE:</p>
                    <a href="https://www.youtube.com/@LanguageAcademyPTE" target="_blank">https://www.youtube.com/@LanguageAcademyPTE</a>
                    <br /><br />
                    <p>Video 3 : TST Prep TOEFL:</p>
                    <a href="https://www.youtube.com/@TSTPrep" target="_blank">https://www.youtube.com/@TSTPrep</a>
                    <br /><br />
                    <p>Video 4 : Learn With Sam And Ash:</p>
                    <a href="https://www.youtube.com/@LearnWithSamAndAsh" target="_blank">https://www.youtube.com/@LearnWithSamAndAsh</a>
                    <br /><br />
                    <p>Video 5 : E2 IELTS:</p>
                    <a href="https://www.youtube.com/@E2IELTS" target="_blank">https://www.youtube.com/@E2IELTS</a>
                    <br /><br /><br />
                    <h2>Test Selection Criteria : -</h2>
                    <br /><br />
                    <h4>1 - University Requirements:</h4>
                    <p>Consider the preferred test by the universities you are applying to.</p>
                    <br />
                    <h4>2 - Personal Aptitude:</h4>
                    <p>Select a test that aligns with your strengths.</p>
                    <br /><br />
                    <h2>Conclusion : -</h2>
                    <p>English proficiency tests are gateways to academic opportunities, ensuring that students can excel in English-speaking academic environments. Understanding their importance and preparing strategically can significantly enhance one's chances of success in pursuing higher education abroad.</p>
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

