import React from 'react';

import Posts from '../components/Posts';
import Header from '../components/Header';

class Home extends React.Component {
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
            <Posts username = {this.state.user}/>
          </div>
        </div>
    );
}};

export default Home;