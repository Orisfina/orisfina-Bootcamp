import React, {useState} from 'react'
import logo from '../images/logo-small.svg';
import {NavLink} from "react-router-dom";

function NavBar() {
      const [isActive, setActive] = useState(false);
     ;
     
     const removeToggle = ()=>{
      setActive(isActive)
     }

     const handleToggle = () => {
      setActive(!isActive)
    };
     return (
 <div className="nav-wrapper">
  <nav className="navbar">
     <img src={logo} alt="Company Logo" /> 
     <div className="menu-toggle" id="mobile-menu" onClick={handleToggle}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
     </div>
    <ul className={isActive ? 'nav no-search active-navbar' : 'nav no-search'}>
          <NavLink to="/" activeClassName="selected" className='nav-item'>
                Home
          </NavLink>
          <NavLink to="/courses" className='nav-item' onClick={removeToggle}>
               Courses 
          </NavLink>
          <NavLink to="/blog" className='nav-item' > Blog</NavLink>
          <NavLink to="/about" className='nav-item' >About Us </NavLink>
          <NavLink to="/contact-us" className='nav-item'>
                Contact Us 
          </NavLink>
    </ul>
   </nav>
   {/* <div className="grad-bar"></div> */}
  </div>
     )
}

export default NavBar
