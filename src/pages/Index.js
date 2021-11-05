import React from 'react'
import ProjectBox from '../components/ProjectBox';
import DoYouKnow from '../images/Coding _Monochromatic.png'
import SlideShow from '../components/SlideShow';
import Button from '../components/Button';
import best from '../images/slide-1.jpg'
import knowledge from '../images/knowledge.svg'
import roadmap from '../images/roadmap.svg'
import jobReady from '../images/job-ready.svg'
import projects from '../projects'
import Testimonial from '../components/Testimonial';
import blogImg from '../images/portfolio-website-tips-freelance-developer.jpg'

function Index() {
   
     return (
          <>
          <div className="header">
          <SlideShow />
           </div>

           {/* What we about Section */}
           <section className="light container">
                <h2 className='primary-header  primary__text t-center pb-l'>
                Join one of the <span> best coding</span> bootcamps
                </h2>
               <div className='grid1-2'>
                    <img src={best} className='best' alt="join one of the best coding bootcamp in Auchi"/>
                <p className='t-left'>
                    Orisfina Bootcamp is one of the fastest growing bootcamp in Auchi, Edo State Nigeria which provides you with all the mentorship from our Tutors that will take you from a complete begineer to an Advanced level. 
                    Since Orisfina Bootcamp started in 2019, we've consistently been regarded as one of the best coding bootcamps in Edo State by students and employers.  
                    <span> 
                      Here at Orisfina Bootcamp, our syllabus have ben structured to suit you no matter your current level (complete Novice or intermediate). Our Syllabus are purely 20% Theory and 80% Practical. We believe the goal of many coding bootcamp attendees is to transition into a career in web development. This is the reason why our Syllabus are tailored to helping you become one in just 12 Weeks
                    </span>
                </p>
              </div> 
           </section>

          {/* Why Orisfina Bootcamp */}
           <section className="dark container clip-bg">
                <h2 className='primary-header  primary__text t-center pb-l'>Why <span>Orisfina</span> Bootcamp</h2>
                <div className="grid3">
                    
                    <div className="text-section">
                         <img src={knowledge} className='inline' alt='acquire web design knowledge at orisfina bootcamp'/>
                        <h3 className="tertiary-header">
                        100% in-depth knowledge.</h3> 
                         <p className='t-center-mobile'>
                               Learning to code means more than just memorizing syntax. Instead, we help you think like a real programmer.
                         </p>
                        
                    </div>

                    <div className="text-section">
                    <img src={roadmap} className='inline' alt='acquire web design knowledge at orisfina bootcamp'/>
                         <h3 className="tertiary-header">
                              We Provide a helpful roadmap.
                        </h3> 
                         <p className='t-center-mobile'>
                               Like a career advisor, we guide you through each step. You’ll learn the right thing at the right time.
                               {/*  all in one place. */}
                         </p>
                    </div>

                    <div className="text-section">
                          <img src={jobReady} className='inline' alt='acquire web design knowledge at orisfina bootcamp and start wining jobs'/>     
                        <h3 className="tertiary-header">
                             Gain practical Experience
                        </h3> 
                         <p className='t-center-mobile'>
                              Gain practical experience as you go by creating portfolio-worthy projects that will help you land your next job.
                         </p>
                    </div>
                  
               </div> 
          </section>

           {/* What you will be Building Section */}
           <section className="light container clip-bg">
           <h2 className='primary__text t-center pb-l uppercase'>What you will be <span> building</span></h2>
           <ProjectBox project={projects} />
           </section>


          {/* Courses Offered*/}
           <section className="container bc-primary-color">
                <h2 className='primary-header  primary__text t-center  uppercase white' >Courses Offered</h2>
                <p className='tertiary-header t-center pb-l pt-s white'>Don't just watch, choose a skill for yourself</p>
                <div className="grid3">
                    <div className="text-section text-section__courses">
                    <i className="pb-s fas fa-laptop-code fa-3x icon-color"></i>
                        <h3 className="tertiary-header">
                        Frontend Development </h3> 
                             {/* <p className='t-justify'>
                                  A front-end developer links together
                                   the world of design and technology,
                                   packaging up the utility of the back
                                   end in an inviting way for users to
                                   interact with. They take website design 
                                   files and convert them into HTML, 
                                   JavaScript (JS) and/or CSS code — the
                                   core elements of front-end development.
                                   This includes design/layout, content, 
                                   buttons, images, navigation, and 
                                   internal links. 
                                   You will learn the fundamentals of structuring a webpage layout using HTML5 and CSS3 so that you can create responsive and beautiful websites from scratch. 
                             </p> */}
                             <Button cName='btn btn__link__red flex mt-s' text='Read More' link='frontend-development' />
                    </div>

                    <div className="text-section text-section__courses">
                    <i className="pb-s fas fa-layer-group fa-3x icon-color"></i>
                        <h3 className="tertiary-header">
                              Graphic Design
                         </h3> 
                            {/*  <p className='t-justify'>
                                   Master the fundamental skills needed to design visually appealing designs. In this course, you will be expose to Hands-on projects that will improve your portfolio.
                             </p> */}
                             <Button cName='btn btn__link__red flex mt-s' text='Read More' link='graphic-design' />
                    </div>
                              
                    <div className="text-section text-section__courses">
                    <i className="pb-s fas fa-search-dollar fa-3x  icon-color"></i>
                        <h3 className="tertiary-header">
                              Backend Development
                         </h3> 
                         {/* <p className='t-justify'>
                              A back-end developer is someone who
                              builds and maintains the technology 
                              needed to power the components which
                              enable the user-facing side of the 
                              website to exist. 
                         </p> */}
                         <Button cName='btn btn__link__red flex mt-s' text='Read More' link='backend-development' />
                    </div>

                    <div className="text-section text-section__courses">
                    <i className="pb-s fas fa-search-dollar fa-3x  icon-color"></i>
                        <h3 className="tertiary-header">
                              SEO / Digital Marketing
                         </h3> 
                         {/* <p className='t-justify'>
                             Learn the basis of Search Engine optimization (SEO) and increase organic traffic of your site / blog. Offer your skills to potential client while you make money. The course is opened to everyone.
                         </p> */}
                         <Button cName='btn btn__link__red flex mt-s' text='Read More' link='seo'/>
                    </div>
                     <div className="text-section text-section__courses">
                    <i className="pb-s fas fa-desktop fa-3x  icon-color" aria-hidden="true"></i>
                        <h3 className="tertiary-header">
                              UI/UX Designer
                         </h3> 
                         {/* <p className='t-justify'>
                              As an UI-UX Designer , you will be responsible for delivering the best online user experience, 
                              which makes your role extremely important
                              for our success and ensuring customer 
                              satisfaction and loyalty.
                         </p> */}
                         <Button cName='btn btn__link__red flex mt-s' text='Read More' link='uiux' />
                    </div> 

                    <div className="text-section text-section__courses">
                    <i className=" pb-s fas fa-file-word fa-3x  icon-color" aria-hidden="true"></i>
                        <h3 className="tertiary-header">
                              Application Packages
                         </h3> 
                         {/* <p className='t-justify'>
                                   This course gives you all the training needed to increase your typing speed, create beautiful powerpoint slides and also perform calculations in Microsoft Excel. Our Syllabus is tailored to get you going irrespective of who you are.
                         </p> */}
                         <Button cName='btn btn__link__red flex mt-s' link='application-package' text='Read More' />
                    </div>
                  
               </div> 
          </section>
          {/* Section Do you know */}
          <section className="light container clip-bg">
               <div className='grid21'>
                     <div className="text-section a-item">
                         <h2 className="rimary-header  primary__text pb-l">
                              Do you know you can become a Web Developer in<span className='primary-color'> 12 Weeks?</span>
                         </h2> 
                          <p className='t-left'>
                              Acquiring a 4 years degree is no longer a requirement to becoming a 
                              Web developer. Here at Orisfina Bootcamp, our syllabus have ben structured
                              to suit you no matter your current level (complete Novice or intermediate). 
                              Our Syllabus are purely 20% Theory and 80% Practical.
                              We believe the goal of many coding bootcamp attendees is to transition into 
                              a career in web development. This is the reason why our Syllabus are tailored 
                              to helping you become one in just 12 Weeks
                         </p> 
                         <Button cName='btn btn__link__red flex mt-s' text='Start Free Trial' link='/register' />
                     </div>
                     <div>
                          <img src={DoYouKnow} alt='Becoming a web developer has never been so easy in the past like this. Get all you need to know at Orisfina bootcamp and become a web developer easily' className='doKnowImg '/>
                    </div>
               </div>
           </section>
          {/* Testimonial */}
           <Testimonial />
           <section className='container application'>
               <div className='text t-center'>
                    <div className='white-bg'>
                    <p className='primary__text pb-m'>
                    Application for our 12-weeks bootcamp for all courses starting <span className='primary-color'> November 25th, 2021</span> is now open
                    </p>
                    <Button cName='btn btn__link__red mt-l' text='Apply Now' link='/register' />
               </div>
               </div>
               <div className='bg-overlay'></div>
          </section>
          
          {/* BLog */}
          <section className='container blog'>
          <h2 className="primary-header t-center primary__text pb-l"> Recent Blog Post</h2> 
          <div className='grid3 blog__grid3'>
               <div className='blog'>
                    <img className='blog__img' src={blogImg} alt='how to start freelancing' />
                    <h3 className='blog__title'>
                    Portfolio Website Tips for Freelance Developers
                    </h3>
                    <p className='blog__intro pb-s'>
                    How to build a winning Portfolio Website as a Freelance Developer. All you need to know.
                    </p>
                    <Button cName='btn btn__link__red' link='/register' text='Read Article' />
               </div>
               <div className='blog'>
                    <img className='blog__img' src={blogImg} alt='how to start freelancing' />
                    <h3 className='blog__title'>
                         How to Start a Freelance 
                         Web Design Business
                    </h3>
                    <p className='blog__intro pb-s'>
                    Here's how to start a freelance web design business with no experience from home (or anywhere). A 4,300+ word article with actionable tips
                    </p>
                    <Button cName='btn btn__link__red' text='Read Article' link='/register' />
               </div>
               <div className='blog'>
                    <img className='blog__img' src={blogImg} alt='how to start freelancing' />
                    <h3 className='blog__title'>
                    How to Start Freelancing as a Web Developer in 2021
                    </h3>
                    <p className='blog__intro pb-s'>
                    A detailed guide on how to become a successful freelance web developer as a beginner in 2021 and beyond. All you need to know...
                    </p>
                    <Button cName='btn btn__link__red' link='/register' text='Read Article' />
               </div>
          </div>
          </section>
           </>
     )
}

export default Index