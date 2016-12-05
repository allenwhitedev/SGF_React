import React from 'react';

var signUp = React.createClass ({
  render: function(){
    return (
      <form id="signUp">
        <input type="text" placeholder="name"/><br/>
        <input type="text" placeholder="email/username"/><br/>
        <input type="password" placeholder="password"/>
      </form>
    );
  }
})

export default signUp;
