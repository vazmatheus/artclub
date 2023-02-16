// import React, { useState } from 'react';

import { Route, Switch } from 'react-router-dom';

import { Home } from './pages/Home';

const App = () => (
  <Switch>
    <Route exact path="/" component={ Home } />
    {/* <Route exact path="/carteira" component={ wallet } /> */ }
  </Switch>
);

export default App;
