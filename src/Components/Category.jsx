import React from 'react';
import tools from "../Assets/tools.jpg";
import paint from "../Assets/paint.jpg";
import build from "../Assets/build.jpg";
import electrical from "../Assets/electrical.jpg";
import plumb from "../Assets/plumb.jpg";
import "./style.css"

const Category = () => {
  return (
    <div id="category" className='category'>
        <h1 className='cat-title'>Category</h1>
        <div className='cat-img'>
            <div>
                <img src={tools} alt='tools' />
                <p className='cat-na'>Tools</p>
            </div>
            <div>
                <img src={paint} alt='paint'/>
                <p className='cat-na'>Paint & supplies</p>
            </div>
            <div>
                <img src={build} alt='build'/>
                <p className='cat-na'>Building Materials</p>
            </div>
            <div>
                <img src={electrical} alt='Ele'/>
                <p className='cat-na'>Electrical Supplies</p>
            </div>
            <div>
                <img src={plumb} alt='plu'/>
                <p className='cat-na'>Plumbing Supplies</p>
            </div>
        </div>
    </div>
  );
}

export default Category;
