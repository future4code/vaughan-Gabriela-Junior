import React from 'react';
import {BoxCardPequeno} from './styles-CardPequeno.js'

function CardPequeno(props) {
    return (
        <BoxCardPequeno>
            <img src={ props.icone } />
            <p><b>{ props.titulo }</b>
                { props.informacao }</p>
        </BoxCardPequeno>
    )
}

export default CardPequeno;