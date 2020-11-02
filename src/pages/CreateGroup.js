import React from 'react';

import Header from '../components/Header';

class CreateGroup extends React.Component {
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
          <   div style = {{paddingTop: "100px"}}></div>
            <h1>Create a group</h1>
            <form>
                <label>
                    Name<br/>
                    <input type="text" name="name" /><br/>
                    Description<br/>
                    <input type="text" name="description"/><br/>
                </label>
                <input type="submit" value="Create Group" />
            </form>
        </div>
    );
}};

export default CreateGroup;