import React from "react";
import { Component } from "react";
import Text from "../text/Text";
import './Demo.css';

class Demo extends Component {
    render() {
        return(
            <div>
                <h1>Hello World!</h1>
                <Text nameclass="sucesso" text="Salvar"></Text>
                <Text nameclass="sucesso" text="Concluir"></Text>
                <Text nameclass="falha" text="Cancelar"></Text>
                <Text nameclass="sucesso" text="Clique aqui para Salvar"></Text>
            </div>
        )
    }
}

export default Demo;