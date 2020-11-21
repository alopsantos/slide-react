import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import PGSlide from '../pages/PGSlide';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={PGSlide} />
  </Switch>
);

export default Routes;