import { Component } from 'react'
import {EstiloInputs} from '../style';
import {EstiloForms} from '../style';

export class NaoFormou extends Component {
    render () {
        return <div>
            <h3>Por que você não terminou um curso de graduação?</h3>
            <EstiloInputs />

            <EstiloForms>
            <label for="curso-complementar"><h3>Você fez algum curso complementar?</h3></label>
            <select name="curso-complementar" id="curso-complementar">
                <option value="curso-tecnico">Curso Técnico</option>
                <option value="curso-ingles">Cursos de Inglês</option>
                <option value="nao-fiz-curso">Não fiz curso complementar</option>
            </select></EstiloForms>

        </div>
    }
}