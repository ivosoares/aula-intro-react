import React from "react";
import { Component } from "react";
import Button from "../button/Button";
import List from "../list/List";
import './Demo.css';

class Demo extends Component {
    state = {
        nome: 'Ivonaldo',
        idade: 25
    };

    clickNoBotao = () => {
        console.log('Clicou no botao');
        this.setState({
            nome: 'Leonardo',
            idade: 26
        })
    };

    render() {
        const usuarios = ["Ivonaldo", "Leo", "Maria", "Ivonaldo"];
        return(
            <div>
                <h1>{this.state.nome} tem {this.state.idade} Anos.</h1>
                <button onClick={this.clickNoBotao}>Altera nome</button>
                <Button nameclass="sucesso" text="teste">
                    <h1>teste</h1>
                    <p>teste</p>
                </Button>
                <Button text="meu texto"/>
                <Button nameclass="alerta" idprop="Teste1" text="teste"/>
                <Button text="teste"/>
                <Button nameclass="sucesso" idprop="Teste" text="teste"/>
                <List data={usuarios}>
                    <h3>Lista 1</h3>
                    <p>Descricao da minha lista</p>
                </List>

                <List data={usuarios}>
                    <h2>Lista 2</h2>
                </List>

                <h2>Lista 3</h2>
                <p>conteudo da lista 3 na branch nova</p>
                <p>teste de novo commit</p>
            </div>
        )
    }
}

export default Demo;