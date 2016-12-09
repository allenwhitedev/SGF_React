import React, { Component } from 'react'
import logo from './img/sgfLogo.png'
import LoginControl from './components/LoginControl.js'

import CourseSelection from './components/CourseSelection'
import Groups from './components/Groups'

import { Router, Route, Link, browserHistory } from 'react-router'

import './App.css'

class App extends Component
{
  constructor(props) // put any code for startup in constructor
  {
    super(props)

    this.state = { appCreatedAt: new Date() }
  }

  render() // appBody encapsulates all react-generated html
  {
    return (
      <div className="appBody">
  
        {/* App Bar */}
        <header className="appBar verticalAlignFlex"> 
          <h1 className="verticalAlignFlex"> 
            <img className="logo paddingRight10px" src={logo} alt="logo"/> 
            <span className="tabPlusOnly"> Study Group Finder </span>
          </h1> 
          <nav className="navItems"> 
            <a className="right"> 
              <i className="material-icons">more_vert</i> 
            </a> 
          </nav>
        </header>
        {this.props.children}

      {/* Login Page */}
      {/* <LoginControl /> */}
      </div>
    )
  }
}

export default App
