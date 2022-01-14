import React from 'react';
import styled from 'styled-components'

const CardMensagem = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    border: 2px solid black;
    height: 98vh;
    width: 80vh;
    background-color: #292828;
`
const BalaoMensagem = styled.div`
    display: flex;
    padding: 10px;
    background-color: white;
    color: black;
    margin: 10px;
    border-radius: 0.5em;
    box-shadow: 2px 3px 5px 2px #121111;
    `

const InputContainer = styled.div`
    position: fixed;
    bottom: 0;
    width: 100vw;
    display: flex;
    justify-content: center;
    margin: 20px 0;
`

const EstiloInputNome = styled.input`
    width: 5%;
    padding: 5px;
    margin-right: 8px;
    border-radius: 0.5em;
`

const EstiloNome = styled.p`
    font-weight: bold;
    margin-right: 5px;
`

const EstiloInputMensagem = styled.input`
    width: 24%;
    margin-right: 8px;
    padding: 5px;
    border-radius: 0.5em;
`

const EstiloMensagens = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
`

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
                <button onClick={this.enviarMensagem} type="submit" >Enviar</button>
            </InputContainer>

            <EstiloMensagens>
                {apareceMensagens}
            </EstiloMensagens>
        </CardMensagem>

    }
}

export default SecaoMensagem;