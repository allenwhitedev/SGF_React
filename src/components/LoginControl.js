import React, { Component } from 'react'
import SignIn from './SignIn.js'
import SignUp from './SignUp.js'
import fauLogo from '../img/logo.svg'
import CourseSelection from './CourseSelection'

class LoginControl extends Component
{
	constructor(props)
	{
		super(props)

		this.handleSignUpClick = this.handleSignUpClick.bind(this)
    this.handleSignInClick = this.handleSignInClick.bind(this)

    this.state = { isSignInState: true, isLoggedIn: false}
	}

	handleSignInClick()
  {
    if ( this.state.isSignInState !== true)
    {
      this.setState({ isSignInState: true })

    }
  }

  handleSignUpClick()
  {
    if (this.state.isSignInState === true)
      this.setState({ isSignInState: false })
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
  		loginForm = <SignInForm />

  		signInButton = <button className="loginStateButton activeLoginState">
  			SIGN UP <br/> <div className="activeDot textCenter"> </div>
	  	</button>

  		signUpButton = <button className="loginStateButton" onClick={this.handleSignUpClick}>
  		  SIGN IN
	  	</button>
  	}
  	else // render Sign Up form
  	{
  		loginForm = <SignUpForm />

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

function SignInForm(props)
{
	return (
		<SignIn />
	)
}

function SignUpForm(props)
{
	return (
		<SignUp />
	)
}

export default LoginControl
