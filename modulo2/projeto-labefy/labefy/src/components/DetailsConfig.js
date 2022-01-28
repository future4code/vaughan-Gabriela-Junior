import React from "react";
import axios from "axios";

export default class DetailsConfig extends React.Component {
    state = {
        tracks: [],
        playlistName: "",
        inputTrackName: "",
        inputBand: "",
        inputTrackURL: "",
        isPlaying: false
    }

    componentDidMount() {
        this.getPlaylistTracks()
    }

    getPlaylistTracks = async () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.idPlaylist}/tracks`
        const config = {
            headers: {
                Authorization: "gabriela-junior-vaughan"
            }
        }

        try {
            const response = await axios.get(url, config)
            this.setState({ tracks: response.data.result.tracks })

        } catch (error) {
            console.log(error.response.data.message)
        }
    }

    addTrackToPlaylist = async () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.idPlaylist}/tracks`
        const body = {
            name: this.state.inputTrackName,
            artist: this.state.inputBand,
            url: this.state.inputTrackURL
        }
        const config = {
            headers: {
                Authorization: "gabriela-junior-vaughan"
            }
        }

        try {
            const response = await axios.post(url, body, config)
            console.log(response.data)
            this.getPlaylistTracks()

        } catch (error) {
            console.log(error)
        }
    }

    changeTrackName = (event) => {
        this.setState({ inputTrackName: event.target.value })
    }

    changeBand = (event) => {
        this.setState({ inputBand: event.target.value })
    }

    changeTrackURL = (event) => {
        this.setState({ inputTrackURL: event.target.value })
    }

    render() {

        const tracksName = this.state.tracks.map((track) => {
            return <div key={track.id}>
                {track.name}
                <audio src={track.url} controls type="audio/mp3"></audio>
            </div>
        })

        return (
            <div>
                <h2>Adicionar música</h2>
                <input
                    placeholder="Nome da Música"
                    value={this.state.inputTrackName}
                    onChange={this.changeTrackName}
                />
                <input
                    placeholder="Nome do Artista ou Banda"
                    value={this.state.inputBand}
                    onChange={this.changeBand}
                />
                <input
                    placeholder="Link da Música"
                    value={this.state.inputTrackURL}
                    onChange={this.changeTrackURL}
                />
                <button onClick={() => { this.addTrackToPlaylist() }}>Adicionar</button>

                <h2>Detalhes Playlist</h2>
                {this.state.tracks.length > 0 ?
                    (<div>
                        <p>Nome: {this.props.namePlaylist}</p>
                        Músicas: {tracksName} </div>) :
                    <p>Carregando...</p>}
                <button onClick={this.props.changeToPlaylists}>Voltar</button>
            </div>
        )
    }
}