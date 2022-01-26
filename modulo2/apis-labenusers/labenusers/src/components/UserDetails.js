import React from 'react';
import axios from 'axios';
import { MainStyle, ButtonReturn, ListUsersContainers, DetailsContainer, Input } from '../style-app.js';


export default class UserDetails extends React.Component {
    state = {
        user: {},
        editNameInput: "",
        editEmailInput: "",
        inputOpen: false
    }

    componentDidMount() {
        this.getUserById()
    }

    getUserById = async () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.props.idDetails}`
        const config = {
            headers: {
                Authorization: "gabriela-junior-vaughan"
            }
        }

        try {
            const response = await axios.get(url, config)
            this.setState({ user: response.data })

        } catch (error) {
            console.log(error.response.data);
        }
    }

    deleteUser = async (userId) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`
        const config = {
            headers: {
                Authorization: "gabriela-junior-vaughan"
            }
        }

        try {
            await axios.delete(url, config)
            alert(`Usuário deletado com sucesso!`)
            this.props.changeToUsersList()
        } catch (error) {
            alert(`Erro ao deletar usuário: ${error.response.data.message}`)
        }
    };

    editUserNameInput = (event) => {
        this.setState({ editNameInput: event.target.value })
    }

    editUserEmailInput = (event) => {
        this.setState({ editEmailInput: event.target.value })
    }

    editUser = async (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        const body = {
            name: this.state.editNameInput,
            email: this.state.editEmailInput
        }
        const config = {
            headers: {
                Authorization: "gabriela-junior-vaughan"
            }
        }

        try {
            const response = await axios.put(url, body, config)
            alert(`Informações alteradas com sucesso!`)
            this.setState({ user: response.data })
            this.getUserById()
            this.setState({ inputOpen: !this.state.inputOpen })

        } catch (error) {
            console.log(error.response.data)
        }
    }

    changeOpenInput = () => {
        this.setState({ inputOpen: !this.state.inputOpen })
    }

    render() {

        return (
            <MainStyle>
                <ListUsersContainers>

                    <h1>Detalhe do Usuário</h1>
                    <DetailsContainer key={this.state.user.id}>
                        <h3>{this.state.user.name}</h3>
                        <p>Email: {this.state.user.email}</p>
                        {this.state.inputOpen ?
                            <ListUsersContainers>
                                <h3> Editar </h3>
                                <Input
                                    placeholder="Nome"
                                    value={this.state.editNameInput}
                                    onChange={this.editUserNameInput}
                                />
                                <Input
                                    placeholder="Email"
                                    value={this.state.editEmailInput}
                                    onChange={this.editUserEmailInput}
                                />
                                <ButtonReturn onClick={() => { this.editUser(this.props.idDetails) }}>Salvar</ButtonReturn>
                            </ListUsersContainers>
                            :
                            <ButtonReturn onClick={this.changeOpenInput}>
                                Editar
                            </ButtonReturn>
                        }

                        <ButtonReturn onClick={() => {
                            if (window.confirm(`Tem certeza que deseja deletar esse usuário?`)) {
                                return this.deleteUser(this.props.idDetails)
                            } else {
                                return
                            }
                        }}>Deletar Usuário</ButtonReturn>

                    </DetailsContainer>

                </ListUsersContainers>
                <ButtonReturn onClick={this.props.changeToUsersList}>Voltar</ButtonReturn>
            </MainStyle>
        )
    }
}