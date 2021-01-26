import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ElectionmapContainer } from '../containers';

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={ElectionmapContainer} />
    </Switch>
  );
};

export default RoutesView;
