 import './App.css';
 import Homepage from './pages/Index';
 import About from './pages/About';
 import Courses from './pages/Courses';
 import Project1 from './pages/Project1';
 import Project2 from './pages/Project2';
 import Project3 from './pages/Project3';
 import Contact from './pages/Contact';
 import Blog from './pages/Blog';
 import {BrowserRouter as Router,   Switch,   Route } from "react-router-dom";
import Register from './pages/Register';
import WebDevelopment from './pages/WebDevelopment';
import ApplicationPackage from './pages/ApplicationPackage'
import GraphicDesign from './pages/GraphicDesign'
import FrontendDevelopment from './pages/FrontendDevelopment'
import Testimonial from './components/Testimonial';
import BackendDevelopment from './pages/BackendDevelopment'
 import Navbar from './components/NavBar'
 import Footer from './components/Footer'


function App() {
   return (
     <>
          <Router>
               <Navbar />
               <Switch>
                    <Route path="/about">
                         <About />
                    </Route>
                    <Route path="/blog">
                         <Blog />
                    </Route>
                    <Route path="/courses">
                         <Courses />
                    </Route>
                    <Route path="/register">
                         <Register />
                    </Route>
                    <Route path="/contact-us">
                         <Contact />
                    </Route>
                    <Route path="/web-development">
                         <WebDevelopment />
                    </Route>
                    <Route path="/project1">
                         <Project1 />
                    </Route>
                    <Route path="/project2">
                         <Project2 />
                    </Route>
                    <Route path="/project3">
                         <Project3 />
                    </Route>
                    <Route path="/frontend-web-development-career">
                         <FrontendDevelopment />
                    </Route>
                    <Route path="/graphic-design-career">
                         <GraphicDesign />
                    </Route>
                    <Route path="/backend-web-development-career">
                         <BackendDevelopment />
                    </Route>
                    <Route path="/application-package-learning-path">
                         <ApplicationPackage/>
                    </Route>
                    <Route path="/testimonial">
                         <Testimonial />
                    </Route>
                    <Route path="/" exact>
                         <Homepage />
                    </Route>
               </Switch>
               <Footer />
          </Router>
     </>

   );
 }

 export default App;


