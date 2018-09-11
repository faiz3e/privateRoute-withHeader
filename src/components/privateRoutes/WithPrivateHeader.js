import React, { Component } from "react";
import { Link } from "react-router-dom";
class WithPrivateHeader extends React.PureComponent {
 
    header = {
        display: "flex",
        justifyContent: "space-evenly",
        listStyle: "none",
        backgroundColor:"lightblue"
    };
    render() {
        console.log("render method is called of privarte header");
        return (
            <div style={this.header}>
                <Link to={{
                    pathname:  '/privateHome'
                }}><h2>private Home</h2></Link>
                <Link to={{
                    pathname: '/privateAbout'
                }}><h2>private about</h2></Link>
                  <Link to={{
                    pathname:'/'
                }}><h2> LOGOUT </h2></Link>
            </div>
        );
    }
}
export default WithPrivateHeader;

