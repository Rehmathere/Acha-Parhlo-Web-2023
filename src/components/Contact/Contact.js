import React, { useState } from 'react'
// Conatct CSS
import "./Contact.css"
import "../../App.css"
// Images
import img1 from '../Pics/logo2.png'
// import img2 from '../Pics/menu.png'
import img2 from '../Pics/menu2.png'
import logo from '../Pics/logo2.png'
import qr from '../Pics/Qr.png'
import contact from '../Pics/con3.png'
import z1 from "../Pics/Z_Chat.png"
import z2 from "../Pics/Z_Call.png"
import z3 from "../Pics/Z_Meet.png"
import z4 from "../Pics/Z_Video.png"
import z5 from "../Pics/Z_Assess.png"
// Navigate
import { useNavigate } from 'react-router-dom'

export default function Contact() {
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
  //   Main Body
  return (
    <div id='Main Body'>
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
                <a href="#" id="fir_2_s" onClick={() => navigate('/about')}>About</a>
                <a href="#" id="fir_2_s" onClick={() => navigate('/blogpage')}>Blogs</a>
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
              <a href="#" id="fir_2_s" style={{ color: "white" }} onClick={() => navigate('/')}>Home</a>
              <a href="#" id="fir_2_s" style={{ color: "white" }} onClick={() => navigate('/about')}>About</a>
              <a href="#" id="fir_2_s" style={{ color: "white" }} onClick={() => navigate('/blogpage')}>Blogs</a>
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
      {/* ------------------------------------ */}
      {/* Contact First */}
      {/* Contact First */}
      <div id="con_fir">
        <div id="sub_con_fir">
          <h1>Contact Us</h1>
        </div>
      </div>
      {/* Contact Second */}
      <div id="con_sec">
        <div id="sub_con_sec0">
          <img src={contact} alt="NA" />
        </div>
        <div id="sub_con_sec">
          <h6>Get Connected With Us</h6>
        </div>
        <div id="sub_con_sec_1">
          <p>Connect with us to stay updated on the latest news, exclusive offers, and community events. Follow our social media channels for a glimpse into our world and engage with like-minded individuals. Let's build a connection that goes beyond just a brand, it's about being part of a thriving community.</p>
        </div>
      </div>
      {/* Contact Third */}
      <div id="con_third">
        <div id="sub_con_third">
          {/* 1 */}
          <div id="con_third_1">
            <div id="con_third_1_sub">
              <h3>Scan</h3>
              <h4>QR Code</h4>
              <p>Unlock boundless opportunities with our barcode scanner, seamlessly bridging students to Acha Parhlo's expert consultants in a tap, empowering direct and dynamic connections for educational success.</p>
              <button>Get Started</button>
            </div>
          </div>
          {/* 2 */}
          <div id="con_third_2">
            <div id="sub_con_third_2">
              <img src={qr} alt="NA" />
            </div>
          </div>
        </div>
      </div>
      {/* Contact Forth */}
      <div id="con_forth">
        <div id="sub_con_forth">
          {/* 1 */}
          <div id="con_forth_1">
            <h6><span>Get</span> Connected</h6>
            <p>Visit our App or simply send us an email anytime you want. If you have any questions, please feel free to contact us.</p>
          </div>
          {/* 2 */}
          <div id="con_forth_2">
            {/* Row 1 */}
            <div id="con_forth_row">
              {/* Box 1 */}
              <div id="con_forth_row_box">
                <div id="con_forth_box_side_1">
                  <img src={z1} alt="NA" />
                </div>
                <div id="con_forth_box_side_2">
                  <h6>Online Chat</h6>
                  <p>Chat with us online</p>
                </div>
              </div>
              {/* Box 2 */}
              <div id="con_forth_row_box">
                <div id="con_forth_box_side_1">
                  <img src={z2} alt="NA" />
                </div>
                <div id="con_forth_box_side_2">
                  <h6>Call</h6>
                  <p>Request a call back</p>
                </div>
              </div>
              {/* Box 3 */}
              <div id="con_forth_row_box">
                <div id="con_forth_box_side_1">
                  <img src={z3} alt="NA" />
                </div>
                <div id="con_forth_box_side_2">
                  <h6>Book Meeting</h6>
                  <p>Book meeting with us</p>
                </div>
              </div>

            </div>
            {/* Row 2 */}
            <div id="con_forth_row">
              {/* Box 4 */}
              <div id="con_forth_row_box">
                <div id="con_forth_box_side_1">
                  <img src={z4} alt="NA" />
                </div>
                <div id="con_forth_box_side_2">
                  <h6>Virtual Office</h6>
                  <p>WhatsApp / Zoom meet up</p>
                </div>
              </div>
              {/* Box 5 */}
              <div id="con_forth_row_box">
                <div id="con_forth_box_side_1">
                  <img src={z5} alt="NA" />
                </div>
                <div id="con_forth_box_side_2">
                  <h6>Free Assessment</h6>
                  <p>Apply for free Assessment</p>
                </div>
              </div>
            </div>
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

























