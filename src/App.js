import React, { Component } from 'react'
import logo from './img/sgfLogo.png'

import CourseSelection from './components/CourseSelection.js'
import './App.css'

class App extends Component
{
  constructor(props) // put any code for startup in constructor
  {
    super(props)

    this.state = { appCreatedAt: new Date(), isLoggedIn: false }
  }

  render() // appBody encapsulates all react-generated html
  {
    return (
      <div className="appBody">
 
        {/* App Bar */}
        <header className="appBar verticalAlignFlex boxShadow1"> 
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
