import React, { useEffect, useState } from 'react';
import e1 from './Pics/e1.jpg';
import e2 from './Pics/e2.jpg';
import e3 from './Pics/e3.jpg';
import e4 from './Pics/e4.jpg';
import e5 from './Pics/e5.jpg';

export default function ImgSlider() {
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
  // Main Body
  return (
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
  );
};

