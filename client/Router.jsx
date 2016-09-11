import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Landing from './Components/Landing';
import Dashboard from './Components/Dashboard';

const AppRouter = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Landing} />
    <Route path="" component={Dashboard} />
  </Router>
);

export default AppRouter;
