import React, { Component }  from 'react';

class SignIn extends Component 
{

  constructor(props)
  {
    super(props)

    this.state = { username: "", password: "" }

    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.handleSubmitForm = this.handleSubmitForm.bind(this)
  }

  handleChangeName(event)
  {
    this.setState({username: event.target.value})
  }

  handleChangePassword(event)
  {
    this.setState({password: event.target.value})
  }

  handleSubmitForm(event)
  {
    console.log("Submit login, assuming for now login was successful")
  }

  render()
  {
    return (
      <form onSubmit={this.handleSubmitForm} id="signIn">
        <div>
          <input value={this.state.username} onChange={this.handleChangeName} type="text" name="username" placeholder="email/username"/><br/>
          <input value={this.state.password} onChange={this.handleChangePassword} type="password" name="password" placeholder="password"/>
        </div>
        <div>
          <button>
            Sign In
          </button>
        </div>
      </form>
    )
  }

}

export default SignIn;
