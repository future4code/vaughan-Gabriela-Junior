import React from 'react';
import axios from 'axios';
import { MainStyle, ListOfUsersStyle, ListUsersContainers, ButtonReturn, StyleButtons } from '../style-app.js';
import UserDetails from './UserDetails';

export default class UsersList extends React.Component {
    state = {
        users: [],
        userDetails: false
    }

    componentDidMount() {
        this.getAllUsers()
      }
    
    getAllUsers = async() => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
        const config = {
          headers: {
            Authorization: "gabriela-junior-vaughan"
          }
        };

        try {
            const response = await axios.get(url, config)
                this.setState({ users: response.data})
                console.log(response.data)

        } catch (error){
            alert(`Ocorreu um erro. Tente novamente.`)
        }

      };

      deleteUser = async(userId) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`
        const config = {
          headers: {
            Authorization: "gabriela-junior-vaughan"
          }
        }

        try {
            const response = await axios.delete(url, config)
                alert(`Usuário deletado com sucesso!`)
                this.getAllUsers()

        } catch (error) {
            alert(`Erro ao deletar usuário: ${error.response.data.message}`)
        }
      };

      getUserById = async (idUser) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${idUser}`
        const config = {
            headers: {
                Authorization: "gabriela-junior-vaughan"
            }
        }

        try {
            const response = await axios.get(url, config)
            console.log(response.data);
        } catch (error) {
            console.log(error.response.data);
        }
    }

    render () {

        const usersList = this.state.users.map((user) => {
            return (
              <ListOfUsersStyle key={user.id}>
                {user.name} 
                <StyleButtons>
                    {/* Botão pra ir pra tela de detalhes dos usuários que não tá funcionando */}
                <button onClick={this.props.changeToUserDetails}> ... </button>
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
                <h1>Lista de usuários</h1>
                {this.state.users.length > 0 ? (usersList) : <p>Carregando...</p>}
                </ListUsersContainers>
            <ButtonReturn onClick={this.props.changeToNewUser}>Voltar</ButtonReturn>
            </MainStyle>
        )
    }
}