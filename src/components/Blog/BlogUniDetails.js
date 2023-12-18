import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Uni_Api from './API_Data/Uni_Api';
// CSS
import "./BlogPage.css"
import "../../App.css"
// Images
import logo from '../Pics/logo2.png'
import img1 from '../Pics/logo2.png'
import img2 from '../Pics/menu2.png'

const BlogUniDetails = () => {
    //   Some Contact Js
    // ---------------------------------------------
    // 1 - Function
    const [sliderMenuVisible, setSliderMenuVisible] = useState(false);
    const toggleSliderMenu = () => {
        setSliderMenuVisible(!sliderMenuVisible);
    };
    // ---------------------------------------------
    // 2 - Some Api Logic
    const { blogId } = useParams();
    const selectedCourse = Uni_Api.find((element) => {
        return blogId === element.id;
    });
    if (!selectedCourse) {
        return <div>Course Not Found</div>;
    }
    // Main Body
    return (
        <div>
            {/* ----- Navbar ----- */}
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
            {/* ---------------------------------- */}
            {/* ----- Api Data Display Area ----- */}
            <div id="ApiData">
                {/* Image */}
                <div id="ApiData_ImgParent">
                    <div id="sub_ApiData_ImgParent">
                        <img src={selectedCourse.Pic} alt="NA" />
                    </div>
                </div>
                <h1>{selectedCourse.title}</h1>
                <p>{selectedCourse.Intro}</p>
                <h3>Factors</h3>
                <p>{selectedCourse.Factors}</p>
                <h3>Courses</h3>
                <p>{selectedCourse.Courses}</p>
                <h3>Fees Structure</h3>
                <p>{selectedCourse.Fees}</p>
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
    );
};

export default BlogUniDetails;
