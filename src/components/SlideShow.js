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
          <section className='slideshow-main container flex a-i-center'>
               <div className="slideshow__textBox">
                     <h2 className="primary__header white pb-s">
                          Secure your <br /> Future
                     </h2>
                     <h1 className="slideshow__desc pb-m white">
                         Become a Web Developer, UI/UX <br /> Designer or Graphic Designer from Scratch. <span className="break"> <br />We've got all it takes!</span> 
                     </h1> 

                   <Button cName='btn btn__primary' text='Read More' />
                </div> 

               { /*
                     <div className="slideshow__side2">
                    <img src={SlidehowImg} alt="Secure your future by becoming an I.T specialist through Orisfina Bootcamp" className="slideshow__img" />
               </div>     
               */}
              
                
           </section>
     )
}

export default SlideShow
