import React from 'react'
import Button from '../components/Button';
import SlideshowShort from '../components/SlideshowShort';
import frontend from '../images/suprise.png'
import backend from '../images/backend-girl.png'

 function WebDevelopment() {
    return (
        <>
           <SlideshowShort title='WEB DESIGN'  color1='FRONTEND' color2='BACKEND' text1='AND' text2='TRAINING AVAILABLE' />
           <main className='container'>
           <h2 className='t-center pb-s pt-m course_heading2 main-color'>
           Choose between becoming a Frontend Web Developer , Backend Developer or a Full Stack Developer
            </h2>
        <h2 className='subHeading'>What is the Frontend Developer role ?</h2>
        <p className='pt-s'>
            Front-end developers are in charge of creating 
            dynamic websites using a programming language. 
            They take care of the front-end part, i.e. the visual side of the site, unlike the back-end developer. To find out more, you can read this article on developer jobs.
        </p>
        <img src={frontend} alt='what is frontend web developer role?' className='mt-s mb-l' />
        <h3 className='pb-s'>A front-end developer’s missions typically entails:</h3>
        <ul className='mb-s'>
            <li>- Understanding the project they’re working on to develop the most satisfying features and interfaces for their client.
            </li>
            <li>
                 - Implementing mockups with a keen eye for detail and rigorous standards.
            </li>
            <li>
                - Using best practices to structure HTML, CSS and Javascript code.
            </li>
            <li>
                 - Using frameworks such as React to build powerful and modular applications.
            </li>
            <li>
                - Using tests to monitor their applications and ensure the highest quality service.
            </li>
            <li> 
               - Providing technical and functional documentation of the site for their clients and colleagues.
            </li>
            <li>- Optimizing page load time.</li>
        </ul>
        <Button link='/register' cName='course_btn p-xy ' text='Apply Now!' />
        <div className='mb-s' ></div>
        <Button link='/frontend-development' cName='course_btn p-xy ' text='MORE ABOUT  FRONTEND DEVS' />
        <h2 className='subHeading mt-l'>What is the Back-End Developer role ?</h2>
        <p className='pt-s'>
            Back-end developers are in charge of creating 
            dynamic websites using a programming language. 
            They take care of the front-end part, i.e. the visual
            side of the site, unlike the back-end developer. 
            To find out more, you can read this article on 
            developer jobs.
        </p>
        <img src={backend} alt='What is the Back-End Developer role ' className='mt-s mb-l' />

        <h3 className='pb-s'>A Back-end developer’s missions typically entails:</h3>
        <ul className='mb-s'>
            <li>- Understanding the project they’re working on to develop the most satisfying features and interfaces for their client.
            </li>
            <li>
                 - Implementing mockups with a keen eye for detail and rigorous standards.
            </li>
            <li>
                - Using best practices to structure HTML, CSS and Javascript code.
            </li>
            <li>
                 - Using frameworks such as React to build powerful and modular applications.
            </li>
            <li>
                - Using tests to monitor their applications and ensure the highest quality service.
            </li>
            <li> 
               - Providing technical and functional documentation of the site for their clients and colleagues.
            </li>
            <li>- Optimizing page load time.</li>
        </ul>

        <Button link='/register' cName='course_btn p-xy ' text='Apply Now!' />
        <div className='mb-s' ></div>
        <Button link='/backend-development' cName='course_btn p-xy ' text='MORE ABOUT  BACKEND DEVS' />
        <div className='mb-l mt-l' ></div>
        </main>
        </>
    )
}

export default WebDevelopment;
