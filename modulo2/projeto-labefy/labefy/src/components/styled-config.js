import styled from 'styled-components';
import { corPrimaria, corSecundaria, corTerciaria } from '../constants/colors'

//Header Style
export const HeaderStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${corPrimaria};
    height: 10vh;
    padding: 0 15px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    h1 {
        font-size: 2.3rem;
        padding: 10px 30px;
    }
    button {
        padding: 10px;
        font-size: 1rem;
        background-color: ${corSecundaria};
        border: 1px solid ${corTerciaria};
        color: white;
        cursor: pointer;
        :hover {
            background-color: ${corTerciaria};
            border: 1px solid white;
            color: black;
        }
    }
    img {
        width: 50px;
        height: 50px;
    }
`
//Playlist Page Style
export const PlaylistDiv = styled.div`
    /* display: grid; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    padding-top: 10vh;
    padding-bottom: 10vh;
    margin: 20px;
    align-items: center;
    h2 {
        font-size: 2rem;
        margin-bottom: 20px;
        img {
            width: 30px;
            height: 30px;
        }
    }
`

export const PlaylistContainer = styled.div`
    width: 95vw;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
`

export const CreatePlaylistContainer = styled.div`
    grid-area: 1 / 1 / -3 ;
    margin: 20px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* width: 20%; */
    border: 1px solid ${corTerciaria};
    h3 {
        padding: 20px;
    }
    input{
        margin: 0 20px 10px;
        padding: 8px;
        width: 70%;
    }
    button{
        padding: 10px;
        width: 50px;
        height: 50px;
        background-color: ${corSecundaria};
        border: 1px solid ${corTerciaria};
        border-radius: 50%;
        cursor: pointer;
        :hover{
        background-color: ${corPrimaria};
            img {
            width: 25px;
            height: 25px;
            }
        }
    }
`

export const PlaylistList = styled.div`
    border: 1px solid ${corTerciaria};
    margin: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    font-size: 1.3rem;
    padding: 10px;
    :hover{
        background-color: ${corTerciaria};
    }
`

export const ButtonNoStyle = styled.div`
    background-color: none;
    border: none;
    text-decoration: none;
`

export const ButtonsContainer = styled.button`
    margin: 10px;
    padding: 10px;
    width: 50px;
    height: 50px;
    background-color: ${corSecundaria};
    border: 1px solid ${corTerciaria};
    border-radius: 50%;
    cursor: pointer;
    :hover{
        background-color: ${corPrimaria};
    }
    img {
        width: 25px;
        height: 25px;
    }
`

//Footer Style
export const FooterStyle = styled.div`
    background-color: ${corPrimaria};
    border-top: 1px solid ${corTerciaria};
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
`

export const IconContainer = styled.img`
    width: 30px;
    height: 30px;
`

export const ButtonIcon = styled.button`
    background-color: #141414;
    margin: 0 10px;
    border: none;
    border-radius: 50%;
    padding: 5px;
    cursor: pointer;
    :hover{
        background-color: ${corTerciaria};
    }

`