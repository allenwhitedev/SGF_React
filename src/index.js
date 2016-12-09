import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import LoginControl from './components/LoginControl.js'
import CourseSelection from './components/CourseSelection.js'
import Groups from './components/Groups.js'
import User from './components/User.js'
import SignUpForm from './components/SignUpForm.js'
import SignInForm from './components/SignInForm.js'

import { Router, Route, Link, browserHistory } from 'react-router'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="courseSelection" component={CourseSelection}/>
      <Route path="groups" component={Groups} />
      
      <Route path="/" component={LoginControl} >
    {/* 
        <Route path="signup" component={SignUpForm} />
      	<Route path="signin" component={SignInForm} />
    */}    
        <Route path="/user/:userId" component={User}/>
      </Route>

    </Route>
  </Router>,
  document.getElementById('root')
);
