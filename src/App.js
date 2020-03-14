import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Projects from './pages/projects'
import Home from './pages/home'
import Contact from './pages/contact'
import About from './pages/about'
import Blog from './pages/blog'
import xTrack from './pages/xtrack'
import logo from './logo.svg'

import './App.css'

function App() {
  return (
    <Router>
      <div className="bg-gray c-light">
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">

          <img src={logo} className="App-logo-small" alt="logo" />
          <a class="navbar-brand" href="#">miro/cosic</a>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li><Link to={'/'} className="nav-link"> Home </Link></li>
              <li><Link to={'/about'} className="nav-link"> About </Link></li>
              <li><Link to={'/projects'} className="nav-link"> Projects </Link></li>
              <li><Link to={'/projects/xtrack'} className="nav-link"> xTrack </Link></li>
              <li><Link to={'/blog'} className="nav-link"> Blog </Link></li>
              <li><Link to={'/contact'} className="nav-link"> Contact </Link></li>
            </ul>
          </div>
        </nav>

        <hr />
        <div className="pt-5">
          <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/projects' component={Projects} />
              <Route exact path='/projects/xtrack' component={xTrack} />
              <Route exact path='/blog' component={Blog} />
              <Route exact path='/contact' component={Contact} />
          </Switch>
        </div>

      </div>
    </Router>
  )
}

export default App;
