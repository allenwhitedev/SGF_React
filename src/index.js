import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import LoginControl from './components/LoginControl.js'
import CourseSelection from './components/CourseSelection.js'
import Groups from './components/Groups.js'
import User from './components/User.js'
import SignUp from './components/SignUp.js'
import SignIn from './components/SignIn.js'

import { Router, Route, Link, browserHistory } from 'react-router'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="courseSelection" component={CourseSelection}/>
      <Route path="groups" component={Groups} />
      
      <Route path="login" component={LoginControl} >
        <Route path="signup" component={SignUp} />
      	<Route path="signin" component={SignIn} />
        <Route path="/user/:userId" component={User}/>
      </Route>

    </Route>
  </Router>,
  document.getElementById('root')
);
