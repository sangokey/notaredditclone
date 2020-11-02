import React from 'react';

class Buttons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title: this.props.title, contents: this.props.content, group: this.props.group, showEdit: false}
        this.update_posts = this.update_posts.bind(this);
    };
    toggle_edit () {
        this.setState({showEdit : !this.state.showEdit})
    };

    hide_edit () {
        this.setState({showEdit: false})
    };

    title_change (e) {
        this.setState({title: e.target.value})
    };

    content_change (e) {
        this.setState({contents: e.target.value})
    };

    group_change (e) {
        this.setState({group: e.target.value})
    };
   

    update_posts (e) {
        e.preventDefault();
        const arr = [this.state.title, this.state.contents, this.state.group]
        this.props.editfunc(arr, this.props.id);
        this.hide_edit();
    };

    deletePost() {
        this.props.deletefunc(this.props.id)
        this.hide_edit();
    };
    
    render() {
        return (
            <div>
                <button onClick={this.toggle_edit.bind(this)}>
                Edit
              </button>
              <button onClick={this.deletePost.bind(this)}>
                Delete
              </button>
            {this.state.showEdit ?
            <form onSubmit={this.update_posts}>
                <label style = {{marginLeft: "10px"}}>
                    <input type="text" placeholder="Enter Title" defaultValue = {this.props.title} style = {{width: "400px"}} onChange = {this.title_change.bind(this)}/>
                </label>
                <label style = {{marginLeft: "10px"}}>
                    <input type="text" placeholder="Enter Post Body" defaultValue = {this.props.content} style = {{width: "400px"}} onChange ={this.content_change.bind(this)}/>
                </label>
                <label style = {{marginLeft: "10px"}}>
                    <input type="text" placeholder="Optional: Enter a Group" defaultValue={this.props.group} style = {{width: "400px"}} onChange ={this.group_change.bind(this)}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
            : null }
            </div>
        );
    }};

export default Buttons;

