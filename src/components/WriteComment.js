import React from 'react';

class WriteComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {contents: "", showComment: false}
        this.update_comments = this.update_comments.bind(this);
    };
    show_comment_input () {
        this.setState({showComment : true})
    };

    hide_comment_input () {
        this.setState({showComment: false})
    };

    

    content_change (e) {
        this.setState({contents: e.target.value})
    };

    
   

    update_comments (e) {
        e.preventDefault();

        const arr = [];
        arr.push(this.state.title);
        arr.push(this.props.username ? this.props.username : "Anonymous");
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
        this.hide_comment_input();
    };

    
    render() {
        return (
            <div>
                <button onClick={this.show_comment_input.bind(this)}>
                 Write A Comment
              </button>
            {this.state.showComment ?
            <form onSubmit={this.update_comments}>
                <label style = {{marginLeft: "10px"}}>
                    <input type="text" placeholder="Enter Comment Body" style = {{width: "400px"}} onChange ={this.content_change.bind(this)}/>
                </label>
                
                <input type="submit" value="Submit" />
            </form>
            : null }
            </div>
        );
    }};

export default WriteComment;

