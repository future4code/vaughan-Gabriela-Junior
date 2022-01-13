import React, { Component } from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`

const EstiloComentario = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

`

export class SecaoComentario extends Component {
	state = {
		comentarios: [],
		texto: "",
	}

	onChangeComentario = (event) => {
		this.setState({ texto: event.target.value });
		// console.log(event.target.value)
	}

	enviarComentario = () => {
		const novoComentarios = [...this.state.comentarios, this.state.texto]
		this.setState({ comentarios: novoComentarios })
		this.setState({texto:""})
	}



	render() {
		console.log(this.state.comentarios)
		return <div>
		<CommentContainer>
			<InputComentario
				placeholder={'Comentário'}
				value={this.state.texto}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.enviarComentario}>Enviar</button>

		</CommentContainer>
		<EstiloComentario>
			<h3>Comentários</h3>
				{this.state.comentarios.map((comentario) => {
					return (
					<p>{comentario}</p>)
				})}
	
			</EstiloComentario>
		</div>
	}
}
