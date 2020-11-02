import React from 'react';
import Buttons from '../components/Buttons';
import Comments from '../components/Comments';

class SpecificPost extends React.Component {
  constructor(props) {
    super(props);
    
  };

  render() {
    return (
        <div style = {{border: '2px solid', margin: '8px', marginRight: '30%'}}>

            <h1>{this.props.location.state.title}</h1>

            <h5>{"Posted By: " + this.props.location.state.author}</h5>
            {this.props.location.state.group ?
            <h6>{"Posted In: " + this.props.location.state.group}</h6>
            : null}
            <p>{this.props.location.state.content}</p>
            <p>{this.props.location.state.create_date}</p>
            <Buttons title={this.props.location.state.title} content={this.props.location.state.content} group={this.props.location.state.group} id={this.props.location.state.id} />
            <Comments></Comments>
        </div> 
    );
}};

export default SpecificPost;