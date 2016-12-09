import React, { Component } from 'react'
import SignInForm from './SignInForm.js'
import SignUpForm from './SignUpForm.js'
import fauLogo from '../img/logo.svg'
import CourseSelection from './CourseSelection'

import { browserHistory } from 'react-router'

class TestComponent extends Component
{
  constructor(props)
  {
    super(props)

    console.log("this.props.testProp", this.props.testProp)
  }

  render()
  {
    return (
        <h1 className="textCenter" onClick={this.props.onClickListenerThing}>Test Component {this.props.testProp}</h1>
    )
  }

}

class LoginControl extends Component
{
	constructor(props)
	{
		super(props)

		this.handleSignUpClick = this.handleSignUpClick.bind(this)
    this.handleSignInClick = this.handleSignInClick.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)

    this.parentClickHandler = this.parentClickHandler.bind(this)
    
    this.handleChildClick = this.handleChildClick.bind(this)

    this.state = { isSignInState: true, isLoggedIn: false}
	}

  handleFormSubmit(event)
  {
    event.preventDefault()
    console.log("Handle Form Submit")
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

  parentClickHandler(event, username)
  {
    event.preventDefault()
    console.log("parentClickHandler!")
    browserHistory.push('CourseSelection')
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
  		loginForm = <SignInForm onSubmit={this.parentClickHandler} testProp={this.parentClickHandler}/>

  		signInButton = <button className="loginStateButton activeLoginState">
  			SIGN IN <br/> <div className="activeDot textCenter"> </div>
	  	</button>

  		signUpButton = <button className="loginStateButton" onClick={this.handleSignUpClick}>
  		  SIGN UP
	  	</button>
  	}
  	else // render Sign Up form
  	{
  		loginForm = <SignUpForm onSubmit={this.parentClickHandler} />

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
	  		
        <section className="loginStateButtonsContainer"> 
          {signInButton} {signUpButton}
  			</section>

        {loginForm}

  		</div>
  	)
  }

}





export default LoginControl
