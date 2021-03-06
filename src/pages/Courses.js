import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import SlideshowShort from '../components/SlideshowShort'

function Courses() {
     return (
          <>
             <SlideshowShort title='Our Courses' color1='ONLINE' color2='ONSITE' text1='AND' text2='TRAINING' />
             <main className='course-section container'>
               <h3 className='pt-m pb-s'>UPCOMING SESSIONS</h3>
               <p>April 4th, 2022 - <Link to='/register' >Apply Now!</Link></p>
               <p className='pb-s'>April 25th, 2022  - <Link to='/register' >Apply Now!</Link></p>
               <h2 className='t-center pb-s pt-m course_heading main-color'>
                    Orisifna Computer Institute Teaches the Most In-Demand I.T Skills
               </h2>
               <h3 className='course_sub-heading t-center'>Take a bold step now and Select a course</h3>
               <section className='courses courses-section'>
                    <div className='course_box'>
                         <div className='icon-title flex'>
                              <h2 className='course_title'>Web Design</h2>
                         </div>
                         <p className='mb-s'>
                               You will learn the fundamentals of structuring a webpage layout using HTML5 and CSS3 so that you can create responsive and beautiful websites from scratch. This course will also teach you everything you need to know about Javascript and take you from Zero to Hero. Our Advanced class will cover technologies such as React, Sass, Bootstrap, Git and PHP for building full web applications.
                         </p>
                         <Button cName='btn blog_btn inline-block' link='/web-development'>Know More</Button>
                    </div>
                    <div className='course_box'>
                         <div className='icon-title flex'>
                              <h2 className='course_title'>Graphic Design</h2>
                         </div>
                         <p className='mb-s'>
                              Master the fundamental skills needed to design visually appealing designs. In this course, you will be expose to Hands-on projects that will improve your portfolio and increase your chances of landing jobs offers after training. Other fundamentals such as Typography, color-theory, and positioning will be covered extensively.
                         </p>
                         <Button cName='btn blog_btn inline-block' link='/graphic-design-career'>Know More</Button>
                    </div>
                    <div className='course_box'>
                         <div className='icon-title flex'>
                              <h2 className='course_title'>UI/UX Design</h2>
                         </div>
                         <p className='mb-s'>
                              You will learn the fundamentals of structuring a webpage layout using HTML5 and CSS3 so that you can create responsive and beautifulwebsitesfrom scratch. This course will also teach you everything you need to know about Javascript and take you from Zero to Hero. Our Advanced class will cover technologies such as React, Sass, Bootstrap, Git and PHP for building full web
                              applications.
                         </p>
                         <Button cName='btn blog_btn inline-block' link='/graphic-design-career'>Know More</Button>
                    </div>
                    <div className='course_box'>
                         <div className='icon-title flex'>
                              <h2 className='course_title'>Application Packages</h2>
                         </div>
                         <p className='mb-s'>
                              Are you a complete begineer or do you desire to advance your knowledge about Microsoft packages (MS Word, MS Excel, MS Access or MS Publisher)?This course gives you all the training needed to increase your typing speed, create beautiful powerpoint slides and also perform calculations in Microsoft Excel. Our Syllabus is tailored to get you going irrespective of who you are.
                         </p>
                         <Button cName='btn blog_btn inline-block' link='/application-package-learning-path'>Know More</Button>
                    </div>
                    <div className='course_box'>
                         <div className='icon-title flex'>
                              <h2 className='course_title'>Mobile App Development</h2>
                         </div>
                         <p className='mb-s'>
                              Are you a complete begineer or do you desire to advance your knowledge about Microsoft packages (MS Word, MS Excel, MS Access or MS Publisher)?
                              This course gives you all the training needed to increase your typing speed, create beautiful powerpoint slides and also perform calculations in Microsoft Excel. Our Syllabus is tailored to get you going irrespective of who you are.
                         </p>
                         <Button cName='btn blog_btn inline-block' link='/#'>Coming Soon</Button>
                    </div>
                    <div className='course_box'>
                         <div className='icon-title flex'>
                              <h2 className='course_title'>Hardware Engineering</h2>
                         </div>
                         <p className='mb-s'>
                              Acquire the skills needed to be a computer 
                              Engineer with out practical base Syllabus. You will learn everything needed to troubleshoot a system and understand all the various error codes. You will also learn how to identify various parts of a system, and its functions. What are you waiting for? Classes start soon
                         </p>
                         <Button cName='btn blog_btn inline-block' link='/#'>Coming Soon</Button>
                    </div>
               </section>
             </main>
          <div className="apply-now">
                <div className="z-indez-high">
                <h2>What are you still waiting for?</h2>
               <p>Application for our 12-weeks bootcamp for all courses starting April 4<sup>th </sup>is now open</p>
               <Button cName='btn blog_btn inline-block' link='/register'>Join Others Now</Button>
                </div>
              <div className="bg-overlay"></div>
           </div>
          {/* <div className='question'>
               <h2 className='primary-header'>Do you have a Question?</h2>
               <h3>We would love to Hear from You</h3>
          </div>
              */}
          </>
     )
}

export default Courses
