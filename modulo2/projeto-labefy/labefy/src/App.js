import React from "react";
import Playlists from "./pages/Playlists";
import PlaylistDetails from "./pages/PlaylistDetails";
import Header from "./components/Header";
import Footer from './components/Footer';
import { GlobalStyle } from "./styled-app";

class App extends React.Component {
  state = {
    currentScreen: "playlists",
    idPlaylist: "",
    namePlaylist: ""
  };

  changeToPlaylists = () => {
    this.setState({ currentScreen: "playlists" })
  };

  changeToPlaylistDetails = (name, id) => {
    this.setState({ namePlaylist: name })
    this.setState({ idPlaylist: id })
    this.setState({ currentScreen: "details" })
  };

  renderScreen = () => {
    switch (this.state.currentScreen) {
      case "playlists":
        return <Playlists
          changeToPlaylistDetails={this.changeToPlaylistDetails}
        />
      case "details":
        return <PlaylistDetails
          namePlaylist={this.state.namePlaylist}
          idPlaylist={this.state.idPlaylist}
          changeToPlaylists={this.changeToPlaylists}
        />
      default:
        return <Playlists
          changeToPlaylistDetails={this.changeToPlaylistDetails}
        />
    };
  };

  render() {
    return (
      <div>
        <GlobalStyle />
        <Header />
        {this.renderScreen()}
        <Footer />
      </div>
    );
  };
};

export default App;
