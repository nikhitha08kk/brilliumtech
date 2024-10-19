import React from 'react';
import tools from "../Assets/tools.jpg";
import paint from"../Assets/paint.jpg";
import build from "../Assets/build.jpg";
import electrical from "../Assets/electrical.jpg";
import plumb from "../Assets/plumb.jpg"
const Category = () => {
  return (
    <div className='category'>
        <h1>Catergory</h1>
        <div className='cat-img'>
      <div>
        <img src={tools} alt='tools' />
        <p>Tools</p>
      </div>
      <div>
      <img src={paint} alt='paint'/>
      <p>Paint & supplies</p>
      </div>
      <div>
      <img src={build} alt='build'/>
      <p>Building Materials</p>
      </div>
      <div>
      <img src={electrical} alt='Ele'/>
      <p>Electrical Supplies</p>
      </div>
      <div>
      <img src={plumb} alt='plu'/>
      <p>Plumbing Supplies</p>
      </div>
      </div>
    </div>
  );
}

export default Category;

