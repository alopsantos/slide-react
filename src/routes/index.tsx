import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import PGSlide from '../pages/PGSlide';
import PGSlider from '../pages/PGSlider';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={PGSlider} />
  </Switch>
);

export default Routes;