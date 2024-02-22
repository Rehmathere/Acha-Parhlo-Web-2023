import React, { useEffect, useState } from 'react';
import img1 from './Pics/img1.png'
import img2 from './Pics/img2.webp'
import img3 from './Pics/img3.webp'
import img4 from './Pics/img4.webp'
import img5 from './Pics/img5.webp'
import img6 from './Pics/img6.webp'
import logo from './Pics/logo2.png'
import Ade from './Pics//z_Ade.jpg'
import sdy from './Pics/z_Sdy.jpg'
import per from './Pics/z_Per.jpg'
import mel from './Pics/z_Mel.jpg'
import bri from './Pics/z_Bri.jpg'
import map from './Pics/map.jpg'
import map_2 from './Pics/map_2.jpg'
import map_3 from './Pics/map_3.jpg'
import flag from './Pics/flag.png'
// Uni Pics
import u1 from './Pics/Uni Pics/Adelaide.png'
import u2 from './Pics/Uni Pics/Deakin.png'
import u3 from './Pics/Uni Pics/Flinders.png'
import u4 from './Pics/Uni Pics/Griffith.png'
import u5 from './Pics/Uni Pics/Macquarie.png'
import u6 from './Pics/Uni Pics/Monash.png'
import u7 from './Pics/Uni Pics/Tasmania.png'
import u8 from './Pics/Uni Pics/UNISA.png'
import u9 from './Pics/Uni Pics/UWA.png'
import u10 from './Pics/Uni Pics/Western.png'
import u11 from './Pics/Uni Pics/Wollongong.png'
import u12 from './Pics/Uni Pics/2 - La Trobe.png'
import u13 from './Pics/Uni Pics/3 - Swinburne.png'
import u14 from './Pics/Uni Pics/z4 - Victoria.png'
import u15 from './Pics/Uni Pics/1 - ANU.png'
import u16 from './Pics/Uni Pics/5 - RMIT.png'
// 2 - ImageSlider Images
import e1 from './Pics/e1.jpg';
import e2 from './Pics/e2.jpg';
import e3 from './Pics/e3.jpg';
import e4 from './Pics/e4.jpg';
import e5 from './Pics/e5.jpg';
// Navbar Images
import Nimg1 from './Pics/logo2.png'
import Nimg2 from './Pics/menu2.png'
// useNavigate
import { useNavigate } from 'react-router-dom'

export default function HomeLast() {
  // useNavigate Variable
  const navigate = useNavigate();
  // ---------------------------------------------
  // 1 - Function
  const [sliderMenuVisible, setSliderMenuVisible] = useState(false);
  const toggleSliderMenu = () => {
    setSliderMenuVisible(!sliderMenuVisible);
  };
  // ---------------------------------------------
  // 1 - ImageSlider JS Logic
  const [counter, setCounter] = useState(1);
  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prevCounter) => (prevCounter % 5) + 1);
    }, 6000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  function plusSlides(n) {
    setCounter((prevCounter) => {
      const newCounter = prevCounter + n;
      return newCounter > 5 ? 1 : newCounter < 1 ? 5 : newCounter;
    });
  }
  function currentSlide(n) {
    setCounter(n);
  }
  const titles = ['Sydney', 'Perth', 'Brisbane', 'Melbourne', 'Adelaide'];
  const descriptions = [
    'Sydney, where the sun rises over the Pacific',
    'Perth, the sunniest capital city in Australia',
    'Brisbane, the subtropical river city',
    'Melbourne, the cultural heart of Australia',
    'Adelaide, the city of churches',
  ];
  // ---------------------------------------------
  // Main Body
  return (
    <div id='third_whole'>
      {/* ----------------------------- */}
      {/* Navbar */}
      {/* // 1 - Navbar */}
      <div id="first">
        <div className="container-fluid" id="sub_first">
          <div className="row" id="sub_sub_first">
            <div id="fir_1">
              <div id="fir_1_img">
                <img src={Nimg1} alt="" />
              </div>
            </div>
            <div id="fir_2">
              <div id="fir_2_sub">
                <a href="#" id="fir_2_s">Home</a>
                <a href="#" id="fir_2_s" onClick={() => navigate('/about')}>About</a>
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
                <img src={Nimg2} alt="" id="fir_4_img" onClick={toggleSliderMenu} />
              </div>
            </div>
            {/* Slider Menu */}
            <div id="fir_5" style={{ display: sliderMenuVisible ? 'block' : 'none', backgroundColor: '#001400' }}>
              <a href="#" id="fir_2_s" style={{ color: "white" }}>Home</a>
              <a href="#" id="fir_2_s" style={{ color: "white" }} onClick={() => navigate('/about')}>About</a>
              <a href="#" id="fir_2_s" style={{ color: "white" }} onClick={() => navigate('/blogpage')}>Blogs</a>
              <a href="#" id="fir_2_s" style={{ color: "white" }} onClick={() => navigate('/contact')}>Contact</a>
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
      {/* ----------------------------- */}
      <div className="slider">
        {[e1, e2, e3, e4, e5].map((image, index) => (
          <div
            key={index}
            className="myslide fade"
            style={{
              display: counter === index + 1 ? 'block' : 'none',
              opacity: counter === index + 1 ? 1 : 0,
              transition: 'opacity 1s',
            }}
          >
            <div className="txt">
              <h1>{titles[index]}</h1>
              <p>{descriptions[index]}</p>
            </div>
            <img src={image} style={{ width: '100%', height: '100%', opacity: 0.7 }} alt={`Image ${index + 1}`} />
          </div>
        ))}
        <a className="prev" onClick={() => plusSlides(-1)}>
          &#10094;
        </a>
        <a className="next" onClick={() => plusSlides(1)}>
          &#10095;
        </a>
        <div className="dotsbox" style={{ textAlign: 'center' }}>
          {Array.from({ length: 5 }).map((_, index) => (
            <span
              key={index}
              className={`dot ${counter === index + 1 ? 'active' : ''}`}
              onClick={() => currentSlide(index + 1)}
            ></span>
          ))}
        </div>
      </div>
      {/* ----------------------------- */}
      {/* -- Third -- */}
      <div id="third">
        {/* Third Part 1 */}
        <div id="third_sub0">
          <div id="third_sub0_sub">
            <h1>Greeting</h1>
            <p>Acha Parhlo is your friendly guide for education, focusing on helping students obtain scholarships for their chosen Australian universities. We're dedicated to ensuring students have a great
              education, and we've already helped many succeed in the ever-changing world of global education.
              With our knowledge and experience, we make the scholarship process easier for deserving students.
              We're not just a place; we're like mentors and friends, accompanying students on their journey to a
              brighter future through education. Our commitment to excellent education and outstanding experiences
              sets us apart in the international education field. Acha Parhlo is the key to turning educational
              dreams into reality, offering a pathway to a brighter, scholarship-supported future.</p>
          </div>
        </div>
        {/* Third Part 2 */}
        <div id="third_sub">
          <div id="third_sub_sub">
            {/* First Progress Bar */}
            <div className="progress-box">
              <div className="title">Counselling</div>
              <div className="progress">
                <div className="progress-bar bar-1"></div>
                <div className="progress-number num-1">
                  85%
                </div>
              </div>
            </div>
            {/* Second Progress Bar */}
            <div className="progress-box">
              <div className="title">Scholarship</div>
              <div className="progress">
                <div className="progress-bar bar-2"></div>
                <div className="progress-number num-2">
                  70%
                </div>
              </div>
            </div>
            {/* Third Progress Bar */}
            <div className="progress-box">
              <div className="title">Immigration</div>
              <div className="progress">
                <div className="progress-bar bar-3"></div>
                <div className="progress-number num-3">
                  60%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ---- */}
      {/* One */}
      <div id="one">
        <div id="sub_one">
          {/* 1 */}
          <div id="one_1">
            <h2>Study Destination in</h2>
            <h1>Australia</h1>
            <p>Explore Scholarships in Premier Study Locations!</p>
          </div>
          {/* 2 */}
          <div id="one_2">
            {/* Line 1 */}
            <div id="one_2_box_line">
              {/* 1 */}
              <div id="one_2_box">
                <img src={sdy} alt="NA" />
                <h5>Sdyney</h5>
              </div>
              {/* 2 */}
              <div id="one_2_box">
                <img src={per} alt="NA" />
                <h5>Perth</h5>
              </div>
              {/* 3 */}
              <div id="one_2_box">
                <img src={mel} alt="NA" />
                <h5>Melbourne</h5>
              </div>
            </div>
            {/* Line 2 */}
            <div id="one_2_box_line">
              {/* 1 */}
              <div id="one_2_box">
                <img src={Ade} alt="NA" />
                <h5>Adelaide</h5>
              </div>
              {/* 2 */}
              <div id="one_2_box">
                <img src={bri} alt="NA" />
                <h5>Brisbane</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ---- */}
      {/* Forth */}
      <div id="forth">
        {/* <!-- Part 1 --> */}
        <div id="forth_1_sub">
          <h1>Application Process</h1>
        </div>
        {/* <!-- Part 2 --> */}
        <div id="forth_2_sub">
          {/* <!-- Box 1 --> */}
          <div id="for_2">
            <div id="for_2_1">
              <div id="for_content">
                <img src={img1} alt="NA" />
                <h2>1</h2>
              </div>
            </div>
            {/* <!-- H 1 --> */}
            <h1>1</h1>
            <p>Chat</p>
          </div>
          {/* <!-- Box 2 --> */}
          <div id="for_2">
            <div id="for_2_1">
              <div id="for_content">
                <img src={img2} alt="NA" />
                <h2>2</h2>
              </div>
            </div>
            {/* <!-- H 1 --> */}
            <h1>2</h1>
            <p>Counselling</p>
          </div>
          {/* <!-- Box 3 --> */}
          <div id="for_2">
            <div id="for_2_1">
              <div id="for_content">
                <img src={img3} alt="NA" />
                <h2>3</h2>
              </div>
            </div>
            {/* <!-- H 1 --> */}
            <h1>3</h1>
            <p>Search</p>
          </div>
          {/* <!-- Box 4 --> */}
          <div id="for_2">
            <div id="for_2_1">
              <div id="for_content">
                <img src={img4} alt="NA" />
                <h2>4</h2>
              </div>
            </div>
            {/* <!-- H 1 --> */}
            <h1>4</h1>
            <p>Fill Information</p>
          </div>
          {/* <!-- Box 5 --> */}
          <div id="for_2">
            <div id="for_2_1">
              <div id="for_content">
                <img src={img5} alt="NA" />
                <h2>5</h2>
              </div>
            </div>
            {/* <!-- H 1 --> */}
            <h1>5</h1>
            <p>Upload Docs</p>
          </div>
          {/* <!-- Box 6 --> */}
          <div id="for_2">
            <div id="for_2_1">
              <div id="for_content">
                <img src={img6} alt="NA" />
                <h2>6</h2>
              </div>
            </div>
            {/* <!-- H 1 --> */}
            <h1>6</h1>
            <p>Tracking</p>
          </div>
        </div>
      </div>
      {/* - Nine - */}
      <div id="nine">
        <div id="sub_nine">
          <h1>Top Ranked Institutions</h1>
          <p>We have collaborated with leading global universities to simplify your decision-making process</p>
          {/* Universities Box Parent */}
          <div id="nine_1">
            {/* Row 1 */}
            <div id="nine_1_1">
              {/* 1 */}
              <div id="nine_1_1_img">
                <img src={u1} alt="NA" />
              </div>
              {/* 2 */}
              <div id="nine_1_1_img">
                <img src={u2} alt="NA" />
              </div>
              {/* 3 */}
              <div id="nine_1_1_img">
                <img src={u3} alt="NA" />
              </div>
              {/* 4 */}
              <div id="nine_1_1_img">
                <img src={u4} alt="NA" />
              </div>
            </div>
            {/* Row 2 */}
            <div id="nine_1_1">
              {/* 1 */}
              <div id="nine_1_1_img">
                <img src={u5} alt="NA" />
              </div>
              {/* 2 */}
              <div id="nine_1_1_img">
                <img src={u6} alt="NA" />
              </div>
              {/* 3 */}
              <div id="nine_1_1_img">
                <img src={u7} alt="NA" />
              </div>
              {/* 4 */}
              <div id="nine_1_1_img">
                <img src={u8} alt="NA" />
              </div>
            </div>
            {/* Row 3 */}
            <div id="nine_1_1">
              {/* 1 */}
              <div id="nine_1_1_img">
                <img src={u9} alt="NA" />
              </div>
              {/* 2 */}
              <div id="nine_1_1_img">
                <img src={u10} alt="NA" />
              </div>
              {/* 3 */}
              <div id="nine_1_1_img">
                <img src={u11} alt="NA" />
              </div>
              {/* 4 */}
              <div id="nine_1_1_img">
                <img src={u12} alt="NA" />
              </div>
            </div>
            {/* Row 4 */}
            <div id="nine_1_1">
              {/* 1 */}
              <div id="nine_1_1_img">
                <img src={u13} alt="NA" />
              </div>
              {/* 2 */}
              <div id="nine_1_1_img">
                <img src={u14} alt="NA" />
              </div>
              {/* 3 */}
              <div id="nine_1_1_img">
                <img src={u15} alt="NA" />
              </div>
              {/* 4 */}
              <div id="nine_1_1_img">
                <img src={u16} alt="NA" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* - Fifth - */}
      <div id="fifth">
        <div className='container-fluid' id="sub_fifth">
          {/* 1 */}
          <div id="fifth_1">
            <img src={flag} alt="NA" />
          </div>
          {/* 2 */}
          <div id="fifth_2">
            <h1><span>Learn</span> About Immigration</h1>
            <h1>Investment <span>Opportunities</span></h1>
            <p>Navigate the complex path of immigration investment with us, where dedication gains the rewards of a bright future.</p>
            {/* Point 1 */}
            <h5><i class="fa fa-check-circle"></i> Seamless Immigration Guidance</h5>
            <h5><i class="fa fa-check-circle"></i> Unlock Your Global Education Potential</h5>
            <h5><i class="fa fa-check-circle"></i> Invest Wisely, Thrive Globally</h5>
            <h5><i class="fa fa-check-circle"></i> Your Pathway to International Success</h5>
          </div>
        </div>
      </div>
      {/* - Sixth - */}
      <div id="sixth">
        <div id='sub_sixth' className="container-fluid">
          <h1>Why <span>Acha Parhlo</span></h1>
          <p>Explore our array of services, Ensuring your Journey to International Education is Smooth and Successful</p>
          <div id="six_1">
            {/* Row 1 */}
            <div id="six_1_1">
              {/* 1 */}
              <div id="six_1_1_box">
                <div id="six_box_1">
                  <div id="six_box_icon">
                    <i class="fa fa-graduation-cap"></i>
                  </div>
                  <h5>University Matching</h5>
                  <p>Find Your Ideal Academic Fit with University Matching</p>
                </div>
              </div>
              {/* 2 */}
              <div id="six_1_1_box">
                <div id="six_box_1">
                  <div id="six_box_icon">
                    <i class="fa fa-mobile"></i>
                  </div>
                  <h5>Consultation Conversation</h5>
                  <p>Connect with Our Experts for Personalized Guidance</p>
                </div>
              </div>
              {/* 3 */}
              <div id="six_1_1_box">
                <div id="six_box_1">
                  <div id="six_box_icon">
                    <i class="fa fa-calendar"></i>
                  </div>
                  <h5>Appointment Booking</h5>
                  <p>Book Appointments Effortlessly for Expert Guidance</p>
                </div>
              </div>
            </div>
            {/* Row 2 */}
            <div id="six_1_1">
              {/* 1 */}
              <div id="six_1_1_box">
                <div id="six_box_1">
                  <div id="six_box_icon">
                    <i class="fa fa-map-marker"></i>
                  </div>
                  <h5>Application Tracking</h5>
                  <p>Keep Updated on your Application Progress</p>
                </div>
              </div>
              {/* 2 */}
              <div id="six_1_1_box">
                <div id="six_box_1">
                  <div id="six_box_icon">
                    <i class="fa fa-users"></i>
                  </div>
                  <h5>Consultation Portal</h5>
                  <p>Elevate Efficiency with our Consultant Management Portal</p>
                </div>
              </div>
              {/* 3 */}
              <div id="six_1_1_box">
                <div id="six_box_1">
                  <div id="six_box_icon">
                    <i class="fa fa-id-card"></i>
                  </div>
                  <h5>Blogs</h5>
                  <p>Stay Informed and Engaged with our Learning Oriented Blogs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* - Seven - */}
      <div id="seven">
        <div className='container-fluid' id="sub_seven">
          <h4>Latest Report</h4>
          <h1>THE BLOG</h1>
          {/* 1 */}
          <div id="seven_1">
            {/* Box 1 */}
            <div id="seven_1_1">
              <div id="seven_1_1_img">
                <img src={map} alt="NA" />
              </div>
              <h2>Australia Visa News</h2>
              <p>Latest Announcements, Australia University Updates For International Student</p>
              <button>Continue Reading</button>
            </div>
            {/* Box 2 */}
            <div id="seven_1_1">
              <div id="seven_1_1_img">
                <img src={map_3} alt="NA" />
              </div>
              <h2>Health Care</h2>
              <p>Stay informed about the latest Updated Document for Health Insurance</p>
              <button>Continue Reading</button>
            </div>
            {/* Box 3 */}
            <div id="seven_1_1">
              <div id="seven_1_1_img">
                <img src={map_2} alt="NA" />
              </div>
              <h2>Explore Universities</h2>
              <p>Stay informed about the latest Admission opportunities for international students</p>
              <button>Continue Reading</button>
            </div>
          </div>
        </div>
      </div>
      {/* Eight - ( Footer ) */}
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
      {/* The End */}
    </div>
  )
}
