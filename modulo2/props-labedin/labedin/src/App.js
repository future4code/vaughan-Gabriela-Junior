import React from 'react';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import {StyleApp} from './styles-App.js'
import {StyleSecao} from './styles-App.js'
import {Titulo2} from './styles-App.js'
import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  }
`

function App() {
  return (
    <StyleApp>
    <GlobalStyle/>
      <StyleSecao>
        <Titulo2>Dados pessoais</Titulo2>
        <CardGrande
          imagem="https://i.ibb.co/4Kyp54f/IMG-20181124-123500.jpg"
          nome="Gabriela"
          descricao="Meu nome é Gabriela Hermenegildo. Sou aluna da Labenu, na turma Vaughan do curso de Web Full Stack. Tenho mestrado na área de Artes Visuais e atuo como Tradutora freelancer."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </StyleSecao>

      <div>

        <CardPequeno
          icone="https://cdn-icons-png.flaticon.com/512/561/561127.png"
          titulo="Email: "
          informacao="gabriela.hermenegildo@gmail.com"
        />

        <CardPequeno
          icone="http://cdn.onlinewebfonts.com/svg/img_288659.png"
          titulo="Endereço: "
          informacao="João Pessoa - PB"
        />

      </div>

      <StyleSecao>
        <Titulo2>Experiências profissionais</Titulo2>
        <CardGrande
          imagem="http://www.notariado.org.br/blog/wp-content/uploads/2016/09/traducao.jpg"
          nome="Tradução - Freelance"
          descricao="Tradução e revisão de textos do Inglês para o Português e do Português para o Inglês."
        />

        <CardGrande
          imagem="https://www.tradstar.info/wp-content/uploads/2020/10/legendagem-2.png"
          nome="Legendagem - Freelance"
          descricao="Transcrição e legenda de vídeos de cursos."
        />
      </StyleSecao>

      <StyleSecao>
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </StyleSecao> 
    </StyleApp>
  );
}

export default App;
