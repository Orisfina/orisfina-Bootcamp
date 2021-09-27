import React from 'react'
import {
     BrowserRouter as Router,
     Link
   } from "react-router-dom";

function ProjectBox(props) {
     const {projectImg, projectDesc1, projectLink1} = props
     return (
          <Router>
          <div className='projectBox mb-l'>
               <img src={projectImg} alt={projectDesc1} className="projectBox__img"
                /> 
               <h4 className="projectBox__desc mb-s">
                    {projectDesc1}
               </h4>
               <Link to={projectLink1} className='btn btn-project'>View Project</Link>
          </div>
          </Router>
     )
}

export default ProjectBox
