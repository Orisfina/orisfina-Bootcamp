import React from 'react'
import testimonialImg from '../images/betty.jpg'

function Testimonial() {
    return (
        <>
        <section className="testimonial t-center">
        <h2 className=" primary__text white-heading">
                Testimonial
            </h2>
            <div className="grid2 grid2__collapse">
            <div id="testimonial4 " className="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x" data-ride="carousel" data-pause="hover" data-interval="5000" data-duration="2000">
             
             <div className="carousel-inner" role="listbox">
                 <div className="carousel-item active">
                     <div className="testimonial4_slide grid1-2">
                         <img src={testimonialImg } className="img-circle img-responsive" alt='testisfier' />
                         <div>
                         <p className='t-justify'>Joining Orisfina bootcamp was one of the best decisions i took. Their tutors are the best in town as they are always ready to explain in the most simplest  method. They are just so supportive. In less than 6 weeks i started building basic website. I recommend Orisfina bootcamp to anyone seeking to acquire a skill in web design</p>
                         <h4>Betty Yakubu</h4>
                         </div>
                         
                     </div>
                 </div>
             </div>
         </div>
         <div id="testimonial4 " className="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x" data-ride="carousel" data-pause="hover" data-interval="5000" data-duration="2000">
             
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <div className="testimonial4_slide grid1-2">
                            <img src={testimonialImg } className="img-circle img-responsive" alt='testisfier' />
                            <div>
                            <p className='t-justify'>Joining Orisfina bootcamp was one of the best decisions i took. Their tutors are the best in town as they are always ready to explain in the most simplest  method. They are just so supportive. In less than 6 weeks i started building basic website. I recommend Orisfina bootcamp to anyone seeking to acquire a skill in web design</p>
                            <h4>Daniel Ehizoje</h4>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            </div>
    </section>
    </>
    )
}

export default Testimonial
