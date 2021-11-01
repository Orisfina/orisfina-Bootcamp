import React from 'react'
import NavBar from '../components/NavBar'
import ProjectBox from '../components/ProjectBox';
import DoYouKnow from '../images/youtube_img-small.png'
import SlideShow from '../components/SlideShow';
import Button from '../components/Button';
import Footer from '../components/Footer';
import best from '../images/slide-1.jpg'
import knowledge from '../images/knowledge.svg'
import roadmap from '../images/roadmap.svg'
import jobReady from '../images/job-ready.svg'
import projects from '../projects'

function Index() {
   
     return (
          <>
          <div className="header">
           <NavBar /> 
          <SlideShow />
           {/* <div className="slideshow__bar t-center"><p>Trusted by Thousands of Developers</p> </div> */}
           </div>

           {/* What we about Section */}
           <section className="light container ">
                <h2 className='primary-header  primary__text t-center pb-l'>
                Join one of the <span> best coding</span> bootcamps
                </h2>
               <div className='grid1-2'>
                    <img src={best} className='best' alt="join one of the best coding bootcamp in Auchi"/>
                <p className='t-left'>
                    Orisfina Bootcamp is one of the fastest growing bootcamp in Auchi, Edo State Nigeria which provides you with all the mentorship from our Tutors that will take you from a complete begineer to an Advanced level. 
                    Since Orisfina Bootcamp started in 2019, we've consistently been regarded as one of the best coding bootcamps in Edo State by students and employers. Our Syllabus are structured to help your learning path easy as possible.
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
                        Get in-depth knowledge.</h3> 
                         <p className='t-center-mobile'>
                               Learning to code means more than just memorizing syntax. Instead, we help you think like a real programmer.
                         </p>
                        
                    </div>

                    <div className="text-section">
                    <img src={roadmap} className='inline' alt='acquire web design knowledge at orisfina bootcamp'/>
                         <h3 className="tertiary-header">
                              Get a helpful roadmap.
                        </h3> 
                         <p className='t-center-mobile'>
                               Like a career advisor, we guide you through each step. You’ll learn the right thing at the right time.
                               {/*  all in one place. */}
                         </p>
                    </div>

                    <div className="text-section">
                          <img src={jobReady} className='inline' alt='acquire web design knowledge at orisfina bootcamp and start wining jobs'/>     
                        <h3 className="tertiary-header">
                              Get job ready.
                        </h3> 
                         <p className='t-center-mobile'>
                              Gain practical experience as you go by creating portfolio-worthy projects that will help you land your next job.
                         </p>
                    </div>
                  
               </div> 
          </section>

           {/* What you will be Building Section */}
           <section className="light container">
           <h2 className='primary__text t-center pb-l uppercase'>What you will be <span> building</span></h2>
           <ProjectBox project={projects} />
           </section>


          {/* Courses Offered*/}
           <section className="light container t-center dark">
                <h2 className='primary-header  primary__text t-center  uppercase' >Courses Offered</h2>
                <p className='tertiary-header t-center pb-l pt-s'>Don't just watch, choose a skill for yourself</p>
                <div className="grid3">
                    <div className="text-section">
                    <i className="pb-s fas fa-laptop-code fa-3x icon-color"></i>
                        <h3 className="tertiary-header">
                        Frontend Development </h3> 
                             <p className='t-justify'>
                                   {/* A front-end developer links together
                                   the world of design and technology,
                                   packaging up the utility of the back
                                   end in an inviting way for users to
                                   interact with. They take website design 
                                   files and convert them into HTML, 
                                   JavaScript (JS) and/or CSS code — the
                                   core elements of front-end development.
                                   This includes design/layout, content, 
                                   buttons, images, navigation, and 
                                   internal links. */}
                                   You will learn the fundamentals of structuring a webpage layout using HTML5 and CSS3 so that you can create responsive and beautiful websites from scratch. 
                             </p>
                             <Button cName='btn btn__link__red flex mt-s' text='Read More' />
                    </div>

                    <div className="text-section">
                    <i className="pb-s fas fa-layer-group fa-3x icon-color"></i>
                        <h3 className="tertiary-header">
                              Graphic Design
                         </h3> 
                             <p className='t-justify'>
                                   Master the fundamental skills needed to design visually appealing designs. In this course, you will be expose to Hands-on projects that will improve your portfolio.
                             </p>
                             <Button cName='btn btn__link__red flex mt-s' text='Read More' />
                    </div>
                              
                    <div className="text-section">
                    <i className="pb-s fas fa-search-dollar fa-3x  icon-color"></i>
                        <h3 className="tertiary-header">
                              Backend Development
                         </h3> 
                         <p className='t-justify'>
                              A back-end developer is someone who
                              builds and maintains the technology 
                              needed to power the components which
                              enable the user-facing side of the 
                              website to exist. 
                         </p>
                         <Button cName='btn btn__link__red flex mt-s' text='Read More' />
                    </div>

                    <div className="text-section">
                    <i className="pb-s fas fa-search-dollar fa-3x  icon-color"></i>
                        <h3 className="tertiary-header">
                              SEO / Digital Marketing
                         </h3> 
                         <p className='t-justify'>
                             Learn the basis of Search Engine optimization (SEO) and increase organic traffic of your site / blog. Offer your skills to potential client while you make money. The course is opened to everyone.
                         </p>
                         <Button cName='btn btn__link__red flex mt-s' text='Read More' />
                    </div>
                     <div className="text-section">
                    <i className="pb-s fas fa-desktop fa-3x  icon-color" aria-hidden="true"></i>
                        <h3 className="tertiary-header">
                              UI/UX Designer
                         </h3> 
                         <p className='t-justify'>
                              As an UI-UX Designer , you will be responsible for delivering the best online user experience, 
                              which makes your role extremely important
                              for our success and ensuring customer 
                              satisfaction and loyalty.
                         </p>
                         <Button cName='btn btn__link__red flex mt-s' text='Read More' />
                    </div> 

                    <div className="text-section">
                    <i className=" pb-s fas fa-file-word fa-3x  icon-color" aria-hidden="true"></i>
                        <h3 className="tertiary-header">
                              Application Packages
                         </h3> 
                         <p className='t-justify'>
                                   This course gives you all the training needed to increase your typing speed, create beautiful powerpoint slides and also perform calculations in Microsoft Excel. Our Syllabus is tailored to get you going irrespective of who you are.
                         </p>
                         <Button cName='btn btn__link__red flex mt-s' text='Read More' />
                    </div>
                  
               </div> 
          </section>

          <section className=" container assurance t-center">
			<div className="assurance__heading">
				<h2 className="primary-header  primary__text t-center  uppercase">Still not sure? </h2>
				<p className="tertiary-header t-center pb-l pt-s">See what we've put in place for you</p>
			</div>
               <div className='grid2'>
			<div className="assurance__box">
				<div className="assurance__box--icon t-center p-t-large">
			
				<i className="fas fa-handshake fa-3x t-center icon-color flex pb-s perfect-center"></i>
				<h3 className="assurance__box--heading t-center p-t-small">Money Back Guarrante</h3>
				<p className="t-center">Are you still doubting if acquiring that skill is the right path for you? Are you scared of loosing your hard earn money?
				We've got you covered here at Orisfina bootcamp. We offer our <strong>Students Money back Guarrantee Packages</strong></p>
				<p className="t-center ">Note: <strong>T &amp; C applies</strong></p>
				</div>
			</div>
               
			<div className="assurance__box">
				<div className="assurance__box--icon t-center p-t-large"></div>
				<i className="fas fa-money-check fa-3x t-center icon-color flex pb-s perfect-center"></i>
				<h3 className="t-center p-t-s">Installmental Payment</h3>
				<p className="t-center pt-s">
					Are you going through some financial chanlleges but still wants to acquire that skills? Here at Orisfina, We've tailored our training to suit everyone regardless of your financial level. 
				</p>
				<p className="t-center">You can pay your fees Installmentally</p>
				<p className="t-center">Note: <strong>T &amp; C applies</strong></p>
			</div>
               </div>
		</section>

          <section className=" container dark">
			<h2 className="primary__text t-center pt-m pb-s">
                    Wait no further
               </h2>
			<p className="text-para t-center pb-m">
                    Wait no further. Take a step now and join hundreds of others worldwide in any our courses. Our programme are suited for you (Week days or Weekends
               </p>
			<Button text='Enjoy 20% discount Now!' cName='btn btn__primary' />
		</section>


          {/* Have a Question? */}
          <section className="bc-primary-color container clip-bg">
                <h2 className='primary__text t-center pb-s white'>
                     Have questions? Join our community
                </h2> 
               <div className="text-section pr-l-6 font2rem">
                    <p className='t-center'>
                         The Orisfina community is a great place to ask questions.
                    </p>
                    <p className='t-center'>
                         It is filled with current students, alumni, mentors, instructors, and staff.
                    </p>
               </div>
               <div className='flex perfect-center mt-m'>
                    <Button cName='btn btn__secondary bold' text='Join our Community' />
               </div>
               
          </section>

           {/* Section Do you know */}
           <section className="light container clip-bg">
                <div className="grid2">
                    <div className="img-section">
                         <img src={DoYouKnow} alt="What Orisifna Bootcamp is about" />
                    </div>
                     <div className="text-section">
                         <h2 className="secondary-header">
                              Do you know you can become a Web Developer in 12 Weeks?
                         </h2> 
                         <p>
                              Acquiring a 4 years degree is no longer a requirement to becoming a 
                              Web developer. Here at Orisfina Bootcamp, our syllabus have ben structured
                              to suit you no matter your current level (complete Novice or intermediate). 
                              Our Syllabus are purely 20% Theory and 80% Practical.
                              We believe the goal of many coding bootcamp attendees is to transition into 
                              a career in web development. This is the reason why our Syllabus are tailored 
                              to helping you become one in just 12 Weeks
                         </p>
                     </div>
               </div>
           </section>

          

           <Footer />
           </>
     )
}

export default Index