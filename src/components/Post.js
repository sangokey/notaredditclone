import React from 'react';
import Buttons from './Buttons';


class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {id: this.props.id}
     }

render() {
    return (
        <div style = {{border: '2px solid', margin: '8px', marginRight: '30%'}}>
            <h1>{this.props.title}</h1>

            <h5>{"Posted By: " + this.props.author}</h5>
            {this.props.group ?
            <h6>{"Posted In: " + this.props.group}</h6>
            : null}
            <p>{this.props.content}</p>
            <p>{this.props.create_date}</p>
            <Buttons title={this.props.title} content={this.props.content} group={this.props.group} id={this.props.id} editfunc={this.props.editfunc} deletefunc={this.props.deletefunc}/>
        </div> 
    );
} }
export default Post;