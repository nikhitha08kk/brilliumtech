import React from 'react';
import './style.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {

    // Slick slider settings
    const settings = {
      dots: true,               // Show dots for navigation
      infinite: true,           // Infinite loop
      speed: 500,               // Speed of transition
      slidesToShow: 3,          // Number of cards visible at a time (change this value as needed)
      slidesToScroll: 1,        // Number of slides to scroll per click
      autoplay: true,           // Autoplay the slides
      autoplaySpeed: 3000,      // Speed of autoplay in milliseconds
      arrows: true              // Show navigation arrows
    };

  return (
    <div className='testimonial'>
      <div><h1 className='test'>Testimonials</h1></div>
      <div>
        <div><h1 className='car-title'>Words from our customers</h1></div>
        <Slider {...settings}>
          <div className='col1'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Carus nibh mauris, nec turpis orci lectus. Suspendisse magna eget 
              nibh in turpis. Consequat duis diam locus arcu. 
              Faucibus venenatis felis id suscipit sit cursus pellentesque enim.
            </p>
          </div>
          <div className='col2'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Carus nibh mauris, nec turpis orci lectus. Suspendisse magna eget 
              nibh in turpis. Consequat duis diam locus arcu. 
              Faucibus venenatis felis id suscipit sit cursus pellentesque enim.
            </p>
          </div>
          <div className='col3'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Carus nibh mauris, nec turpis orci lectus. Suspendisse magna eget 
              nibh in turpis. Consequat duis diam locus arcu. 
              Faucibus venenatis felis id suscipit sit cursus pellentesque enim.
            </p>
          </div>
         
        </Slider>
      </div>
    </div> 
  );
}

export default Testimonials;
