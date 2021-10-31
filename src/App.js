 import './App.css';
 import Homepage from './pages/Index';
 import About from './pages/About';
 import Courses from './pages/Courses';
 import Contact from './pages/Contact';
 import Blog from './pages/Blog';
 import {BrowserRouter as Router,   Switch,   Route } from "react-router-dom";
import Register from './pages/Register';
import WebDevelopment from './pages/WebDevelopment';
 


function App() {
   return (
     <>
          <Router>
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
                    <Route path="/webdevelopment">
                         <WebDevelopment />
                    </Route>
                    <Route path="/" exact>
                         <Homepage />
                    </Route>
               </Switch>
          </Router>
     </>

   );
 }

 export default App;


