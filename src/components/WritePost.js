import React from 'react';

class WritePost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title: "", contents: "", showPost: false, user: this.props.username}
        this.update_posts = this.update_posts.bind(this);
    };
    show_post_input () {
        this.setState({showPost : true})
    };

    hide_post_input () {
        this.setState({showPost: false})
    };

    title_change (e) {
        this.setState({title: e.target.value})
    };

    content_change (e) {
        this.setState({contents: e.target.value})
    };
   

    update_posts (e) {
        e.preventDefault();

        const arr = [];
        arr.push(this.state.title);
        arr.push(this.state.user ? this.state.user : "Anonymous");
        arr.push(this.state.contents);
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; 
        var yyyy = today.getFullYear();
        if(dd<10) 
        {
            dd='0'+dd;
        } 
        
        if(mm<10) 
        {
            mm='0'+mm;
        } 
        today = mm+'-'+dd+'-'+yyyy;
        arr.push(today);
        this.props.update(arr);
        console.log(this.state)
        this.hide_post_input();
    };

    
    render() {
        return (
            <div>
                <button onClick={this.show_post_input.bind(this)}>
                 Write A Post
              </button>
            {this.state.showPost ?
            <form onSubmit={this.update_posts}>
                <label style = {{marginLeft: "10px"}}>
                    <input type="text" placeholder="Enter Title" style = {{width: "400px"}} onChange = {this.title_change.bind(this)}/>
                </label>
                <label style = {{marginLeft: "10px"}}>
                    <input type="text" placeholder="Enter Post Body" style = {{width: "400px"}} onChange ={this.content_change.bind(this)}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
            : null }
            </div>
        );
    }};

export default WritePost;

