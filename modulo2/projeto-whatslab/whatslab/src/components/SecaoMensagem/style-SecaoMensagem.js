import styled from 'styled-components';

export const CardMensagem = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-pack: end;
    justify-content: flex-end;
    border: 1px solid gray;
    width: 40vw;
    height: 100vh;
    margin: 10px 0;
    background-color: #292828;
`
export const BalaoMensagem = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    padding: 10px;
    background-color: white;
    color: black;
    margin: 10px;
    border-radius: 0.5em;
    box-shadow: 2px 3px 5px 2px #121111;
    `

export const BalaoMensagemEu = styled.div`
    display: flex;
    padding: 10px;
    background-color: #b88ad1;
    align-self: flex-end;
    color: black;
    margin: 10px;
    border-radius: 0.5em;
    box-shadow: 2px 3px 5px 2px #121111;
`

export const InputContainer = styled.div`
    width: 39.8vw;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: #111211;
`

export const EstiloInputNome = styled.input`
    width: 20%;
    padding: 5px;
    margin-right: 8px;
    border-radius: 0.5em;
    border: none;
    :focus {
        border: 2px solid violet; 
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
        border: 2px solid violet; 
    }
`

export const EstiloMensagens = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`

export const EstiloBotao = styled.button`
    background-color: #b88ad1;
    border: 0;
    padding: 5px;
    border-radius: 0.5em;
    cursor: pointer;

    :hover {
        background-color: #f8baff;
}
`