import React from 'react';
import axios from 'axios';
import { MainStyle, ListOfUsersStyle, ListUsersContainers, ButtonReturn, StyleButtons } from '../style-app.js';


export default class UsersList extends React.Component {
    state = {
        users: [],
        searchNameInput: "",
    }

    componentDidMount() {
        this.getAllUsers()
    }

    getAllUsers = async () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
        const config = {
            headers: {
                Authorization: "gabriela-junior-vaughan"
            }
        };

        try {
            const response = await axios.get(url, config)
            this.setState({ users: response.data })

        } catch (error) {
            alert(`Ocorreu um erro. Tente novamente.`)
        }

    };

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
            this.getAllUsers()

        } catch (error) {
            alert(`Erro ao deletar usuário: ${error.response.data.message}`)
        }
    };

    searchUsers = async (nameUser) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${nameUser}`
        const config = {
            headers: {
                Authorization: "gabriela-junior-vaughan"
            }
        }

        try {
            const response = await axios.get(url, config)
            console.log(response.data)
            this.setState({ users: response.data })
        } catch (error) {
            console.log(error.response.data)
        }
    }

    changeNameUser = (event) => {
        this.setState({ searchNameInput: event.target.value })
    }

    render() {

        const usersList = this.state.users.map((user) => {
            return (
                <ListOfUsersStyle key={user.id}>
                    {user.name}
                    <StyleButtons>
                        <button onClick={() => { this.props.changeToUserDetails(user.id) }}> ... </button>
                        <button onClick={() => {
                            if (window.confirm(`Tem certeza que deseja deletar esse usuário?`)) {
                                return this.deleteUser(user.id)
                            } else {
                                return
                            }
                        }}>X</button>
                    </StyleButtons>
                </ListOfUsersStyle>
            )
        });

        return (
            <MainStyle>
                <ListUsersContainers>
                    <h1>Lista de Usuários</h1>
                    {/* <input
                        placeholder="Buscar nome de usuário"
                        value={this.state.searchNameInput}
                        onChange={this.changeNameUser}
                    />
                    <button onClick={() => { this.searchUsers() }}>Procurar</button> */}
                    {this.state.users.length > 0 ? (usersList) : <p>Carregando...</p>}

                </ListUsersContainers>
                <ButtonReturn onClick={this.props.changeToNewUser}>Voltar</ButtonReturn>
            </MainStyle>
        )
    }
}