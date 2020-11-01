import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showLogin: false, showRegister: false};

    }
    show_login() {
        this.setState({showLogin: true})
    };

    close_login() {
        this.setState({showLogin: false})
    };
    
    show_register() {
        this.setState({showRegister: true})
    };
    
    close_register() {
        this.setState({showRegister: false})
    };

render() {
    return (
        <div>
            <button onClick={this.show_login.bind(this)}>
                 Log In
            </button>

            <button onClick={this.show_register.bind(this)}>
                Register
            </button>

        {this.state.showRegister ?
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

        {this.state.showLogin ?
        <form>
            <label style = {{marginRight: "20px"}}>
            Username:
            <input type="text" name="name" />
            </label>
            <label>
                Password:
                <input type="text" name="password" />
            </label>
            <input type="submit" value="Submit" />
        </form>
        : null }
        </div>
    )
}};

export default Login;