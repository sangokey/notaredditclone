import React from 'react';
import Login from './Login';

class Header extends React.Component {
    constructor(props) {
        super(props);
    };



render() {
    return (
            <header style = {{position: 'fixed', width: "100%", top: "0px", marginBottom: "50px", backgroundColor: "black", color:"white"}}>
            <h1 style = {{display: "inline-block", marginLeft: "10px"}}> Not A Reddit Clone </h1>
            <h4 style = {{float: 'right', display: "inline-block", marginRight: "10px"}}> {this.props.user ? "Logged in as: " + this.props.user : <Login func = {this.props.func}/>} </h4>
            

            </header>
            
);
} }
export default Header;