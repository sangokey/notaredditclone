import React from 'react';
//import Buttons from './Buttons';


class Post extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

render() {
    return (
        <div style = {{border: '2px solid', margin: '8px', marginRight: '30%'}}>
            <h5>{"Posted By: " + this.props.author}</h5>

            <h1>{this.props.title}</h1>
            <p>{this.props.content}</p>
            <p>{this.props.create_date}</p>
        </div> 
        
    );
} }
export default Post;