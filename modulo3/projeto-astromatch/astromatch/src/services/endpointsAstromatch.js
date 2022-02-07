import axios from 'axios';
import { astroMatchURL } from '../constants/astroMatchURL';

// Endpoints in Home
// export const getProfileToChoose = async (state) => {
//     const url = `${astroMatchURL} gabriela-junior/person`
//     const config = {
//         headers: {}
//     }

//     try {
//         const response = await axios.get(url, config)
//         state(response.data.profile);

//     } catch (error) {
//         console.log(error.response);
//     };
// };

// export const choosePerson = async () => {
//     const url = `${astroMatchURL} :aluno/choose-person`
//     const config = {
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }

//     try {
//         const response = await axios.post(url, config)
//         console.log(response);

//     } catch (error) {
//         console.log (error.response);
//     };
// };

//Endpoints in Matches
// export const getMatches = async () => {
//     const url = `${astroMatchURL} :aluno/matches`
//     const config = {
//         headers: {}
//     }

//     try {
//         const response = await axios.get(url, config)
//         console.log(response);

//     } catch (error) {
//         console.log(error.response);
//     };
// };

// export const clear = async () => {
//     const url = `${astroMatchURL} :aluno/clear`
//     const config = {
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }

//     try {
//         const response = await axios.put(url, config)
//         console.log(response);

//     } catch (error) {
//         console.log (error.response);
//     };
// };