import { Component } from 'react'
import {EstiloInputs} from '../style';

export class DadosEducacionais extends Component {
    render () {
        return <div>
            <h1>Informações Educacionais</h1>

            <h3>Qual o curso?</h3>
            <EstiloInputs />

            <h3>Qual a unidade de ensino?</h3>
            <EstiloInputs />

        </div>
    }
}