import React from "react";
import "./List.css"

function List(props) {
    return (
        <div>
            <ul>
                {props.data.map((item, index) => <li key={index}> {item} {index}</li>)}
            </ul>
            {props.children}
        </div>
    );
}

export default List;