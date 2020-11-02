import React from 'react';
import Comment from './Comment';
import WriteComment from './WriteComment';


class Comments extends React.Component {
    constructor(props) {
        super(props);
        //add SELECT
        this.state = {authors: ["Griffin Hurley", "Sang Ok Suh", "John Smith", "Alexander Hamilton"], contents: ["These are comments", 'More Comments', "Commentey goodness", "Being Original is hard"], create_dates: ["2020-07-12", "2020-07-13", "2020-07-13", "2020-07-13"]};
        this.createComment = this.createComment.bind(this);
        this.editComment = this.editComment.bind(this);
        this.deleteComment= this.deleteComment.bind(this);
    }

    createComment(arr) {
        // add INSERT
        const new_state = this.state;
        new_state.authors.unshift(arr[0])
        new_state.contents.unshift(arr[1])
        new_state.create_dates.unshift(arr[2])
        this.setState(new_state)
    };

    editComment(arr, idx) {
        const new_state = this.state;
        new_state.contents[idx] = arr[0];
        new_state.create_dates[idx] = arr[1];
        this.setState(new_state)
    };

    deleteComment(idx) {
        const new_state = this.state;
        for (var key in new_state) {
            new_state[key].splice(idx, 1)
        };
        this.setState(new_state)
    };

render() {
    return (
        <div style = {{margin:"40px"}}>
            <WriteComment update = {this.createComment} username = {this.props.username}/>

            {this.state.authors.map((authors, authorIndex) => {
                return (<Comment
                author={authors} 
                content={this.state.contents[authorIndex]} 
                create_date = {this.state.create_dates[authorIndex]}
                id = {authorIndex}
                editfunc = {this.editComment}
                deletefunc = {this.deleteComment}
                />
                )
            })}
        </div> 
);
} }
export default Comments;