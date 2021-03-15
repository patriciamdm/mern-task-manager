import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Login from './auth/Login'
import Signup from './auth/Signup'
import Projects from './projects/Projects'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/projects" component={Projects} />
    </Switch>
  );
}

export default App;
