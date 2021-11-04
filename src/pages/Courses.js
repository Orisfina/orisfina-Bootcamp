import React from 'react'
import { Link } from 'react-router-dom'
import SlideshowShort from '../components/SlideshowShort'

function Courses() {
     return (
          <>
             <SlideshowShort />
             <main className='container'>
               <h3 className='pt-m'>UPCOMING SESSIONS</h3>
               <p>November 28th, 2021 - <Link to='/register' >Apply Now!</Link></p>
               <p>February 28th, 2022  - <Link to='/register' >Apply Now!</Link></p>
               <h4 className='t-center pt-l'>
                    Orisifna Computer Institute Teaches the Most In-Demand I.T Skills
               </h4>
               <section className='courses'>
                    <div className='course_box'>
                         <div className='icon-title flex'>
                              <h2 className='course_title'>Web Design</h2>
                         </div>
                         <p>
                               You will learn the fundamentals of structuring a webpage layout using HTML5 and CSS3 so that you can create responsive and beautiful websites from scratch. This course will also teach you everything you need to know about Javascript and take you from Zero to Hero. Our Advanced class will cover technologies such as React, Sass, Bootstrap, Git and PHP for building full web applications.
                         </p>
                    </div>
                    <div className='course_box'>
                         <div className='icon-title flex'>
                              <h2 className='course_title'>Graphic Design</h2>
                         </div>
                         <p>
                              Master the fundamental skills needed to design visually appealing designs. In this course, you will be expose to Hands-on projects that will improve your portfolio and increase your chances of landing jobs offers after training. Other fundamentals such as Typography, color-theory, and positioning will be covered extensively.
                         </p>
                    </div>
                    <div className='course_box'>
                         <div className='icon-title flex'>
                              <h2 className='course_title'>UI/UX Design</h2>
                         </div>
                         <p>
                              You will learn the fundamentals of structuring a webpage layout using HTML5 and CSS3 so that you can create responsive and beautifulwebsitesfrom scratch. This course will also teach you everything you need to know about Javascript and take you from Zero to Hero. Our Advanced class will cover technologies such as React, Sass, Bootstrap, Git and PHP for building full web
                              applications.
                         </p>
                    </div>
                    <div className='course_box'>
                         <div className='icon-title flex'>
                              <h2 className='course_title'>Application Packages</h2>
                         </div>
                         <p>
                              Are you a complete begineer or do you desire to advance your knowledge about Microsoft packages (MS Word, MS Excel, MS Access or MS Publisher)?This course gives you all the training needed to increase your typing speed, create beautiful powerpoint slides and also perform calculations in Microsoft Excel. Our Syllabus is tailored to get you going irrespective of who you are.
                         </p>
                    </div>
                    <div className='course_box'>
                         <div className='icon-title flex'>
                              <h2 className='course_title'>Mobile App Development</h2>
                         </div>
                         <p>
                              Are you a complete begineer or do you desire to advance your knowledge about Microsoft packages (MS Word, MS Excel, MS Access or MS Publisher)?
                              This course gives you all the training needed to increase your typing speed, create beautiful powerpoint slides and also perform calculations in Microsoft Excel. Our Syllabus is tailored to get you going irrespective of who you are.
                         </p>
                    </div>
                    <div className='course_box'>
                         <div className='icon-title flex'>
                              <h2 className='course_title'>Hardware Engineering</h2>
                         </div>
                         <p>
                              Acquire the skills needed to be a computer 
                              Engineer with out practical base Syllabus. You will learn everything needed to troubleshoot a system and understand all the various error codes. You will also learn how to identify various parts of a system, and its functions. What are you waiting for? Classes start soon
                         </p>
                    </div>
               </section>
             </main>
             
          </>
     )
}

export default Courses
