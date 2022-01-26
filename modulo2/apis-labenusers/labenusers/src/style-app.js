import styled from 'styled-components';

export const MainStyle = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    justify-items: center;
    align-content: center;
    width: 100vw;
`

// Estilização Área de Cadastro
export const RegistrationContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
    width: 100%;
    padding: 20px;
    margin: 20px;
`

export const Input = styled.input`
    margin: 20px 20px 10px;
    padding: 10px;
`

export const ButtonListUsers = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px;
    padding: 10px;
    background-color: black;
    color: white;
    border: 1px solid white;
    cursor: pointer;

    :hover {
    background-color: lightgray;
    color: black;
    }
`

export const ButtonCreateUser = styled.button`
    padding: 10px;
    margin-top: 10px;
    background-color: black;
    color: white;
    border: 1px solid white;
    cursor: pointer;

    :hover {
    background-color: lightgray;
    color: black;
    }
`

//Estilização Lista de Usuários

export const ListUsersContainers = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
    width: 100%;
    padding: 20px;
    margin: 20px 0;
    h1{
        margin-bottom: 10px;
    }
`

export const ListOfUsersStyle = styled.div`
    margin: 10px;
    padding: 10px;
    border: 1px solid white;
    display: flex;
    justify-content: space-between;
    width: 100%;
    button{
        border: 1px solid white;
        padding: 0 10px;
        background-color: black;
        color: white;
        font-weight: bold;
        cursor: pointer;
        :hover {
            background-color: lightgray;
            color: black;
        }
    }
`

export const ButtonReturn = styled.div`
    padding: 10px;
    margin-top: 10px;
    background-color: black;
    color: white;
    border: 1px solid white;
    cursor: pointer;

    :hover {
    background-color: lightgray;
    color: black;
    }
`

export const StyleButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    button{
        margin-left: 10px;
    }
`

// Estilização Detalhes do Usuário

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3{
        margin: 10px;
    }
`