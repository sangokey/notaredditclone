import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showLogin: false, showRegister: false, login: {username: null, password: null}, registration: {email: null, username: null, password: null}};

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

    registerFunction () {

    };

    logInFunction (e) {
        e.preventDefault();
        this.props.func(this.state.login.username);
        console.log(this.state)
        this.close_login() ;
    }

    username_change (e) {
        
        this.setState({login: {username: e.target.value, password: this.state.login.password}})
    };

    password_change (e) {
        this.setState({login: {username: this.state.login.username, password: e.target.value}})
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
        <form onSubmit = {this.registerFunction.bind(this)}>
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
        <form onSubmit = {this.logInFunction.bind(this)}>
            <label style = {{marginRight: "20px"}}>
            Username:
            <input type="text" name="name" onChange = {this.username_change.bind(this)} />
            </label>
            <label>
                Password:
                <input type="text" name="password" onChange = {this.password_change.bind(this)}/>
            </label>
            <input type="submit" value="Submit" />
        </form>
        : null }
        </div>
    )
}};

export default Login;