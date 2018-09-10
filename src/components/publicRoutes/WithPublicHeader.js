import React, { Component } from "react";
import { Link } from "react-router-dom";
class WithPublicHeader extends Component {
    header = {
        display: "flex",
        justifyContent: "space-evenly",
        listStyle: "none",
        backgroundColor: "lightgray"
    };
    render() {
        return (
            <div style={this.header}>
                <Link to={{
                    pathname: this.props.match.url + '/home'
                }}><h2>public Home</h2></Link>
                <Link to={{
                    pathname: this.props.match.url + '/about'
                }}><h2>public about</h2></Link>
                <Link to={{
                    pathname: '/private'
                }}><h2>LOGIN</h2></Link>
            </div>
        );
    }
}
export default WithPublicHeader;

