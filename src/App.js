import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from './components/signIn';
import SignUp from './components/signUp';

var App = React.createClass ({
  propTypes: {
    signUp: React.PropTypes.bool,
    schoolName: React.PropTypes.string.isRequired,
    schoolgroups: React.PropTypes.number.isRequired,
  },

  getInitialState: function() {
    return {
      signIn: true,
    }
  },

  getDefaultProps: function(){
    return {
      schoolName: "FAU",
      schoolgroups: 22,
    }
  },

  signInState: function(){
    return (
      <h1>Sign In State</h1>
    )
  },

  signUpState: function(){
    return (
      <h1>Sign Up State</h1>
    )
  },

  render: function() {
    return (
      <div className="App">
        <div className="App-header">
          {/*Header*/}
          <h2>Study Group Finder</h2>
        </div>
        <div>
          {/*Logo*/}
          <img src={logo} className="App-logo" alt="logo" />
          <h3>{this.props.schoolName}</h3>
          <p>{this.props.schoolgroups} groups</p>
        </div>
        <div>
          <button className="signin-button" onClick={this.signInState}>SIGN IN</button>
          <button className="signup-button" onClick={this.signUpState}>SIGN UP</button><br/>
            <SignIn/>
            OR<br/>
          <button>Log in with Facebook</button>
        </div>
      </div>
    );
  }
})

export default App;
