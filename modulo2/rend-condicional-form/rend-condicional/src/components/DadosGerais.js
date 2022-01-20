import React from 'react';
import {EstiloInputs} from '../style';
import {EstiloForms} from '../style';

export class DadosGerais extends React.Component {
    render() {
        return (<div>

            <h1>Dados Gerais</h1>
            <h3>Nome</h3>
            <EstiloInputs type="text" />

            <h3>Idade</h3>
            <EstiloInputs type="text" />

            <h3>Email</h3>
            <EstiloInputs type="text" />

            <EstiloForms>
            <label for="escolaridade"><h3>Qual o grau de escolaridade?</h3></label>
            <select name="escolaridade" id="escolaridade">
                <option value="ensino-medio-incompleto">Ensino Médio Incompleto</option>
                <option value="ensino-medio-completo">Ensino Médio Completo</option>
                <option value="ensino-superior-incompleto">Ensino Superior Incompleto</option>
                <option value="ensino-superior-completo">Ensino Superior Completo</option>
            </select></EstiloForms>


            </div>
        )

    }

}