import React from 'react'
import {BrowserRouter as Router,   Switch } from "react-router-dom";

function Blog() {
     return (
          <Router>
               <>
                    <h2>Blog oooo</h2>
                    <Switch>
                         {/* <Route component ={OnePost} path='/:slug' /> 
                         <Route path='/blog' exact>
                              <Blog />
                         </Route> */}
                    </Switch>
               </>
          </ Router>
     )
}

export default Blog
