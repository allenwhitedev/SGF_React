import React, { Component } from 'react'
import logo from './logo.svg'
import LoginControl from './components/LoginControl.js'
import CourseSelection from './components/CourseSelection.js'
import CourseForm from './components/CourseForm.js'
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
        <header className="textCenter">
          <h1 className="textCenter">Login Page</h1>
          <img className="logo" src={logo} alt="logo" />
        </header>

        <CourseForm />
      </div>
    )
  }
}

export default App
