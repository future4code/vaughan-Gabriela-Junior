import React from "react";
import axios from "axios";
import { MainStyle, ButtonListUsers, RegistrationContainer, Input, ButtonCreateUser } from '../style-app.js'

export default class NewUser extends React.Component {
    state = {
        inputName: "",
        inputEmail: "",
    }

    addName = (event) => {
        this.setState({ inputName: event.target.value })
    };

    addEmail = (event) => {
        this.setState({ inputEmail: event.target.value })
    };

    createUser = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            name: this.state.inputName,
            email: this.state.inputEmail,
        }
        const config = {
            headers: {
                Authorization: "gabriela-junior-vaughan"
            }
        }

        axios.post(url, body, config)
            .then((response) => {
                this.setState({ inputName: "", inputEmail: "" })
                alert(`Usuário criado com sucesso`)
            })
            .catch((error) => {
                alert(`Erro na criação do usuário: ${error.response.data.message}`)
            });
    };

    render() {
        return (
            <MainStyle>
                <ButtonListUsers onClick={this.props.changeToUsersList}>Ver Lista de Usuários</ButtonListUsers>

                <RegistrationContainer>
                    <h1>Cadastro</h1>
                    <Input
                        placeholder="Nome do Usuário"
                        value={this.state.inputName}
                        onChange={this.addName}
                    />
                    <Input
                        placeholder="Email do Usuário"
                        value={this.state.inputEmail}
                        onChange={this.addEmail}
                    />
                    <div>
                        <ButtonCreateUser onClick={this.createUser}>Criar Usuário</ButtonCreateUser>
                    </div>
                </RegistrationContainer>
            </MainStyle>
        )
    }
}