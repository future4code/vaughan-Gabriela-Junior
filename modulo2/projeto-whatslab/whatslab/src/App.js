import logo from './logo.svg';
// import './App.css';
import SecaoMensagem from './components/SecaoMensagem/SecaoMensagem';
import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        /* background-color: #121111; */
        box-sizing: border-box;

    }
`


const EstilizacaoPrincipal = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

function App() {
  return (
    <EstilizacaoPrincipal>
      <GlobalStyle />
      <SecaoMensagem/>
    </EstilizacaoPrincipal>
  );
}

export default App;
