import React from "react";
import DetailsConfig from "../components/DetailsConfig";
import { MainDivDetails } from "../components/styled-config";

export default class PlaylistDetails extends React.Component {
    render() {
        return (
            <MainDivDetails>
                <DetailsConfig
                    changeToPlaylists={this.props.changeToPlaylists}
                    idPlaylist={this.props.idPlaylist}
                    namePlaylist={this.props.namePlaylist}
                />
            </MainDivDetails>
        )
    };
};