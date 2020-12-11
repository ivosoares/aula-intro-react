import React from "react";
import "./Button.css"
import PropTypes from 'prop-types';

function Button(props) {
    console.log(props.children)
    return (
        <div>
            <p>texto do botao</p>
            {props.children}
            <button className={props.nameclass} id={props.idprop}>{props.text}</button>
        </div>
    );
}

Button.propTypes = {
    text: PropTypes.string,
}
Button.defaultProps = {
    text: 'Click',
    nameclass: 'default'
}

export default Button;