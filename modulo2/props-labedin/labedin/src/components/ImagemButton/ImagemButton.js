import React from 'react';
import {ImagensStyle} from './styles-ImagemButton.js';

function ImagemButton(props) {
    return (
        <ImagensStyle>
            <img src={ props.imagem }/>
            <p>{ props.texto }</p>
        </ImagensStyle>

    )
}

export default ImagemButton;