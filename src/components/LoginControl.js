import React, { Component } from 'react'
import SignInForm from './SignInForm.js'
import SignUpForm from './SignUpForm.js'
import fauLogo from '../img/logo.svg'
import CourseSelection from './CourseSelection'

import { browserHistory } from 'react-router'

class LoginControl extends Component
{
	constructor(props)
	{
		super(props)

		this.handleSignUpClick = this.handleSignUpClick.bind(this)
    this.handleSignInClick = this.handleSignInClick.bind(this)

    this.handleSubmit = this.handleSubmit.bind(this)
    
    this.handleChildClick = this.handleChildClick.bind(this)

    this.state = { isSignInState: true, isLoggedIn: false}
	}

  handleChildClick()
  {
    console.log("handle child click")
  }

	handleSignInClick()
  {
    if ( this.state.isSignInState !== true)
      this.setState({ isSignInState: true })
  }

  handleSignUpClick()
  {
    if (this.state.isSignInState === true)
      this.setState({ isSignInState: false })
  }

  handleSubmit(event)
  {
    event.preventDefault()

    let name = null || event.target.username.value  
    let password = null || event.target.password.value
    
    let email = null
    if (event.target.email) // sign up user with email & data
      email = event.target.email.value
 
    if (name && email && password )
      console.log('sign up user')
    else if (name && password)
      console.log('sign in user')
    else
      console.log("display 'Insufficient Login Data'")

    localStorage.setItem('name', name)


    console.log("name,email,pass", name, email, password)
    //browserHistory.push('CourseSelection')
  }


  render()
  {
    if (this.state.isLoggedIn)
      return (
        <CourseSelection />
      )

  	let isSignInState = this.state.isSignInState

  	let loginForm = null; let signInButton = null; let signUpButton = null;

  	if ( isSignInState === true ) // render Sign In Form
  	{
  		loginForm = <SignInForm onSubmit={this.handleSubmit} testProp={this.handleSubmit}/>

  		signInButton = <button className="loginStateButton activeLoginState">
  			SIGN IN <br/> <div className="activeDot textCenter"> </div>
	  	</button>

  		signUpButton = <button className="loginStateButton" onClick={this.handleSignUpClick}>
  		  SIGN UP
	  	</button>
  	}
  	else // render Sign Up form
  	{
  		loginForm = <SignUpForm onSubmit={this.handleSubmit} />

  		signInButton = <button className="loginStateButton" onClick={this.handleSignInClick}>
  			SIGN IN
	  	</button>

  		signUpButton = <button className="loginStateButton activeLoginState">
		  	SIGN UP <br/> <div className="activeDot textCenter"> </div>
  		</button>
  	}

  	return (
  		<div className="loginArea textCenter">

	  		<img className="schoolLogo textCenter" src={fauLogo} alt="fauLogo" />
        <h1 className="textCenter schoolName">
          FAU <br />
          <p className="numGroupsForSchool">12 groups</p>
        </h1>

	  		
        <section className="loginStateButtonsContainer"> 
          {signInButton} {signUpButton}
  			</section>

        {loginForm}

  		</div>
  	)
  }

}





export default LoginControl
