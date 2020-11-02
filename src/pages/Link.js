import React from 'react';

import { Link, Route, Switch } from "react-router-dom";

import Header from '../components/Header';
import Home from '../pages/Home';
import Group from '../components/Group'

class Links extends React.Component {
  constructor(props) {
    super(props);
    this.state = {user: null};
  };

  logIn (username) {
    this.setState({user: username})
};
  render() {
    return (
        <div>
          < Header func = {this.logIn.bind(this)} user={this.state.user}/>
          <div style = {{paddingTop: "100px"}}>
             <ul>
        <li>
          <Link to="/">Home</Link>
          <ul>
            <li>View Posts</li>
            <li>Write A New Post</li>
            <li>Delete, Update Post</li>
          </ul>
        </li>
        <li>
          <Link to="/group">Groups</Link>
            <ul>
              <li>View Top Groups</li>
              <li>Search for Groups</li>
            </ul>
        </li>
        <li>
          <Link to="/creategroup">Create Group</Link>
            <ul>
              <li>Name, Description</li>
            </ul>
        </li>
    </ul>

    
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/group"><Group /></Route>
      </Switch>
          </div>
        </div>
    );
}};


export default Links;