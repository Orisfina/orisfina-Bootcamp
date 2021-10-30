 import './App.css';
 import Home from './pages/Index';
 import About from './pages/About';
 import Courses from './pages/Courses';
 import Contact from './pages/Contact';
 import Blog from './pages/Blog';
 import {BrowserRouter as Router,   Switch,   Route } from "react-router-dom";



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
          <Route path="/contact-us">
            <Contact />
          </Route>
          <Route path="/courses">
            <Courses />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    </>
   );
 }

 export default App;


