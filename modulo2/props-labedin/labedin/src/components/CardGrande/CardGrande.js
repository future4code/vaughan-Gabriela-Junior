import React from 'react';
import {BoxCardGrande} from './styles-CardGrande.js';

function CardGrande(props) {
    return (
        <BoxCardGrande>
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </BoxCardGrande>
    )
}

export default CardGrande;