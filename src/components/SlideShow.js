import right from '../images/project3.jpg'
import Button from './Button';

function SlideShow() {
     return (
          <section className='slideshow-main container flex a-i-center'>
               <div className="grid23">
                    <div className="text">
                         <h1 className="slideshow__title">
                              Learn how to <div className="break">Design a Website
                                   </div> from scratch
                         </h1>
                         <p className="slideshow__desc">
                         Become an expert today at building responsive, and attractive websites with our project based system of learning capable of taking you from a complete beginner to a Job ready Level. </p>
                         <Button link='/register' cName='btn_register'>Join Now</Button>
                    </div>
                    <div className="right">
                         <img src={right} alt="orisfina computer institute students smiling" className="slideshow__right hide-on-mobile" />
                    </div>
                    
               </div>
          </section>
     )
}

export default SlideShow
