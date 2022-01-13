import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeFavoritarPreto from '../../img/bookmark-black.svg'
import iconeFavoritarBranco from '../../img/bookmark-border.svg'
import iconeCompartilhar from '../../img/share.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeFacebook from '../../img/facebook.svg'
import iconeInstagram from '../../img/instagram.svg'
import iconeTwitter from '../../img/twitter.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'


const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

const CentralizarIcones = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    favoritado: false,
    compartilhado: false
  }

  onClickCurtida = () => {
    if (this.state.numeroCurtidas === 1) {
      this.setState({numeroCurtidas: this.state.numeroCurtidas - 1})
      } else {
      this.setState({numeroCurtidas: this.state.numeroCurtidas + 1})
      }
    this.setState({
      curtido: !this.state.curtido
    })
  }

  onClickFavoritar = () => {
    this.setState({
      favoritado: !this.state.favoritado
    })
  }

  funcaoIcones = () => {
    if (this.state.compartilhado === true) {
      return <div>
        <img alt="Icone do Facebook" src={iconeFacebook} />
        <img alt="Icone do Instagram" src={iconeInstagram} />
        <img alt="Icone do Twitter" src={iconeTwitter} />
      </div>
    }
  }

  onClickCompartilhar = () => {
    this.setState({
      compartilhado: !this.state.compartilhado
    })
  }

   
  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando,
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let iconeFavoritar

    if(this.state.favoritado) {
      iconeFavoritar = iconeFavoritarPreto
    } else {
      iconeFavoritar = iconeFavoritarBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }



    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeCompartilhar}
          onClickIcone={this.onClickCompartilhar}
          />

        <IconeComContador
          icone={iconeFavoritar}
          onClickIcone={this.onClickFavoritar}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </PostFooter>
      <CentralizarIcones>
      {this.funcaoIcones()}
      </CentralizarIcones>
      {componenteComentario}
    </PostContainer>
  }
}

export default Post