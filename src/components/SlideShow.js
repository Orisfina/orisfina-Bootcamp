import React from 'react'
import Register from '../pages/Register'
import SlidehowImg from '../images/slideshow_image.png'
import {
     BrowserRouter as Router,
     // Switch,
     Route,
     Link
   } from "react-router-dom";

function SlideShow() {
     return (
          <section className='slideshow-main container flex a-i-center'>
               <div className="slideshow__textBox">
                     <h1 className="primary__header white pb-s">
                          Secure your <br /> Future
                     </h1>
                     <p className="slideshow__desc pb-m white">
                         Become a Web Developer, UI/UX <br /> Designer or Graphic Designer from Scratch. <span className="break"> <br />We've got all it takes!</span> 
                     </p> 

                     <button className='regist'>Register</button>
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
