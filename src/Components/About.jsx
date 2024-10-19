import React from 'react';
import dana from "../Assets/dana.jpg"
const About = () => {
  return (
    <div id='about' className='about'>
        <div className='about-para'>
            <h1 className='abt'>About us</h1>
            <h2>""Excellence in Hardware Since 1993""</h2>
            <p>Our story began 31 years ago with a simple mission: to serve our community with the
                 finest products, exceptional customer service,
                 and expert advice. Since then, we've grown alongside our community, 
                 becoming a trusted name in quality and reliability. Our commitment remains unwavering, 
                 driven by a passion for meeting our customers' needs with integrity and care. Thank you
                  for allowing us to be a part of your journey-we look forward to many more years of serving you.</p>
        </div>
        <div className='about-image'>
            <img src={dana} alt='im'/>
        </div>
      
    </div>
  );
}

export default About;
