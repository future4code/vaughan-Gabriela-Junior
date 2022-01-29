import React from "react";
import axios from "axios";
import { DetailsStyle, ButtonReturn, TracksStyle, AddTrackStyle, PageStyle, ButtonDelete } from "./styled-config";
import audioTrackIcon from "../assets/imgs/audiotrack-white.svg"
import addIcon from "../assets/imgs/add-white.svg"
import deleteIcon from '../assets/imgs/delete-white.svg';

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
            alert(`Música adicionada com sucesso!`)
            this.setState ({ inputTrackName: "", inputBand: "", inputTrackURL: ""})
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

    removeTrackFromPlaylist = async (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.idPlaylist}/tracks/${id}`
        const config = { 
            headers: {
                Authorization: "gabriela-junior-vaughan"
            }
        }
        try {
            const response = await axios.delete(url, config)
            alert(`Música deletada com sucesso!`)
            this.getPlaylistTracks()

        } catch (error) {
            console.log(error.response.data)
        }
    }

    render() {

        const tracksName = this.state.tracks.map((track) => {
            return <TracksStyle key={track.id}>
                <p>{track.name}</p>
                <p>{track.artist}</p>
                <audio src={track.url} controls type="audio/mp3"></audio>
                <ButtonDelete onClick={() => {
                    if (window.confirm(`Tem certeza que deseja deletar essa música?`)) { 
                    this.removeTrackFromPlaylist(track.id)
                } else {
                    return
                }
                    }}> <img src={deleteIcon} alt="Ícone de deletar"/> </ButtonDelete>
            </TracksStyle>
        })

        return (
            <DetailsStyle>
                <ButtonReturn onClick={this.props.changeToPlaylists}>Voltar</ButtonReturn>
                <h2><img src={audioTrackIcon} alt="Ícone de Música" /> {this.props.namePlaylist}</h2>
                <PageStyle>
                    <AddTrackStyle>
                        <h3>Adicionar música</h3>
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
                        <button onClick={() => { this.addTrackToPlaylist() }}><img src={addIcon} alt="Ícone de Adicionar" /></button>
                    </AddTrackStyle>

                    {this.state.tracks.length > 0 ?
                        (tracksName) :
                        <p>Carregando...</p>}
                </PageStyle>
            </DetailsStyle>
        )
    }
}