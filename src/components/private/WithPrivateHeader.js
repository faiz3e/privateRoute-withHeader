import React, { Component } from "react";
import { Link } from "react-router-dom";
class WithPrivateHeader extends Component {
 
    header = {
        display: "flex",
        justifyContent: "space-evenly",
        listStyle: "none",
        backgroundColor:"lightblue"
    };
    render() {
        return (
            <div style={this.header}>
                <Link to={{
                    pathname: this.props.match.url + '/home'
                }}><h2>private Home</h2></Link>
                <Link to={{
                    pathname: this.props.match.url + '/about'
                }}><h2>private about</h2></Link>
                  <Link to={{
                    pathname:'/public'
                }}><h2> LOGOUT </h2></Link>
            </div>
        );
    }
}
export default WithPrivateHeader;

