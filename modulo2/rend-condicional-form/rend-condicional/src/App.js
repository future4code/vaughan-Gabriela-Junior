import React from 'react';
import { DadosGerais } from './components/DadosGerais.js'
import { DadosEducacionais } from './components/DadosEducacionais.js'
import { NaoFormou } from './components/NaoFormou.js'
import { Final } from './components/Final.js'
import {createGlobalStyle} from "styled-components";
import {Formulario} from './style';

const GlobalStyle = createGlobalStyle`
  * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  }
`

class App extends React.Component {

  state = {
    etapa: 1,
  }

  renderizarEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <DadosGerais />

      case 2:
        return <DadosEducacionais />

      case 3:
        return <NaoFormou />

      case 4:
        return <Final />
    }
  }

  onClickMudarEtapa = () => {
      const mudaEtapa = this.state.etapa + 1
      this.setState({ etapa: mudaEtapa })
  }

  render() {

    return (
      <Formulario>
            <GlobalStyle/>

        {this.renderizarEtapa()}
        {this.state.etapa < 4 && <button onClick={this.onClickMudarEtapa}>Prosseguir</button>}

      </Formulario>
    );
  }
}

export default App;