import styled from 'styled-components';

export const HeaderStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #141414;
    color: #c4c4c4;
    button{
        margin: 10px;
        background: none;
        border: none;
        color: #c4c4c4;
        font-size: 1.5rem;
        cursor: pointer;
        :hover{
            border-bottom: 1px solid #c4c4c4;
        }
    }
    h1{
        align-self: center;
    }

`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 10px;
    button{
        margin: 10px;
        background: none;
        border: none;
        font-size: 1.5rem;
        color: #c4c4c4;
        cursor: pointer;
        :hover{
            border-bottom: 1px solid #c4c4c4;
        }
    }
`