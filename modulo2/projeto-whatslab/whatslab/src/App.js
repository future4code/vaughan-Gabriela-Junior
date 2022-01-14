import logo from './logo.svg';
import SecaoMensagem from './components/SecaoMensagem/SecaoMensagem';
import React from 'react';
import {GlobalStyle} from './style-App';
import {EstilizacaoPrincipal} from './style-App';

function App() {
  return (
    <EstilizacaoPrincipal>
      <GlobalStyle />
      <SecaoMensagem/>
    </EstilizacaoPrincipal>
  );
}

export default App;
