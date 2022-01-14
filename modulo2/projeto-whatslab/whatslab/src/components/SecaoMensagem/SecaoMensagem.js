import React from 'react';
import {CardMensagem} from './style-SecaoMensagem.js';
import {BalaoMensagem} from './style-SecaoMensagem.js';
import {InputContainer} from './style-SecaoMensagem.js';
import {EstiloInputNome} from './style-SecaoMensagem.js';
import {EstiloNome} from './style-SecaoMensagem.js';
import {EstiloInputMensagem} from './style-SecaoMensagem.js';
import {EstiloMensagens} from './style-SecaoMensagem.js';
import { EstiloBotao } from './style-SecaoMensagem.js';
import enviarIcone from '../../imgs/send.svg'

class SecaoMensagem extends React.Component {

    state = {
        inputNomeUsuario: "",
        mensagens: [
            { nome: "", mensagem: "" }
        ],
        inputMensagem: ""
    };

    onChangeNomeUsuario = (event) => {
        this.setState({ inputNomeUsuario: event.target.value })
    }

    onChangeMensagem = (event) => {
        this.setState({ inputMensagem: event.target.value });
    };

    enviarMensagem = () => {
        const novaMensagem = {
            nome: `${this.state.inputNomeUsuario}:`,
            mensagem: this.state.inputMensagem
        };
        const novoMensagens = [...this.state.mensagens, novaMensagem]
        this.setState({ mensagens: novoMensagens });
        this.setState({ inputMensagem: "" });
    };

    render() {

        const apareceMensagens = this.state.mensagens.map((item) => {
            if (item.nome === "" || item.nome === ":" || item.mensagem === "") {
            } else {
                return <BalaoMensagem>
                <EstiloNome>{item.nome}</EstiloNome>
                <p>{item.mensagem}</p>
            </BalaoMensagem>
            }
        })


        return <CardMensagem>
            <InputContainer>
                <EstiloInputNome
                    placeholder={`Nome`}
                    value={this.state.inputNomeUsuario}
                    onChange={this.onChangeNomeUsuario}
                />

                <EstiloInputMensagem
                    placeholder={`Mensagem`}
                    value={this.state.inputMensagem}
                    onChange={this.onChangeMensagem}
                />
                <EstiloBotao onClick={this.enviarMensagem} type="submit" ><img src={enviarIcone} alt="Ícone de Enviar"/></EstiloBotao>
            </InputContainer>

            <EstiloMensagens>
                {apareceMensagens}
            </EstiloMensagens>
        </CardMensagem>

    }
}

export default SecaoMensagem;