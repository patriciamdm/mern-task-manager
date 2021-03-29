import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Login from './auth/Login'
import Signup from './auth/Signup'
import Projects from './projects/Projects'

import ProjectState from '../context/projects/projectState'
import TaskState from '../context/tasks/taskState'
import AlertState from '../context/alerts/alertState'

function App() {
  return (
    <ProjectState>
      <TaskState>
        <AlertState>
          <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/projects" component={Projects} />
            </Switch>
          </Router>
        </AlertState>
      </TaskState>
    </ProjectState>
  );
}

export default App;
