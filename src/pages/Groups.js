import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route // for later
} from 'react-router-dom'

import Header from '../components/Header';

const groupData = [
  {
    group_id: "movies",
    name: "Movies",
    description:
      "News & Discussion about Major Motion Pictures",
    create_date: "2020-10-01",
  },
  {
    group_id: "gaming",
    name: "Gaming",
    description:
      "A subreddit for (almost) anything related to games - video games, board games, card games, etc. (but not sports).",
    create_date: "2020-11-01",
  },
  {
    group_id: "computerscience",
    name: "Computer Science",
    description:
      "Welcome to computerscience.",
    create_date: "2020-06-23",
  },
  {
    group_id: "politics",
    name: "Politics",
    description:
      "/r/Politics is for news and discussion about U.S. politics.",
    create_date: "2007-08-06",
  },
  {
    group_id: "cats",
    name: "Cats",
    description:
      "Stories about cute cats",
    create_date: "2019-08-06",
  },
];

function Group ({match}) {

  const group = groupData.find(({group_id}) => group_id === match.params.groupId)

  return (
    <div>
      <h2>{group.name}</h2>
      <p>Created: {group.create_date}</p>
      <p>Description: {group.description}</p>

      <p><b>Posts:</b></p>
    </div>
  )
}


class Groups extends React.Component {
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

          <p>[Search Bar Goes Here: Search groups by name]</p>
            
          <Link to ="/creategroup">
            <button type ="button">
                Create Group
            </button>
          </Link>

            <h2>Top 5 Groups (by # of users)</h2>
            <ul>
              {groupData.map(({name, group_id}) => (
                <li key={group_id}>
                  <Link to={this.props.match.url+"/"+group_id}>{name}</Link>
                </li>
              ))}
            </ul>

          <Route path={this.props.match.url+'/:groupId'} component={Group} />

          </div>
        </div>
    );
}};

export default Groups;