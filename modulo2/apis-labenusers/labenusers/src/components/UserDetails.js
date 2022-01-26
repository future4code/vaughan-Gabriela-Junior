import React from 'react';
import axios from 'axios';

export default class UserDetails extends React.Component {
    //     state = {
    //         users: [{id: "2f8de6df-01e0-4f4a-b4ed-77a52fdbd3a0", name: "Jake", email: "jake@ooo.com"}]
    //     }

    // getUserById = async (idUser) => {
    //     const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${idUser}`
    //     const config = {
    //         headers: {
    //             Authorization: "gabriela-junior-vaughan"
    //         }
    //     }

    //     try {
    //         const response = await axios.get(url, config)
    //         console.log(response.data);
    //     } catch (error) {
    //         console.log(error.response.data);
    //     }
    // }

    // getAllUsers = async() => {
    //     const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
    //     const config = {
    //       headers: {
    //         Authorization: "gabriela-junior-vaughan"
    //       }
    //     };

    //     try {
    //         const response = await axios.get(url, config)
    //             this.setState({ users: response.data})

    //     } catch (error){
    //         alert(`Ocorreu um erro. Tente novamente.`)
    //     }

    //   };

    render() {

        // const detailsUsers = this.state.users.map((user) => {
        //     return (<div key={user.id}>
        //         <p>{user.name}</p>
        //         <p>{user.email}</p>
        //         <button onClick={()=>this.getUserById(user.id)}>Detalhe do user</button>
        //     </div>
        //     )
        // })

        return (
            <div>
                <h1>Detalhe do usuário</h1>
                {/* {detailsUsers} */}
                <p>Nome</p>
                <p>Email</p>
            </div>
        )
    }
}