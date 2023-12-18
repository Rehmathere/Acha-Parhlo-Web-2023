import React, { useState, useEffect } from 'react'
// Conatct CSS
import "./BlogPage.css"
import "../../App.css"
// Images
import img1 from '../Pics/logo2.png'
import img2 from '../Pics/menu2.png'
import logo from '../Pics/logo2.png'
// Uni data JS APi 
import Uni_Api from './API_Data/Uni_Api'
// Navigate
import { Link, useNavigate } from 'react-router-dom'

export default function BlogPage() {
    // useNavigate
    const navigate = useNavigate();
    //   Some Contact Js
    // ---------------------------------------------
    // 1 - Function
    const [sliderMenuVisible, setSliderMenuVisible] = useState(false);
    const toggleSliderMenu = () => {
        setSliderMenuVisible(!sliderMenuVisible);
    };
    // ---------------------------------------------
    //   Some Contact Js
    const [records, setRecords] = useState([]);
    // Simple Fetch Api
    useEffect(() => {
        // Fetching data from the Uni_Api endpoint
        const fetchData = async () => {
            try {
                // Assuming Uni_Api is an array of objects
                setRecords(Uni_Api);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        fetchData();
    }, []);
    //   Main Body
    return (
        <div id='MainBody'>
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
            {/* ---------------------------------- */}
            {/* Blog First */}
            <div id="Blog_First">
                <div id="sub_Blog_First">
                    <div id="Blog_First_Box">
                        {/* Part 1 */}
                        <div id="blog_first_0">
                            <h3>Acha Parhlo: Your Gateway to Australian Education Excellence</h3>
                            <p>Welcome! Let's Step into the world of opportunities with Acha Parhlo! From study guides to personalized consultancy, we're committed to making your journey abroad a success story.</p>
                        </div>
                        {/* Part 1 */}
                        <div id="blog_first_1">
                            <div id="sub_blog_first_1">
                                {/* Start */}
                            </div>
                        </div>
                        {/* Part 2 */}
                        <div id="blog_first_2">
                            <div id="sub_blog_first_2">
                                {/* Start */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Blog Second */}
            <div id="Blog_Second">
                <div id="sub_Blog_Second">
                    <h1>Categories</h1>
                    <div id="Blog_Second_1">
                        {/* 1 */}
                        <p>Australian Universities</p>
                        {/* 2 */}
                        <p onClick={() => navigate('blogPage2_H')}>Health Insurance</p>
                        {/* 3 */}
                        <p onClick={() => navigate('BlogPage3_V')}>Visa Requirements</p>
                        {/* 4 */}
                        <p onClick={() => navigate('BlogPage4_D')}>Documents Checklist</p>
                        {/* 5 */}
                        <p onClick={() => navigate('BlogPage5_E')}>English Test</p>
                    </div>
                </div>
            </div>
            {/* Blog Third */}
            <div id="Blog_Third">
                <div id="sub_Blog_Third">
                    <div id="s_B_T_head">
                        <div id="sBT_head_1">
                            {/* Line */}
                        </div>
                        <div id="sBT_head_2">
                            <h1>Australian Universities</h1>
                        </div>
                        <div id="sBT_head_1">
                            {/* Line */}
                        </div>
                    </div>
                    {/* Uni Data Fetch Part */}
                    <div id="blogGrid">
                        {records.map((r, i) => (
                            <Link key={i} to={`/blogUniDetails/${r.id}`} id="blogBox">
                                <div id="Blog_Third_Box">
                                    {/* Image */}
                                    <div id="BT_imgParent">
                                        <img src={r.Pic} alt="NA" />
                                    </div>
                                    <p id="BT_First_P">{r.title}</p>
                                    {/* Displaying the first 10 words of r.Intro */}
                                    <p id="BT_Last_P">{r.Intro.split(' ').slice(0, 10).join(' ')}...</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            {/* Start */}
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


