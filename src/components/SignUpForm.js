import React, { Component }  from 'react';

class SignUpForm extends Component{
  constructor(props)
  {
    super(props)

    this.state = {name:"", email:"", password:""}

    this.handleBlur = this.handleBlur.bind(this)
    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
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

  handleFocus(iconId)
  {
    if (iconId === "account_circle")
      this.setState({accountCircleIcon: "activeFont"})
    else if (iconId === "email")
      this.setState({emailIcon: "activeFont"})
    else if (iconId === "lock")
      this.setState({lockIcon: "activeFont"})
  }


  handleSubmitForm(event)
  {
    alert("Submit login, assuming for now login was successful")
  }

  render()
  {
    return (
      <form className="loginForm" onSubmit={this.props.onSubmit} id="signIn">
        <section className="inputArea"> 
          <i className={"material-icons inputIcon " + this.state.accountCircleIcon }>account_circle</i> 
          <input value={this.state.name} onChange={this.handleChangeName} onFocus={() => this.handleFocus("account_circle")} onBlur={() => this.handleBlur("account_circle")} type="text" name="name" placeholder="name"/><br/>
        </section>

        <section className="inputArea"> 
          <i className={"material-icons inputIcon " + this.state.emailIcon}>email</i>  
          <input value={this.state.email} onChange={this.handleChangeEmail} onFocus={() => this.handleFocus("email")} onBlur={() => this.handleBlur("email")} type="text" name="email" placeholder="email"/><br/>
        </section>

        <section className="inputArea"> 
          <i className={"material-icons inputIcon " + this.state.lockIcon}>lock</i> 
          <input value={this.state.password} onChange={this.handleChangePassword} onFocus={() => this.handleFocus("lock")} onBlur={() => this.handleBlur("lock")} type="password" name="password" placeholder="password"/>
        </section>
          <br /> <br />
          <button className="defaultButton"> SUBMIT </button>
      </form>
    )
  }
}

export default SignUpForm;
