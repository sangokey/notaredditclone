import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Groups from '../pages/Groups';
import Link from '../pages/Link';
import CreateGroup from '../pages/CreateGroup';

const Redirect = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route path='/group' component={Groups}></Route>
      <Route exact path = '/links' component={Link}></Route>
      <Route exact path = '/creategroup' component={CreateGroup}></Route>
    </Switch>
  );
}

export default Redirect;