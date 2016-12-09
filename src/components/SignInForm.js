import React, { Component }  from 'react';

class SignInForm extends Component
{

  constructor(props)
  {
    super(props)

    this.state = { username: "", password: ""}

    this.handleBlur = this.handleBlur.bind(this)
    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
  }

  handleBlur(iconId)
  {
    if (iconId === "account_circle")
      this.setState({accountCircleIcon: ""})
    else if (iconId === "email")
      this.setState({emailIcon: ""})
    else if (iconId === "lock")
      this.setState({lockIcon: ""})
  }

  handleChangeName(event)
  {
    this.setState({username: event.target.value})
  }

  handleChangePassword(event)
  {
    this.setState({password: event.target.value})
  }

  handleFocus(iconId)
  {
    if (iconId === "account_circle")
      this.setState({accountCircleIcon: "activeFont"})
    else if (iconId === "email")
      this.setState({emailIcon: "activeFont"})
    else if (iconId === "lock")
      this.setState({lockIcon: "activeFont"})
  }


  render()
  {
    return (
      <form className="loginForm" onSubmit={this.props.onSubmit} id="signIn">
          
          <section className="inputArea"> 
            <i className={"material-icons inputIcon " + this.state.emailIcon}>email</i> 
            <input value={this.state.username} onChange={this.handleChangeName} onFocus={() => this.handleFocus("email")} onBlur={() => this.handleBlur("email")} type="text" name="username" placeholder="email/username"/><br/>
          </section>

          <section className="inputArea">
          <i className={"material-icons inputIcon " + this.state.lockIcon} id="lock">lock</i>  
          <input value={this.state.password} onChange={this.handleChangePassword} onFocus={() => this.handleFocus("lock")} onBlur={() => this.handleBlur("lock")} type="password" name="password" placeholder="password"/>
          </section>

          <br /> <br />
          <button className="defaultButton"> SUBMIT </button>
      </form>
    )
  }

}

export default SignInForm;
