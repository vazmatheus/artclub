import React from 'react';
import { Route, Switch } from 'react-router-dom';
import appointment from './pages/Appointment';
import Home from './pages/Home';

const App = () => (
  <Switch>
    <Route exact path="/" component={ Home } />
    <Route exact path="/appointment" component={ appointment } />
  </Switch>
);

export default App;
