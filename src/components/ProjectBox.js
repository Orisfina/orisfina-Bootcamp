import React from 'react'
import { Link } from 'react-router-dom';
   import ProjectImg1 from '../images/project_parallex-small.png'
   import ProjectImg2 from '../images/project_parallex-small.png'
   import ProjectImg3 from '../images/project_acme.png' 
   import projects from '../projects'


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
                              <div className='project-box' key='1'>
                                   <img className='project-box__img' src={ProjectImg1} alt='A SIMPLE WEBSITE DEMONSTRATING THE POWER OF BACKGROUND ATTACHMENT PROPERTY- BEGINNER LEVEL' />
                                   <p className='t-justify project-box__desc'>A simple website demonstrating the power of background attachment property - begineer Level</p>
                                   <Link to='/project1' className='btn__link btn__link__red' >
                                        Read More
                                   </Link>
                              </div>
                              <div className='project-box' key='1'>
                                   <img className='project-box__img' src={ProjectImg1} alt='A SIMPLE WEBSITE DEMONSTRATING THE POWER OF BACKGROUND ATTACHMENT PROPERTY- BEGINNER LEVEL' />
                                   <p className='t-justify project-box__desc'>A simple website demonstrating the power of background attachment property - begineer Level</p>
                                   <Link to='/project1' className='btn__link btn__link__red' >
                                        Read More
                                   </Link>
                              </div>
                              
                         </div>
                         
                         </>
               )
}

export default ProjectBox
