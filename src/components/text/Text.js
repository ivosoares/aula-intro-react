import React from "react";
import { Component } from "react";
import "./Text.css"

class Text extends Component {
    render() {
        return(
           <button className={this.props.nameclass}>{this.props.text}</button>
        )
    }
}

export default Text;