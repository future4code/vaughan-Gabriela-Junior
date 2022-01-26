import React from 'react';
import axios from 'axios';
import { MainStyle, ButtonReturn, ListUsersContainers, DetailsContainer } from '../style-app.js';
import { ThemeConsumer } from 'styled-components';


export default class UserDetails extends React.Component {
    state = {
        user: {},
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
                        <ButtonReturn onClick={this.changeOpenInput}>
                            Editar
                        </ButtonReturn>
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