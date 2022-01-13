import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const Formulario = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
`

const MargemFormulario = styled.div `
  margin-bottom: 20px;
`

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150",
      },
      {
        nomeUsuario: "frank n furter",
        fotoUsuario: "http://25.media.tumblr.com/513dda1d27e19e7218a01d15ee0d1a7f/tumblr_n0uox14R4j1rk0preo4_1280.jpg",
        fotoPost: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/05/15/22/rocky.jpg?width=982&height=726&auto=webp&quality=75"
      },
      {
        nomeUsuario: "magenta",
        fotoUsuario: "https://i.pinimg.com/originals/f4/23/7e/f4237e0a050cdbf676c3aa07675be75a.jpg",
        fotoPost: "https://i.pinimg.com/originals/81/73/43/81734313bdfb4f8838730a6607027d34.jpg"
      }
    ],

    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""
  };

  adicionarPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
      };
    const novoArrayPost = [...this.state.posts, novoPost];

    this.setState({posts: novoArrayPost});
    this.setState({
      valorInputNomeUsuario: "",
      valorInputFotoUsuario: "",
      valorInputFotoPost: ""
    })
  };

  onChangeInputNomeUsuario = (event) => {
    this.setState ({valorInputNomeUsuario: event.target.value});
  };

  onChangeInputFotoUsuario = (event) => {
    this.setState ({valorInputFotoUsuario: event.target.value});
  };

  onChangeInputFotoPost = (event) => {
    this.setState ({valorInputFotoPost: event.target.value});
  };

  render() {

    const listaPost = this.state.posts.map((post) => {
      return <Post
        fotoUsuario = {post.fotoUsuario}
        nomeUsuario = {post.nomeUsuario}
        fotoPost = {post.fotoPost}
        />
    });

    return (

      <MainContainer>
        <Formulario>
          <h2>Novo Post</h2>
          <MargemFormulario>
            <input
            value={this.state.valorInputNomeUsuario}
            onChange={this.onChangeInputNomeUsuario}
            placeholder={"Nome do Usuário"}
            />
          </MargemFormulario>
          <MargemFormulario>
        <input
        value={this.state.valorInputFotoUsuario}
        onChange={this.onChangeInputFotoUsuario}
        placeholder={"Link da Foto do Usuário"}
        />
        </MargemFormulario>
        <MargemFormulario>
        <input
        value={this.state.valorInputFotoPost}
        onChange={this.onChangeInputFotoPost}
        placeholder={"Link da Foto do Novo Post"}
        />
        </MargemFormulario>
        <button onClick={this.adicionarPost}>Enviar</button>
        </Formulario>
 
          {listaPost}

        </MainContainer>
    );
  }
}

export default App;
