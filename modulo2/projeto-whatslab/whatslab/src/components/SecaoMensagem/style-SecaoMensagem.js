import styled from 'styled-components';

export const CardMensagem = styled.div`
    /* display: flex;
    justify-content: center;
    align-items: flex-end;
    border: 2px solid black;
    height: 98vh;
    width: 100vh;
    background-color: #292828; */
    display: grid;
    align-content: end;
    border: 1px solid gray;
    width: 50vw;
    height: 100vh;
    margin: 10px 0;
`
export const BalaoMensagem = styled.div`
    display: flex;
    padding: 10px;
    background-color: white;
    color: black;
    margin: 10px;
    border-radius: 0.5em;
    box-shadow: 2px 3px 5px 2px #121111;
    `

export const InputContainer = styled.div`
    /* position: fixed;
    bottom: 0; */
    width: 50vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 20px;
`

export const EstiloInputNome = styled.input`
    width: 20%;
    padding: 5px;
    margin-right: 8px;
    border-radius: 0.5em;
    border: none;
    :focus {
        border: 2px solid purple; 
    }
`

export const EstiloNome = styled.p`
    font-weight: bold;
    margin-right: 5px;
`

export const EstiloInputMensagem = styled.input`
    width: 70%;
    margin-right: 8px;
    padding: 5px;
    border-radius: 0.5em;
    border: none;
    :focus {
        border: 2px solid purple; 
    }
`

export const EstiloMensagens = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    margin-right: 30vw;
`

export const EstiloBotao = styled.button`
    background-color: violet;
    border: 0;
    padding: 5px;
    border-radius: 0.5em;
    cursor: pointer;

    :hover {
        background-color: #f8baff;
}
`