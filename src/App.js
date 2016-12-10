import React, { Component } from 'react'
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
      <div className="appRoot">
        <div className="appBody">
          {/* App Bar */}
          <AppBar />
          
          {/* Nested routes */}        
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App
