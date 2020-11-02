import React from 'react';


class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {id: this.props.id, content: this.props.content, author: this.props.author, showEdit: false}
        this.update_comments = this.update_comments.bind(this);
     }

     toggle_edit () {
        this.setState({showEdit : !this.state.showEdit})
    };

    content_change (e) {
        this.setState({content: e.target.value})
    };

    update_comments(e) {
            e.preventDefault();
    
            const arr = [];
            arr.push(this.state.content);
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
        this.props.editfunc(arr, this.props.id)
        this.toggle_edit();
    }

render() {
    return (
        <div style = {{border: '2px solid', margin: '8px', marginRight: '30%'}}>


            <h5>{"Commented By: " + this.props.author}</h5>
            <h7>{"Posted On: " + this.props.create_date}</h7>

            <p>{this.props.content}</p>
            <button onClick={this.toggle_edit.bind(this)}>
                Edit
            </button>
            <button onClick={this.props.deletefunc.bind(this)}>
                Delete
            </button>
            {this.state.showEdit ?
            <form onSubmit={this.update_comments}>
    
                <label style = {{marginLeft: "10px"}}>
                    <input type="text" placeholder="Enter Comments" defaultValue = {this.props.content} style = {{width: "400px"}} onChange ={this.content_change.bind(this)}/>
                </label>
                <input type="submit" value="Submit" />

                </form>
                : null }
        </div> 
    );
} }
export default Comment;