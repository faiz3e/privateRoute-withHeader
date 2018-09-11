import React, { Component } from "react";
import { Link } from "react-router-dom";
class WithPublicHeader extends React.PureComponent {
    header = {
        display: "flex",
        justifyContent: "space-evenly",
        listStyle: "none",
        backgroundColor: "lightgray"
    };
    render() {
        console.log("render method is called of public header");
        return (
            <div style={this.header}>
                <Link to={{
                    pathname:  '/publicHome'
                }}><h2>public Home</h2></Link>
                <Link to={{
                    pathname: '/publicAbout'
                }}><h2>public about</h2></Link>
                <Link to={{
                    pathname: '/privateHome'
                }}><h2>LOGIN</h2></Link>
            </div>
        );
    }
}
export default WithPublicHeader;

