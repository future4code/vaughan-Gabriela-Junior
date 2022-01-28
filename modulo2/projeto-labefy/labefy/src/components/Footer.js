import React from "react";
import { FooterStyle, IconContainer, ButtonIcon } from "./styled-config";
import playIconWhite from "../assets/imgs/play-white.svg";
import skipNext from "../assets/imgs/skip-next-white.svg";
import skipPrevious from "../assets/imgs/skip-previous-white.svg";

export default class Footer extends React.Component {
    render() {
        return (
            <FooterStyle>
                <ButtonIcon><IconContainer src={skipPrevious} alt="Música Anterior"/></ButtonIcon>
                <ButtonIcon><IconContainer src={playIconWhite} alt="Ícone de play"/></ButtonIcon>
                <ButtonIcon><IconContainer src={skipNext} alt="Próxima música"/></ButtonIcon>
            </FooterStyle>
        )
    }
}