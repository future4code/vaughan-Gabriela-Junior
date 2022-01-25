import React from 'react';
import axios from 'axios';
import { createGlobalStyle } from 'styled-components';
import { MainStyle, RegistrationContainer, Input, ButtonListUsers, ButtonCreateUser, ListUsersContainers, ButtonReturn, ListOfUsersStyle } from './style-app.js';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }

  body {
    background-color: #171717;
    color: white;
  }
`

class App extends React.Component {

  state = {
    users: [],
    inputName: "",
    inputEmail: "",
    userList: false,
  }

  componentDidMount() {
    this.getAllUsers()
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
        console.log(JSON.stringify(response.data));
        this.setState({ inputName: "", inputEmail: "" })
        alert(`Usuário criado com sucesso`)
        this.getAllUsers()
      })
      .catch((error) => {
        console.log(error.response.data);
        alert(`Erro na criação do usuário: ${error.response.data.message}`)
      });
  };

  getAllUsers = () => {
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
    const config = {
      headers: {
        Authorization: "gabriela-junior-vaughan"
      }
    };

    axios.get(url, config)
      .then((response) => {
        this.setState({ users: response.data })
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error.response.data)
      })
  };

  deleteUser = (userId) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`
    const config = {
      headers: {
        Authorization: "gabriela-junior-vaughan"
      }
    }

    axios.delete(url, config)
      .then((response) => {
        console.log(response.data)
        alert(`Usuário deletado com sucesso!`)
        this.getAllUsers()
      })
      .catch((error) => {
        console.log(error.response.data)
        alert(`Erro ao deletar usuário: ${error.response.data.message}`)
      })
  }

  changeRenderization = () => {
    this.setState({
      userList: !this.state.userList
    })
  }

  render() {

    const usersList = this.state.users.map((user) => {
      return (
        <ListOfUsersStyle key={user.id}>
          {user.name} <button onClick={() => {
            if (window.confirm(`Tem certeza que deseja deletar esse usuário?`)) {
              return this.deleteUser(user.id)
            } else {
              return
            }
          }}>X</button>
        </ListOfUsersStyle>
      )
    });

    const renderListOfUsers = () => {
      if (this.state.userList) {
        return (
          <ListUsersContainers>
            <h1>Lista de usuários</h1>
            {usersList}
            <ButtonReturn onClick={this.changeRenderization}>Voltar</ButtonReturn>
          </ListUsersContainers>
        )
      } else {
        return (
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
        )
      }
    }

    return (
      <MainStyle>
        <GlobalStyle />
        <div>
          {this.state.userList === false && <ButtonListUsers onClick={this.changeRenderization}> Ver Lista de Usuários</ButtonListUsers>}
        </div>
        {renderListOfUsers()}

      </MainStyle>
    );
  }
}

export default App;