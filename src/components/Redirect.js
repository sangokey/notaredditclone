import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Group from '../pages/Group';
import SpecificPost from '../pages/SpecificPost';


const Redirect = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/group' component={Group}></Route>
      <Route exact path='/specificpost' component={SpecificPost}></Route>

    </Switch>
  );
}

export default Redirect;