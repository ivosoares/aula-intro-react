import React from "react";
import "./List.css"
import styled from 'styled-components';

// const estilosLista = {
//     background: 'red',
//     color: 'white',
//     fontSize: '16px',
// }

const ListaEstilizada = styled.ul`
    background: red;
    color: white;
    font-size: 16px;
    @media(max-width: 1000px) {
        background: yellow;
    }
`;

function List(props) {
    return (
        <div>
            <ListaEstilizada>
                {props.data.map((item, index) => <li key={index}> {item} {index}</li>)}
            </ListaEstilizada>

            <ListaEstilizada>
                <li>lista 1</li>
                <li>lista 2</li>
            </ListaEstilizada>
            {props.children}
        </div>
    );
}

export default List;