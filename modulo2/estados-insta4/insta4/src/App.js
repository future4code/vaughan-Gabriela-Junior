import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'frank n furter'}
          fotoUsuario={'http://25.media.tumblr.com/513dda1d27e19e7218a01d15ee0d1a7f/tumblr_n0uox14R4j1rk0preo4_1280.jpg'}
          fotoPost={'https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/05/15/22/rocky.jpg?width=982&height=726&auto=webp&quality=75'}
        />

        <Post
          nomeUsuario={'magenta'}
          fotoUsuario={'https://i.pinimg.com/originals/f4/23/7e/f4237e0a050cdbf676c3aa07675be75a.jpg'}
          fotoPost={'https://i.pinimg.com/originals/81/73/43/81734313bdfb4f8838730a6607027d34.jpg'}
        />

      </MainContainer>
    );
  }
}

export default App;
