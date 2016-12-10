import React, { Component } from 'react'
import logo from './img/sgfLogo.png'

import CourseSelection from './components/CourseSelection.js'
import AppBar from './components/AppBar.js'
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
                
        {this.props.children}

      {/* Login Page */}
      {/* <LoginControl /> */}
      </div>
    )
  }
}

export default App
