import React from "react";
import PlaylistsConfig from "../components/PlaylistsConfig";

export default class Playlists extends React.Component {
    render () {
        return (
            <div>
                <h2>Lista de Playlists</h2>
                <PlaylistsConfig />
            </div>
        )
    }
}