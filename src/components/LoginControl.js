import React, { Component } from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'

class LoginControl extends Component
{
	constructor(props)
	{
		super(props)

		this.handleSignUpClick = this.handleSignUpClick.bind(this)
    this.handleSignInClick = this.handleSignInClick.bind(this)

    this.state = { isSignInState: true}
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
  	let isSignInState = this.state.isSignInState

  	let loginForm = null; let signInButton = null; let signUpButton = null;

  	if ( isSignInState === true ) // render Sign In Form
  	{
  		loginForm = <SignInForm />

  		signInButton = <button className="loginStateButton activeLoginState">
  			Sign In
	  	</button>

  		signUpButton = <button className="loginStateButton" onClick={this.handleSignUpClick}>
  		  Sign Up
	  	</button>
  	}
  	else // render Sign Up form
  	{
  		loginForm = <SignUpForm />

  		signInButton = <button className="loginStateButton" onClick={this.handleSignInClick}>
  			Sign In
	  	</button>

  		signUpButton = <button className="loginStateButton activeLoginState">
		  	Sign Up
  		</button>
  	}

  	return (
  		<div className="loginArea textCenter">

	  		<h1>Login Control</h1>
	  		{signInButton} {signUpButton}
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
