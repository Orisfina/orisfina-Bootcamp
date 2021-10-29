import React from 'react'

function ProjectList({projects}) {
    return (
        <>
        {people.map(project =>{
            const {name, id, age, image} = projects;
            return(  
                <div className="grid3 a-i-center">
                    <ProjectBox projectLink1={projectDesc[0].projectLink1} projectDesc1={projectDesc[0].projectDesc1} projectImg={projectDesc[0].ProjectImg1.ProjectImg1} />
                </div>
            )})}
        </>
        )
        {/* <article key={id} className='person' id={id}>
            <img src={image} alt={name} />
            <div>
                <h4>Name: {name}</h4>
                <p>Age: {age} years</p>
                <button className='clearm' onClick={button}>Remove</button>
            </div>
            
        </article> */} 
}

export default ProjectList
