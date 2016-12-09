import React, { Component } from 'react'
import logo from './img/sgfLogo.png'
// import LoginControl from './components/LoginControl.js'
// import CourseSelection from './components/CourseSelection.js'
import User from './components/User.js'
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
  

        <header className="appBar verticalAlignFlex"> 
          <h1 className="verticalAlignFlex"> <img className="logo paddingRight10px" src={logo} alt="logo"/> Study Group Finder</h1> 
          <nav className="navItems"> 
            <a className="right"> 
              <i className="material-icons">more_vert</i> 
            </a> 
          </nav>

        </header>


        <h2> Face <i className="material-icons">&#xE87C;</i> </h2>
        {/* <header className="textCenter">
          <h1 className="textCenter">SGF React</h1>
          <img className="logo" src={logo} alt="logo" />
        </header> */}
        <User />
      </div>
    )
  }
}

export default App
