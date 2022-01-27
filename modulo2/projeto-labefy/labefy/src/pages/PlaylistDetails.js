import React from "react";
import DetailsConfig from "../components/DetailsConfig";

export default class PlaylistDetails extends React.Component {
    render () {
        return (
            <div>
                <DetailsConfig 
                changeToPlaylists={this.props.changeToPlaylists}
                idPlaylist={this.props.idPlaylist}
                namePlaylist={this.props.namePlaylist}
                />
            </div>
        )
    }
}