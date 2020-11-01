import React from 'react';




class Join extends React.Component {
    constructor(props) {
        super(props);
       
        this.state = {showForm: false};

}
    popup() {
        this.setState({showForm: true})
        console.log(this.state)
    };

    close_form() {
        this.setState({showForm: false})
    };

render() {
    return (
        <div>
        <button onClick={this.popup.bind(this)}>
            Register
        </button>
        {this.state.showForm ?
        <form>
            <h2>Join:</h2>
            <label style = {{marginRight: "20px"}}>
                Email:
                <input type="text" name="email" />
            </label>
            <label>
                Username:
                <input type="text" name="username" />
            </label>
            <label>
                Password:
                <input type="text" name="password" />
            </label>
            <input type="submit" value="Submit"  />
        </form>
        : null}
        </div>
    )
}};

export default Join;