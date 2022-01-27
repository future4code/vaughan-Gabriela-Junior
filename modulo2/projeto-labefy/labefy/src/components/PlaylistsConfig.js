import axios from "axios";
import React from "react";

export default class PlaylistsConfig extends React.Component {
    state = {
        playlists: [],
        inputName: "",
    }

    componentDidMount () {
        this.getAllPlaylists()
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
            this.getAllPlaylists()
            this.setState({ inputName: "" })

        } catch (error) {
            alert(`Não foi possível criar essa playlist! ${error.response.data.message}`)
        }
    }

    getAllPlaylists = async () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const config = {
            headers: {
                Authorization: "gabriela-junior-vaughan"
            }
        }
        try {
            const response = await axios.get(url, config)
            this.setState({ playlists: response.data.result.list })

        } catch (error) {
            alert(`Ocorreu um erro! Tente novamente.`)
            console.log(error.response.data)
        }
    }

    deletePlaylist = async (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        const config = {
            headers: {
                Authorization: "gabriela-junior-vaughan"
            }
        }
        try {
            const response = await axios.delete(url, config)
            this.getAllPlaylists()

        } catch (error){
            console.log(error.response)
        }

    }

    render() {

        const playlistsNames = this.state.playlists.map((playlist) => {
            return (
                <div key={playlist.id}>
                    {playlist.name}
                    <button onClick={() => {this.props.changeToPlaylistDetails(playlist.name, playlist.id)}}>Detalhes</button>
                    <button onClick={() => {this.deletePlaylist(playlist.id)}}>Deletar</button>
                </div>
            )
        })
        return (
            <div>
                <h3>Criar Nova Playlist</h3>
                <input
                    placeholder="Nome da Playlist"
                    value={this.state.inputName}
                    onChange={this.changeInputName}
                />
                <button onClick={this.createPlaylist}>Criar Playlist</button>

                <h3>Lista de Playlist</h3>

                {this.state.playlists.length > 0 ? (playlistsNames) : <p>Carregando...</p>}
            </div>
        )
    }
}