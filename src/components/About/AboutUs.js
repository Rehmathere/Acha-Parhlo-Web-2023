import React, { useState, useEffect } from 'react'
import "./About.css"
import "../../App.css"
// Images
import img1 from '../Pics/logo2.png'
import img2 from '../Pics/menu2.png'
import logo from '../Pics/logo2.png'
import About2 from '../Pics/About 2.jpg'
import About_num_2 from '../Pics/About_num_1.jpg'
// useNavigate
import { useNavigate } from 'react-router-dom'

export default function AboutUs() {
    // useNavigate Variable
    const navigate = useNavigate();
    //   Some Contact Js
    // ---------------------------------------------
    // 1 - Function
    const [sliderMenuVisible, setSliderMenuVisible] = useState(false);
    const toggleSliderMenu = () => {
        setSliderMenuVisible(!sliderMenuVisible);
    };
    // ---------------------------------------------
    // 3 - Number Scroll
    const [activated, setActivated] = useState(false);
    useEffect(() => {
        const counters = document.querySelectorAll("#counter_Parent span");
        const container = document.querySelector("#counter_Parent");

        const handleScroll = () => {
            if (window.pageYOffset > container.offsetTop - container.offsetHeight - 200 && !activated) {
                counters.forEach(counter => {
                    counter.innerText = 0;
                    let count = 0;

                    const updateCount = () => {
                        const target = parseInt(counter.dataset.count);
                        if (count < target) {
                            count++;
                            counter.innerText = count;
                            setTimeout(updateCount, 10);
                        } else {
                            counter.innerText = target;
                        }
                    }

                    updateCount();
                    setActivated(true);
                });
            }
            else if ((window.pageYOffset < container.offsetTop - container.offsetHeight - 500 || window.pageYOffset === 0) && activated) {
                counters.forEach(counter => {
                    counter.innerText = 0;
                });
                setActivated(false);
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [activated]);
    // 4 - FAQS
    const [activeItem, setActiveItem] = useState(null);
    const faqData = [
        // 1
        {
            question: 'What is Acha Parhlo ?',
            answer:
                'Acha Parhlo is an education student consultancy website that specializes in assisting students who wish to study in international universities in Australia.',
        },
        // 2
        {
            question: 'What services do you provide ?',
            answer:
                'Our services include scholarship guidance, expert assistance with university selection, application support, visa consultation, and more. We are your one-stop solution for a successful academic journey in Australia.',
        },
        // 3
        {
            question: 'Acha Parhlo Primary focus ?',
            answer:
                'By focusing on international students and their specific needs within the Australian educational landscape, Acha Parhlo aims to be a trusted partner in your pursuit of a world-class education and a brighter future.',
        },
        // Add more FAQ items as needed
    ];
    const toggleAccordion = (index) => {
        setActiveItem(activeItem === index ? null : index);
    };
    // Main Body
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
                                <a href="#" id="fir_2_s" onClick={() => navigate('/')}>Home</a>
                                <a href="#" id="fir_2_s">About</a>
                                <a href="#" id="fir_2_s" onClick={() => navigate('/blogpage')}>Blogs</a>
                                <a href="#" id="fir_2_s" onClick={() => navigate('/contact')}>Contact</a>
                            </div>
                        </div>
                        <div id="fir_3">
                            <a href="#" id="fir_3_1" onClick={() => navigate('/PLogin')}>
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
                            <a href="#" id="fir_2_s" style={{ color: "White" }} onClick={() => navigate('/')}>Home</a>
                            <a href="#" id="fir_2_s" style={{ color: "White" }}>About</a>
                            <a href="#" id="fir_2_s" style={{ color: "White" }} onClick={() => navigate('/blogpage')}>Blogs</a>
                            <a href="#" id="fir_2_s" style={{ color: "White" }} onClick={() => navigate('/contact')}>Contact</a>
                            {/* Shining Color Button */}
                            <a href="#" id="fir_3_1" style={{ color: "white" }} onClick={() => navigate('/PLogin')}>
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
            {/* ------------------------------------ */}
            {/* 1 - Image Slider For About Us */}
            <div id="About_fir">
                <div id="sub_About_fir">
                    <h1>ABOUT US</h1>
                </div>
            </div>
            {/* 2 - Content For About Us */}
            <div id="About_sec">
                <div className="container-fluid p-0">
                    <div id="sub_About_sec">
                        {/* 1 */}
                        <div id="About_sec_1">
                            <h1><span>About</span> The</h1>
                            <h1>ACHA PARHLO <span>Aim</span></h1>
                            <p>Acha Parhlo, your gateway to a brighter future! Our Aboard Education Consultancy specializes in securing scholarships for students aiming to study the top universities in Australia. We provide dedicated guidance from expert consultants and foster direct engagement between consultants and students</p>
                        </div>
                        {/* 2 */}
                        <div id="About_sec_2">
                            <img src={About2} alt="NA" />
                        </div>
                    </div>
                </div>
            </div>
            {/* 3 - About Us Number Scroll */}
            <div id="About_third">
                <div id="sub_About_third">
                    {/* 1 */}
                    <div id="About_third_1">
                        <img src={About_num_2} alt="" />
                    </div>
                    {/* 2 */}
                    <div id="About_third_2">
                        <h2>Our Journey So Far</h2>
                        <p>Journey to Excellence: Beyond the Horizon, in the Heart of Australia</p>
                        {/* Number Scroll Side Portion */}
                        <div id="counter_Parent">
                            {/* <!-- Number 1 Box --> */}
                            <div id="counter">
                                <h3><span data-count="45">0</span></h3>
                                <h2>Satisfied Client</h2>
                            </div>
                            {/* <!-- Number 2 Box --> */}
                            <div id="counter">
                                <h3><span data-count="75">0</span> % </h3>
                                <h2>Experience</h2>
                            </div>
                        </div>
                        {/* Number Scroll Side Portion */}
                        <div id="counter_Parent">
                            {/* <!-- Number 3 Box --> */}
                            <div id="counter">
                                <h3><span data-count="87">0</span> % </h3>
                                <h2>Success Rate</h2>
                            </div>
                            {/* <!-- Number 4 Box --> */}
                            <div id="counter">
                                <h3><span data-count="90">0</span> % </h3>
                                <h2>Consultancy</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 4 - About Us Last Portion */}
            <div id="About_ten">
                <div id="sub_About_ten">
                    {/* h1 */}
                    <h2>Facts & Questions</h2>
                    {/* Q / As Box */}
                    <div id="sub_box_ten">
                        <div className="sub_ten">
                            {faqData.map((item, index) => (
                                <div key={index}>
                                    <div className={`ten_1_1 ${activeItem === index ? 'active' : ''}`} onClick={() => toggleAccordion(index)}>
                                        <div className="ten_1_1_icon"></div>
                                        <h6>{item.question}</h6>
                                    </div>
                                    <div className={`ten_1_2 ${activeItem === index ? 'active' : ''}`}>
                                        <p>{item.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* ----------------------------------- */}
            {/* - Start - */}
            {/* ----------------------------------- */}
            {/* Eight - ( Footer Navbar ) */}
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
            {/* ------- Page End ------- */}
        </div>
    )
}

