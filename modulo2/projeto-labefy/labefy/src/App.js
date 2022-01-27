import React from "react";
import Playlists from "./pages/Playlists";
import PlaylistDetails from "./pages/PlaylistDetails";

class App extends React.Component {
  state = {
    currentScreen: "playlists"
  };

  changeToPlaylists = () => {
    this.setState({ currentScreen: "playlists" })
  };

  changeToPlaylistDetails = () => {
    this.setState({ currentScreen: "details" })
  };

  renderScreen = () => {
    switch (this.state.currentScreen) {
      case "playlists":
        return <Playlists
          changeToPlaylists={this.changeToPlaylists}
        />
      case "details":
        return <PlaylistDetails
          changeToPlaylistDetails={this.changeToPlaylistDetails}
        />
      default:
        return <Playlists 
        changeToPlaylists={this.changeToPlaylists}
        />
    }
  }

  render() {
    return (
      <div>
        <h1>Hermenefy</h1>
        {this.renderScreen()}
      </div>
    )
  }
}

export default App;
