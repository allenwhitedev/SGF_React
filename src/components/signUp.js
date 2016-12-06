import React, { Component }  from 'react';

class SignUp extends Component{
  constructor(props)
  {
    super(props)

    this.state = {name:"", email:"", password:""}

    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
  }

  handleChangeName(event)
  {
    this.setState({name: event.target.value})
  }

  handleChangeEmail(event)
  {
    this.setState({email: event.target.value})
  }

  handleChangePassword(event)
  {
    this.setState({password: event.target.value})
  }

  handleSubmitForm(event)
  {
    alert("Submit login, assuming for now login was successful")
  }

  render()
  {
    return (
      <form onSubmit={this.handleSubmitForm} id="signIn">
        <div>
          <input value={this.state.name} onChange={this.handleChangeName} type="text" name="name" placeholder="name"/><br/>
          <input value={this.state.email} onChange={this.handleChangeEmail} type="text" name="email" placeholder="email"/><br/>
          <input value={this.state.password} onChange={this.handleChangePassword} type="password" name="password" placeholder="password"/>
        </div>
        <div>
          <button>
            Sign Up
          </button>
        </div>
      </form>
    )
  }
}

export default SignUp;
