import styled from 'styled-components';
import { mainColor, secondColor, thirdColor } from '../constants/colors'

//Header Style
export const HeaderStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${mainColor};
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
        background-color: ${secondColor};
        border: 1px solid ${thirdColor};
        color: white;
        cursor: pointer;
        :hover {
            background-color: ${thirdColor};
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
    border: 1px solid ${thirdColor};
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
        background-color: ${secondColor};
        border: 1px solid ${thirdColor};
        border-radius: 50%;
        cursor: pointer;
        :hover{
        background-color: ${mainColor};
            img {
            width: 25px;
            height: 25px;
            }
        }
    }
`

export const PlaylistList = styled.div`
    border: 1px solid ${thirdColor};
    margin: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    font-size: 1.3rem;
    padding: 5px;
    :hover{
        background-color: ${thirdColor};
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
    background-color: ${secondColor};
    border: 1px solid ${thirdColor};
    border-radius: 50%;
    cursor: pointer;
    :hover{
        background-color: ${mainColor};
    }
    img {
        width: 25px;
        height: 25px;
    }
`

//Playlist Details Style
export const MainDivDetails = styled.div`
    margin-top: 10vh;
    margin-bottom: 10vh;
    padding: 10px;
`

export const DetailsStyle = styled.div`
    display: flex;
    padding: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2{
        margin: 20px;
    }
`

export const ButtonReturn = styled.button`
    padding: 10px 15px;
    color: white;
    font-weight: bold;
    font-size: 1.2rem;
    background-color: ${mainColor};
    border: 1px solid ${thirdColor};
    cursor: pointer;
    :hover{
        background-color: ${thirdColor};
        border: 1px solid white;
    }
`

export const PageStyle = styled.div`
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr 1fr;
    width: 100%;
`

export const AddTrackStyle = styled.div`
    grid-area: 1 / 1 / -4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    width: 60%;
    margin: 0 10px 20px;
    border: 1px solid ${thirdColor};
    h3 {
        margin: 10px;
    }
    input{
        margin: 10px;
        padding: 5px;
    }
    button {
        background-color: #141414;
        margin: 10px 0 0;
        border: none;
        border-radius: 50%;
        padding: 5px;
        cursor: pointer;
        :hover{
            background-color: ${thirdColor};
        }
    }
`

export const ButtonDelete = styled.button`
        background-color: ${secondColor};
        margin: 10px;
        border: 1px solid ${thirdColor};
        border-radius: 50%;
        padding: 5px;
        cursor: pointer;
        :hover{
            background-color: ${mainColor};
        }
`

export const TracksStyle = styled.div `
    margin: 10px;
    padding: 10px;
    width: 90%;
    border: 1px solid ${thirdColor};
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
        padding: 10px;
    }
    :hover{
        background-color: ${thirdColor};
    }
`

//Footer Style
export const FooterStyle = styled.div`
    background-color: ${mainColor};
    border-top: 1px solid ${thirdColor};
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
        background-color: ${thirdColor};
    }

`