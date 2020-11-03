import React from 'react';

import { Link, Route, Switch } from "react-router-dom";

import Header from '../components/Header';
import Home from '../pages/Home';
import Groups from '../pages/Groups';
import SpecificPost from '../pages/SpecificPost';
import CreateGroup from '../pages/CreateGroup';

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
          <Link to="/home">Home</Link>
          <ul>
            <li>View All Posts</li>
            <li>Write A New Post</li>
            <li>Delete, Edit Post</li>
            <li>Click individual post to see post page - write, delete, edit comments</li>
          </ul>
        </li>
        <li>
          <Link to="/group">Groups</Link>
            <ul>
              <li>View Groups</li>
              <li>Search for Groups</li>
              <li>Create Group Button</li>
              <li>View Group Page - Join/Leave Group PlaceHolder, See Posts for the Group</li>
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
        <Route exact path="/home"><Home /></Route>
        <Route path="/group"><Groups /></Route>
        <Route path='/creategroup'><CreateGroup/></Route>
        <Route path="/specificpost"><SpecificPost/></Route>
      </Switch>
          </div>
        </div>
    );
}};


export default Links;
