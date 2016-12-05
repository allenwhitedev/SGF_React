import React from 'react';

var signIn = React.createClass ({

  getInitialState: function(){
    return (
      this.state = {
        username: '',
        password: '',
      }
    );
  },

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value})
  },

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  },

  render: function(){
    return (
      <form onSubmit={this.onSubmit} id="signIn">
        <div>
          <input value={this.state.username} onChange={this.onChange} type="text" name="username" placeholder="email/username"/><br/>
          <input value={this.state.password} onChange={this.onChange} type="password" name="password" placeholder="password"/>
        </div>
        <div>
          <button>
            Sign In
          </button>
        </div>
      </form>
    );
  }
})

export default signIn;
