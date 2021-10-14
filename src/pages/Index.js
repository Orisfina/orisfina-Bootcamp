import React from 'react'
import NavBar from '../components/NavBar'
import ProjectBox from '../components/ProjectBox';
import DoYouKnow from '../images/youtube_img-small.png'
import ProjectImg1 from '../images/project_parallex-small.png'
import ProjectImg2 from '../images/project_myTunes.png'
import ProjectImg3 from '../images/project_acme.png'
import SlideShow from '../components/SlideShow';
import Button from '../components/Button';
import Footer from '../components/Footer';

function Index() {
     const projectDesc = [
          {
               ProjectImg1: {ProjectImg1},
               projectDesc1: 'A SIMPLE WEBSITE DEMONSTRATING THE POWER OF BACKGROUND ATTACHMENT PROPERTY- BEGINNER LEVEL',
               projectLink1: '/project1'
          },
          {
               ProjectImg2: {ProjectImg2},
               projectDesc2: 'A SIMPLE WEBSITE DEMONSTRATING THE POWER OF BACKGROUND ATTACHMENT PROPERTY- BEGINNER LEVEL',
               projectLink2: '/project2'
          },
          {
               ProjectImg3: {ProjectImg3},
               projectDesc3: 'A SIMPLE WEBSITE DEMONSTRATING THE POWER OF BACKGROUND ATTACHMENT PROPERTY- BEGINNER LEVEL',
               projectLink3: '/project3'
          }
     ]


     return (
          <>
          <div className="header">
           <NavBar /> 
          <SlideShow />
           {/* <div className="slideshow__bar t-center"><p>Trusted by Thousands of Developers</p> </div> */}
           </div>

           {/* What we about Section */}
           <section className="light container ">
                <h2 className='primary__text t-center pb-l'>Join one of the best coding bootcamps</h2>
                <p className='t-center'>
                    Orisfina Bootcamp is one of the fastest growing bootcamp in Auchi, Edo State Nigeria which provides you with all the mentorship from our Tutors that will take you from a complete begineer to an Advanced level. 
                    Since Orisfina Bootcamp started in 2019, we've consistently been regarded as one of the best coding bootcamps in Edo State by students and employers. Our Syllabus are structured to help your learning path easy as possible.
                </p>
               
           </section>

          {/* Why Orisfina Bootcamp */}
           <section className="dark container clip-bg">
                <h2 className='primary__text t-center pb-l'>Why Orisfina Bootcamp</h2>
                <div className="grid3 a-i-center">
                    
                    <div className="text-section">
                        <h3 className="tertiary-header t-center">
                        Get in-depth knowledge.</h3> 
                             <p className='t-center'>
                                   Learning to code means more than just memorizing syntax. Instead, we help you think like a real programmer.
                             </p>
                    </div>

                    <div className="text-section t-center">
                        <h3 className="tertiary-header t-center">
                              Get a helpful roadmap.
                        </h3> 
                         <p className='t-center'>
                               Like a career advisor, we guide you through each step. You’ll learn the right thing at the right time, all in one place.
                         </p>
                    </div>

                    <div className="text-section">
                        <h3 className="tertiary-header t-center">
                              Get job ready.
                        </h3> 
                         <p className='t-center'>
                              Gain practical experience as you go by creating portfolio-worthy projects that will help you land your next job.
                         </p>
                    </div>
                  
               </div> 
          </section>


          {/* Courses Offered*/}
           <section className="light container ">
                <h2 className='primary__text t-center pb-l'>Courses Offered</h2>
                <div className="grid3">
                    <div className="text-section">
                    <i class="pb-s fas fa-laptop-code fa-2x icon-color"></i>
                        <h3 className="tertiary-header">
                        Web Design (Frontend / Backend Development)</h3> 
                             <p className='t-justify'>
                                   You will learn the fundamentals of structuring a webpage layout using HTML5 and CSS3 so that you can create responsive and beautiful websites from scratch. This course will also teach you everything you need to know about Javascript and take you from Zero to Hero.
                                   Our Advanced class will cover technologies such as React, Sass, Bootstrap, Git and PHP for building full web applications.
                             </p>
                    </div>

                    <div className="text-section">
                    <i class="pb-s fas fa-layer-group fa-2x icon-color"></i>
                        <h3 className="tertiary-header">
                              Graphic Design
                         </h3> 
                             <p className='t-justify'>
                                   Master the fundamental skills needed to design visually appealing designs. In this course, you will be expose to Hands-on projects that will improve your portfolio and increase your chances of landing jobs offers after training. Other fundamentals such as Typography, color-theory, and positioning will be covered extensively.
                             </p>
                    </div>

                    <div className="text-section">
                    <i class="pb-s fas fa-search-dollar fa-2x  icon-color"></i>
                        <h3 className="tertiary-header">
                              SEO / Digital Marketing
                         </h3> 
                         <p className='t-justify'>
                             Learn the basis of Search Engine optimization (SEO) and increase organic traffic of your site / blog. Offer your skills to potential client while you make money. The course is opened to everyone regardless of your current knownledge about search engines
                         </p>
                    </div>
                    <div className="text-section">
                    <i class="pb-s fas fa-desktop fa-2x  icon-color" aria-hidden="true"></i>
                        <h3 className="tertiary-header">
                              Hardware Engineering
                         </h3> 
                         <p className='t-justify'>
                             Acquire the skills needed to be a computer Engineer with out practical base Syllabus. You will learn everything needed to troubleshoot a system and understand all the various error codes.You will also learn how to identify various parts of a system, and its functions. What are you waiting for? Classes start soon
                         </p>
                    </div>
                    <div className="text-section">
                    <i class=" pb-s fas fa-file-word fa-2x  icon-color" aria-hidden="true"></i>
                        <h3 className="tertiary-header">
                              Application Packages
                         </h3> 
                         <p className='t-justify'>
                              Are you a complete begineer or do you desire to advance your knowledge about Microsoft packages (MS Word, MS Excel, MS Access or MS Publisher)?       This course gives you all the training needed to increase your typing speed, create beautiful powerpoint slides and also perform calculations in Microsoft Excel. Our Syllabus is tailored to get you going irrespective of who you are.
                         </p>
                    </div>
                  
               </div> 
          </section>

          <section class=" container assurance dark t-center">
			<div class="assurance__heading">
				<h2 class="primary__text t-center p-t-medium pb-s">Still not sure? </h2>
				<p class="t-center pb-l">See what we've put in place for you</p>
			</div>
               <div className='grid2'>
			<div class="assurance__box">
				<div class="assurance__box--icon t-center p-t-large">
			
				<i class="fas fa-handshake fa-3x t-center icon-color flex pb-s perfect-center"></i>
				<h3 class="assurance__box--heading t-center p-t-small">Money Back Guarrante</h3>
				<p class="t-center">Are you still doubting if acquiring that skill is the right path for you?</p>
				<p class="t-center">Are you scared of loosing your hard earn money?
				We've got you covered here at Orisfina bootcamp. We offer our <strong>Students Money back Guarrantee Packages</strong></p>
				<p class="t-center ">Note: <strong>T &amp; C applies</strong></p>
				</div>
			</div>
               
			<div class="assurance__box">
				<div class="assurance__box--icon t-center p-t-large"></div>
				<i class="fas fa-money-check fa-3x t-center icon-color flex pb-s perfect-center"></i>
				<h3 class="t-center p-t-s">Installmental Payment</h3>
				<p class="t-center pt-s">
					Are you going through some financial chanlleges but still wants to acquire that skills? Here at Orisfina, We've tailored our training to suit everyone regardless of your financial level. 
				</p>
				<p class="t-center">You can pay your fees Installmentally</p>
				<p class="t-center">Note: <strong>T &amp; C applies</strong></p>
			</div>
               </div>
		</section>

          <section class=" container light">
			<h2 class="primary__text t-center pt-m pb-s">
                    Wait no further
               </h2>
			<p class="text-para t-center pb-m">
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

           {/* What you will be Building Section */}
           <section className="light container dark">
           <h2 className='primary__text t-center pb-l'>What you will be building</h2>
               <div className="grid3 a-i-center">
                    <ProjectBox projectLink1={projectDesc[0].projectLink1} projectDesc1={projectDesc[0].projectDesc1} projectImg={projectDesc[0].ProjectImg1.ProjectImg1} />

                    <ProjectBox projectLink1={projectDesc[1].projectLink2} projectDesc2={projectDesc[1].projectDesc2} projectImg={projectDesc[1].ProjectImg2.ProjectImg2} />

                    <ProjectBox projectLink1={projectDesc[2].projectLink3} projectDesc1={projectDesc[2].projectDesc3} projectImg={projectDesc[2].ProjectImg3.ProjectImg3} />
               </div>
           </section>

           <Footer />
           </>
     )
}

export default Index

