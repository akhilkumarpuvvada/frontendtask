
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { React, useState } from 'react'

import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import Navbar from './components/Navbar'
import SignIn from './pages/SignIn';


function App() {

  return (
    <Router>

      <Switch>

        <Route exact path="/signIn">
          <SignIn />
        </Route>

        <Route exact path="/">

          <SignIn />

        </Route>
        <Route exact path="/Home">


          <Navbar />
          <Home />

        </Route>
        <Route path="/about">
          <Navbar />
          <About />
        </Route>





        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default App