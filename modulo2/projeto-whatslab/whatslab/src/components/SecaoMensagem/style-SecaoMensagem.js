import styled from 'styled-components'

export const CardMensagem = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    border: 2px solid black;
    height: 98vh;
    width: 80vh;
    background-color: #292828;
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
    position: fixed;
    bottom: 0;
    width: 100vw;
    display: flex;
    justify-content: center;
    margin: 20px 0;
`

export const EstiloInputNome = styled.input`
    width: 5%;
    padding: 5px;
    margin-right: 8px;
    border-radius: 0.5em;
`

export const EstiloNome = styled.p`
    font-weight: bold;
    margin-right: 5px;
`

export const EstiloInputMensagem = styled.input`
    width: 24%;
    margin-right: 8px;
    padding: 5px;
    border-radius: 0.5em;
`

export const EstiloMensagens = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
`

export const EstiloBotao = styled.button`
    background-color: lightgray;
    border: 0;
    padding: 5px;
    border-radius: 50%;
    cursor: pointer;

    :hover {
    background-color: white;

}
`