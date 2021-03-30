import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Login from './auth/Login'
import Signup from './auth/Signup'
import Projects from './projects/Projects'
import PrivateRoute from './PrivateRoute'

import ProjectState from '../context/projects/projectState'
import TaskState from '../context/tasks/taskState'
import AlertState from '../context/alerts/alertState'
import AuthState from '../context/auth/authState'

import tokenService from '../services/token.service'


const token = localStorage.getItem('token')
if (token) tokenService(token)
  

function App() {
  return (
    <ProjectState>
      <TaskState>
        <AlertState>
          <AuthState>
            <Router>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <PrivateRoute exact path="/projects" component={Projects} />
              </Switch>
            </Router>
          </AuthState>
        </AlertState>
      </TaskState>
    </ProjectState>
  );
}

export default App;
