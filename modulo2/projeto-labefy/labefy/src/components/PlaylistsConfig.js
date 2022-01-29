import axios from "axios";
import React from "react";
import { PlaylistContainer, CreatePlaylistContainer, PlaylistList, ButtonsContainer, ButtonNoStyle } from "../components/styled-config";
import playPlaylist from '../assets/imgs/playlist-play.svg';
import deleteIcon from '../assets/imgs/delete-white.svg';
import addPlaylist from '../assets/imgs/playlist-add.svg'
import audioTrackIcon from "../assets/imgs/audiotrack-white.svg"

export default class PlaylistsConfig extends React.Component {
    state = {
        playlists: [],
        inputName: "",
    }

    componentDidMount() {
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
            alert(`Playlist criada com sucesso!`)
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
            alert(`Playlist deletada com sucesso!`)
            this.getAllPlaylists()

        } catch (error) {
            alert(`Não foi possível deletar a playlist. Tente novamente.`)
        }

    }

    render() {

        const playlistsNames = this.state.playlists.map((playlist) => {
            return (
                <PlaylistList key={playlist.id}>
                    <img src={audioTrackIcon} alt="Ícone de Música" /> {playlist.name}
                    <div>
                        <ButtonsContainer onClick={() => {
                            this.props.changeToPlaylistDetails(playlist.name, playlist.id)
                        }
                        }>
                            <img src={playPlaylist} alt="Ícone Tocar Playlist" /></ButtonsContainer>
                        <ButtonsContainer onClick={() => {
                            if (window.confirm(`Tem certeza que deseja deletar essa playlist?`)) {
                            this.deletePlaylist(playlist.id)
                        } else {
                            return
                        }
                        }}>
                            <img src={deleteIcon} alt="Ícone de Deletar" /></ButtonsContainer>
                    </div>
                </PlaylistList>
            )
        })
        return (
            <PlaylistContainer>
                <CreatePlaylistContainer>
                    <h3>Criar Nova Playlist</h3>
                    <input
                        placeholder="Nome da Playlist"
                        value={this.state.inputName}
                        onChange={this.changeInputName}
                    />
                    <ButtonsContainer onClick={this.createPlaylist}><img src={addPlaylist} alt="Ícone Adicionar Playlist" /></ButtonsContainer >
                </CreatePlaylistContainer>

                {this.state.playlists.length > 0 ? (playlistsNames) : <p>Carregando...</p>}
            </PlaylistContainer>
        )
    }
}