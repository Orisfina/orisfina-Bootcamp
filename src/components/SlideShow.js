import React from 'react'
/*import Register from '../pages/Register'
import {
     BrowserRouter as Router,
     // Switch,
     Route,
     Link
*/
import Button from './Button';

function SlideShow() {
     return (
          <>
          <section className='slideshow-main container flex a-i-center'>
               <div className="slideshow__textBox">
                     <h2 className="title white pb-s">
                         <span className='yellow'>Learn</span> the easy way?
                     </h2>
                     <h1 className="slideshow__desc pb-m white">
                          Get all the training needed to become a Web Developer,  <br /> UI/UX Designer or Graphic Designer from Scratch. <span className="break"> <br />We've got all it takes!</span> 
                     </h1> 

                   <Button cName='btn btn__yellow ' text='Apply Now' link='/register' />
                </div> 

               { /*
                     <div className="slideshow__side2">
                    <img src={SlidehowImg} alt="Secure your future by becoming an I.T specialist through Orisfina Bootcamp" className="slideshow__img" />
               </div>     
               */}
           </section>
           <div className="slideshow__bar t-center"><p>Trusted by Thousands of Developers</p> </div> 
           </>
     )
}

export default SlideShow
