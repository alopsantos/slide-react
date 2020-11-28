import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import PGSlide01 from '../pages/PGSlide01';
import PGSlider from '../pages/PGSlider';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={PGSlide01} />
  </Switch>
);

export default Routes;