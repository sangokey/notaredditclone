import React from 'react';
import Post from './Post';
import WritePost from './WritePost';

class Posts extends React.Component {
    constructor(props) {
        super(props);
        //add SELECT
        this.state = {titles: ["Foo", "Bar", "Sample", "Data"], authors: ["Griffin Hurley", "Sang Ok Suh", "John Smith", "Alexander Hamilton"], contents: ["Once upon a time", 'We made an app and stuff', "And this is it", "So...enjoy"], create_dates: ["2020-07-12", "2020-07-13", "2020-07-13", "2020-07-13"], groups: ["stuff", "stuff", "stuff", "stuff"]};
        this.createPost = this.createPost.bind(this);
        this.editPost = this.editPost.bind(this);
        this.deletePost = this.deletePost.bind(this);
    }

    createPost(arr) {
        // add INSERT
        const new_state = this.state;
        new_state.titles.unshift(arr[0])
        new_state.authors.unshift(arr[1])
        new_state.contents.unshift(arr[2])
        new_state.create_dates.unshift(arr[3])
        new_state.groups.unshift(arr[4])
        this.setState(new_state)
    };

    editPost(arr, idx) {
        const new_state = this.state;
        new_state.titles[idx] = arr[0];
        new_state.contents[idx] = arr[1];
        new_state.groups[idx] = arr[2];
        this.setState(new_state)
    };

    deletePost(idx) {
        const new_state = this.state;
        for (var key in new_state) {
            new_state[key].splice(idx, 1)
        };
        this.setState(new_state)
    };

render() {
    return (
        <div style = {{margin:"40px"}}>
            <WritePost update = {this.createPost} username = {this.props.username}/>

            {this.state.authors.map((authors, authorIndex) => {
                return (<Post
                title = {this.state.titles[authorIndex]}
                author={authors} 
                content={this.state.contents[authorIndex]} 
                create_date = {this.state.create_dates[authorIndex]}
                group = {this.state.groups[authorIndex]}
                id = {authorIndex}
                editfunc = {this.editPost}
                deletefunc = {this.deletePost}
                />
                )
            })}
        </div> 
);
} }
export default Posts;