import React, { useState, useEffect } from 'react'
// Conatct CSS
import "./BlogPage.css"
import "../../App.css"
// Images
import img1 from '../Pics/logo2.png'
import img2 from '../Pics/menu2.png'
import logo from '../Pics/logo2.png'

export default function BlogPage2_H() {
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
                            <h1>Health Assurance</h1>
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
                    {/* 1 */}
                    <h4>What is OSHC (Overseas Student Health Cover) ?</h4>
                    <p>OSHC is a mandatory health insurance for international students in Australia. It provides medical and hospital insurance to cover the cost of healthcare, including doctor's appointments, hospital treatments, prescription medicines, and emergency ambulance services during the stay in Australia. https://oshcaustralia.com.au/en</p>
                    <br />
                    {/* 2 */}
                    <h4>Why is OSHC Necessary ?</h4>
                    <p>It's a mandatory requirement for student visa applicants in Australia. It ensures students have access to adequate healthcare services during their stay, helping them manage unexpected medical costs and ensuring they can maintain good health while studying abroad.</p>
                    {/* 3 */}
                    <br />
                    <h2>Providers of OSHC : -</h2>
                    <br />
                    {/* 4 - Part 1 */}
                    <h4>1 - Allianz Care Australia :</h4>
                    <p>Known for comprehensive health coverage, Allianz offers OSHC with a range of services and benefits tailored to students' needs. https://www.allianz.com/en.html</p>
                    {/* 4 - Part 2 */}
                    <h4>2 - BUPA Australia :</h4>
                    <p>Offers affordable OSHC plans with various coverage options, including medical services, hospital care, and extras like dental and optical cover. https://www.bupa.com.au/</p>
                    {/* 4 - Part 3 */}
                    <h4>3 - Medibank Private :</h4>
                    <p>Provides OSHC plans catering to different student requirements, including coverage for medical services, hospitalization, and more. https://www.medibank.com.au/</p>
                    {/* 4 - Part 4 */}
                    <h4>4 - NIB :</h4>
                    <p>Offers competitive OSHC plans, ensuring students have access to necessary healthcare services, including hospital and medical coverage. https://www.nib.com.au/</p>
                    {/* 4 - Part 5 */}
                    <h4>5 - Cost of OSHC :</h4>
                    <p>The cost of OSHC can vary depending on the duration of the course and the chosen insurance provider. On average, it can range between $438 and $2,000 AUD per year.</p>
                    {/* 4 - Part 6 */}
                    <h4>6 - Coverage and Benefits :</h4>
                    <p>OSHC covers most medical services, hospital care, prescription medicines, and emergency ambulance services as prescribed by the Australian government, ensuring students have access to essential healthcare throughout their stay.</p>
                    {/* 4 - Part 7 */}
                    <h4>7 - Duration and Renewal :</h4>
                    <p>OSHC usually covers the duration of the student visa. It needs to be maintained throughout the stay in Australia, and it's essential to renew the cover if extending the visa or enrolling in further studies.</p>
                    {/* 4 - Part 8 */}
                    <h4>Other Important Considerations</h4>
                    <p>It's crucial to understand the specifics of the policy, including waiting periods, exclusions, and additional coverage options for extras like dental and optical services. Students should thoroughly review and compare plans from different providers to choose the most suitable coverage for their needs.</p>
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

