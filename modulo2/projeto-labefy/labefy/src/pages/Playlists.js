import React from "react";
import PlaylistsConfig from "../components/PlaylistsConfig";
import { PlaylistDiv } from "../components/styled-config";
import playlistIcon from "../assets/imgs/library-music-white.svg";

export default class Playlists extends React.Component {
    render() {
        return (
            <PlaylistDiv>
                <h2> <img src={playlistIcon} alt="Ícone de Playlist" /> Playlists</h2>
                <PlaylistsConfig changeToPlaylistDetails={this.props.changeToPlaylistDetails}
                    idPlaylist={this.props.idPlaylist}
                    namePlaylist={this.props.namePlaylist}
                />
            </PlaylistDiv>
        )
    };
};