import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import LoginControl from './components/LoginControl.js'
import CourseSelection from './components/CourseSelection.js'
import Groups from './components/Groups.js'
import User from './components/User.js'
import Group from './components/Group.js'

import { Router, Route, browserHistory } from 'react-router'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="courseSelection" component={CourseSelection}/>
      <Route path="groups" component={Groups} />
      <Route path="/" component={LoginControl} /> 
      <Route name="group" path="/groups/:groupName" component={Group} />
      <Route path="/users/:userId" component={User} />
    </Route>
  </Router>,
  document.getElementById('root')
);
