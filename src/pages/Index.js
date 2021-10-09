import React from 'react'
import NavBar from '../components/NavBar'
import Section2Img from '../images/section1-image.png'
import ProjectBox from '../components/ProjectBox';
import DoYouKnow from '../images/youtube_img-small.png'
import ProjectImg1 from '../images/project_parallex-small.png'
import ProjectImg2 from '../images/project_myTunes.png'
import ProjectImg3 from '../images/project_acme.png'
import SlideShow from '../components/SlideShow';

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
           <section className="light container ptb-4">
                <h1 className='primary__text t-center'>Who We Are</h1>
               <div className="grid2 a-i-center">
                    <div className="img-section">
                         <img src={Section2Img} alt="What Orisifna Bootcamp is about" />
                    </div>
                    <div className="text-section">
                        <h2 className="secondary-header">
                             See what we're about</h2> 
                             <p>
                             Become who you want to be with OpenClassrooms.
                              Choose your own career path and earn a diploma online with 
                              hands-on projects and weekly one-on-one mentorship sessions 
                              with a dedicated professional in your field. Gain experience on your CV
                              with OpenClassrooms apprenticeship programs and earn a salary while you learn.
                             </p>
                    </div>
                  
               </div>
           </section>

           {/* Section Do you know */}
           <section className="dark container">
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
           <section className="dark container">
               <h2 className="secondary-header">
                    What you will be building
               </h2> 
               <div className="grid3 a-i-center">
                    <ProjectBox projectLink1={projectDesc[0].projectLink1} projectDesc1={projectDesc[0].projectDesc1} projectImg={projectDesc[0].ProjectImg1.ProjectImg1} />

                    <ProjectBox projectLink1={projectDesc[1].projectLink2} projectDesc2={projectDesc[1].projectDesc2} projectImg={projectDesc[1].ProjectImg2.ProjectImg2} />

                    <ProjectBox projectLink1={projectDesc[2].projectLink3} projectDesc1={projectDesc[2].projectDesc3} projectImg={projectDesc[2].ProjectImg3.ProjectImg3} />
               </div>
           </section>
           </>
     )
}

export default Index

