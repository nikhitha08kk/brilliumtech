import React from 'react';
import "./style.css";
import paintbrand from "../Assets/paintbrand.jpg"
import toolbrand from "../Assets/toolbrand.jpg";
import elebrand from "../Assets/elebrand.jpg";
import buildbrand from "../Assets/buildbrand.jpg";

const Brand = () => {
  return (
    <div id='brand' className=' brand'>
        <h1>Brand</h1>
        <div className='brand-img'>
            <div><img src={paintbrand} alt='b-1'/>
                {/* <div className='brand-name'>
                    <button>4 brands</button>
                    <h1>Paints</h1>
                </div> */}
                </div>
            <div><img src={toolbrand} alt='b-1'/>
            {/* <div className='brand-name'>
                    <button>4 brands</button>
                    <h1>tools</h1>
                </div> */}
                </div>
            <div><img src={elebrand} alt='b-1'/>
            {/* <div className='brand-name'>
                    <button>5 brands</button>
                    <h1>electricals</h1>
                </div> */}
            </div>
            <div><img src={buildbrand} alt='b-1'/>
            {/* <div className='brand-name'>
                    <button>3 brands</button>
                    <h1>building materials</h1>
                </div> */}
            </div>

        </div>
      
    </div>
  );
}

export default Brand;
