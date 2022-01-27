import axios from "axios";
import React from "react";
import { ThemeConsumer } from "styled-components";

export default class PlaylistsConfig extends React.Component {
    state = {
        playlist: [],
        inputName: "",
    }

    changeInputName = (event) => {
        this.setState({ inputName: event.target.value })
    }

    createPlaylist = async () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.inputName
        }
        const config = {
            headers: {
                Authorization: "gabriela-junior-vaughan"
            }
        }
        try {
            const response = await axios.post(url, body, config)
            this.setState({ playlist: response.data })
            this.setState({ inputName: "" })
            console.log(response.data)

        } catch (error) {
            console.log(error.data)
        }
        

    }


    render() {
        return (
            <div>
                <h3>Criar Nova Playlist</h3>
                <input
                    placeholder="Nome da Playlist"
                    value={this.state.inputName}
                    onChange={this.changeInputName}
                />
                <button onClick={this.createPlaylist}>Criar Playlist</button>
            </div>
        )
    }
}