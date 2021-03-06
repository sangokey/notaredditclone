import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Groups from '../pages/Groups';
import SpecificPost from '../pages/SpecificPost';
import CreateGroup from '../pages/CreateGroup';
import Link from '../pages/Link';


const Redirect = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Link}></Route>
      <Route path='/group' component={Groups}></Route>
      <Route exact path = '/home' component={Home}></Route>
      <Route exact path = '/creategroup' component={CreateGroup}></Route>
      <Route exact path='/specificpost' component={SpecificPost}></Route>
    </Switch>
  );
}

export default Redirect;
