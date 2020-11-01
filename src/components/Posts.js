import React from 'react';
import Post from './Post';
import WritePost from './WritePost';

class Posts extends React.Component {
    constructor(props) {
        super(props);
        //Select query will populate state
        this.state = {titles: ["Foo", "Bar", "Sample", "Data"], authors: ["Griffin Hurley", "Sang Ok Suh", "John Smith", "Alexander Hamilton"], contents: ["Once upon a time", 'We made an app and stuff', "And this is it", "So...enjoy"], create_dates: ["2020-07-12", "2020-07-13", "2020-07-13", "2020-07-13"]};
        this.createPost = this.createPost.bind(this);
    }

    createPost(arr) {
        const new_state = this.state;
        new_state.titles.unshift(arr[0])
        new_state.authors.unshift(arr[1])
        new_state.contents.unshift(arr[2])
        new_state.create_dates.unshift(arr[3])

        this.setState(new_state)
    }

render() {
    return (
        <div style = {{margin:"40px"}}>
            <WritePost update = {this.createPost} username = {this.props.username}/>

            {this.state.authors.map((authors, authorIndex) => {
                return (<Post
                title = {this.state.titles[authorIndex]}
                author={authors} 
                content={this.state.contents[authorIndex]} 
                create_date = {this.state.create_dates[authorIndex]} />
                )
            })}
        </div> 
);
} }
export default Posts;