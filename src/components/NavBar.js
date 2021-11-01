import React from 'react'
import logo from '../images/logo-small.svg';
import {NavLink} from "react-router-dom";

function NavBar() {
     /*  const [toggle, setToggle] = useState(false);
     let toggleMenu = document.getElementById('mobile-menu');
     toggleMenu.addEventListener('click', ()=>{
        return   console.log(toggle);
     }) */
     return (
 <div className="nav-wrapper">
  <nav className="navbar">
     <img src={logo} alt="Company Logo" /> 
     <div className="menu-toggle" id="mobile-menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
     </div>
    <ul className="nav no-search">
          <NavLink to="/" activeClassName="selected" className='nav-item'>
                Home
          </NavLink>
          <NavLink to="/courses" className='nav-item'>
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
