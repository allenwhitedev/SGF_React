import React, { Component } from 'react'
import logo from './logo.svg'
// import LoginControl from './components/LoginControl.js'
import CourseSelection from './components/CourseSelection.js'
// import User from './components/User.js'
// import Groups from './components/Groups.js'
// import SearchBar from './components/SearchBar.js'
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
          <h1 className="textCenter">SGF React</h1>
          <img className="logo" src={logo} alt="logo" />
        </header>
        <CourseSelection />
      </div>
    )
  }
}

export default App
