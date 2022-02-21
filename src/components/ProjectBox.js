import React from 'react'
import { Link } from 'react-router-dom';
   import ProjectImg1 from '../images/project.jpg'
     import ProjectImg2 from '../images/project2.jpg'
     import ProjectImg3 from '../images/project3.jpg' 
//    import projects from '../projects'


function ProjectBox(projects) {
               return(
                    <>
                         <div className="grid3 a-i-center">
                         <div className='project-box' key='1'>
                                   <img className='project-box__img' src={ProjectImg1} alt='A SIMPLE WEBSITE DEMONSTRATING THE POWER OF BACKGROUND ATTACHMENT PROPERTY- BEGINNER LEVEL' />
                                   <p className='t-justify project-box__desc'>A simple website demonstrating the power of background attachment property - begineer Level</p>
                                   <Link to='/project1' className='btn__link btn__link__red' >
                                        Read More
                                   </Link>
                              </div>
                              <div className='project-box' key='2'>
                                   <img className='project-box__img' src={ProjectImg2} alt='A SIMPLE WEBSITE DEMONSTRATING THE POWER OF BACKGROUND ATTACHMENT PROPERTY- BEGINNER LEVEL' />
                                   <p className='t-justify project-box__desc'>A simple website demonstrating the power of background attachment property - begineer Level</p>
                                   <Link to='/project2' className='btn__link btn__link__red' >
                                        Read More
                                   </Link>
                              </div>
                              <div className='project-box' key='3'>
                                   <img className='project-box__img' src={ProjectImg3} alt='A SIMPLE WEBSITE DEMONSTRATING THE POWER OF BACKGROUND ATTACHMENT PROPERTY- BEGINNER LEVEL' />
                                   <p className='t-justify project-box__desc'>A simple website demonstrating the power of background attachment property - begineer Level</p>
                                   <Link to='/project3' className='btn__link btn__link__red' >
                                        Read More
                                   </Link>
                              </div>
                              
                         </div>
                         
                         </>
               )
}

export default ProjectBox
