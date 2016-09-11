import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Landing from './Components/Landing';
import Dashboard from './Components/Dashboard';

const AppRouter = () => (
  <Router history={hashHistory}>
    <Route path="/" component={Dashboard} />
    <Route path="/dashboard" component={Dashboard} />
  </Router>
);

export default AppRouter;
