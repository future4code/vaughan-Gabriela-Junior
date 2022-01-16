import React from 'react';
import { CardMensagem } from './style-SecaoMensagem.js';
import { BalaoMensagem } from './style-SecaoMensagem.js';
import { InputContainer } from './style-SecaoMensagem.js';
import { EstiloInputNome } from './style-SecaoMensagem.js';
import { EstiloNome } from './style-SecaoMensagem.js';
import { EstiloInputMensagem } from './style-SecaoMensagem.js';
import { EstiloMensagens } from './style-SecaoMensagem.js';
import { EstiloBotao } from './style-SecaoMensagem.js';
import { BalaoMensagemEu } from './style-SecaoMensagem.js';
import enviarIcone from '../../imgs/send.svg'
import { Profiler } from 'react/cjs/react.production.min';

class SecaoMensagem extends React.Component {

    state = {
        inputNomeUsuario: "",
        mensagens: [
            { nome: "", mensagem: "", id: "" }
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
            nome: this.state.inputNomeUsuario,
            mensagem: this.state.inputMensagem,
            id: Math.random(),
        };
        const novoMensagens = [...this.state.mensagens, novaMensagem]
        this.setState({ mensagens: novoMensagens });
        this.setState({ inputMensagem: "" });
    };

    enviarMensagemComEnter = (event) => {
        if (event.key === 'Enter') {
            this.enviarMensagem()
        };
    };

    removerMensagem = (idMensagem) => {
        const mensagensCopia = [...this.state.mensagens];
        const mensagensNaoExcluidas = mensagensCopia.filter((item) => {
            return idMensagem !== item.id;
        });
        this.setState({mensagens: mensagensNaoExcluidas })
    }

    render() {

        const apareceMensagens = this.state.mensagens.map((item) => {
            if (item.nome === "" || item.mensagem === "") {
            } else {
                if (item.nome === "eu") {
                    return <BalaoMensagemEu onDoubleClick={() => {this.removerMensagem(item.id)}}>
                        <p>{item.mensagem}</p>
                    </BalaoMensagemEu>
                } else {
                    return <BalaoMensagem onDoubleClick={() => {this.removerMensagem(item.id)}}>
                        <EstiloNome>{item.nome}</EstiloNome>
                        <p>{item.mensagem}</p>
                    </BalaoMensagem>
                }
            }
        })

        return <CardMensagem>
            <EstiloMensagens>
                {apareceMensagens}
            </EstiloMensagens>

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
                    onKeyPress={this.enviarMensagemComEnter}
                />
                <EstiloBotao onClick={this.enviarMensagem} type="submit" ><img src={enviarIcone} alt="Ícone de Enviar" /></EstiloBotao>
            </InputContainer>
        </CardMensagem>
    }
}

export default SecaoMensagem;