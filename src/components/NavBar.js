import React from 'react'
import logo from '../images/logo-small.svg';
import {
     BrowserRouter as Router,
     NavLink,
     // Route,
     // Switch
   } from "react-router-dom";

function NavBar() {
     return (
          <Router>
 <div className="nav-wrapper">
  <nav className="navbar">
     <img src={logo} alt="Company Logo" /> 
     <div className="menu-toggle" id="mobile-menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
     </div>
    <ul className="nav no-search">
          <NavLink to="/" activeClassName="selected" className='nav-item'> Home</NavLink>
          <NavLink to="/courses" className='nav-item'>Courses </NavLink>
          <NavLink to="/blog" className='nav-item' >Blog</NavLink>
          <NavLink to="/about" className='nav-item' > About Us </NavLink>
          <NavLink to="/contact-us" className='nav-item'> Contact Us </NavLink>
    </ul>
   </nav>
   {/* <div className="grad-bar"></div> */}
  </div>
  </Router>
     )
}

export default NavBar
