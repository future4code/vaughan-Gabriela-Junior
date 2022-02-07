import React from "react";
import { HeaderStyle } from "./styled-config";
import playCircle from '../assets/imgs/play-circle-outline.svg';


export default class Header extends React.Component {
    render() {
        return (
            <HeaderStyle>
                <img src={playCircle} alt="Ícone Play" />
                <h1>Hermenefy</h1>
                <button> Login </button>
            </HeaderStyle>
        )
    }
}