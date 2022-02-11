import axios from 'axios';
import { astroMatchURL } from '../constants/astroMatchURL';

//Home
export const getProfileToChoose = async (saveData) => {
    const url = `${astroMatchURL}/person`
    const config = {
      headers: {}
    }

    try {
      const response = await axios.get(url, config)
      saveData(response.data.profile);

    } catch (error) {
      alert(`Não tem mais perfis para curtir. Clique ok para reiniciar. ${error.response.data}`)
    };
  };

export const choosePerson = async (profile, data) => {
    const url = `${astroMatchURL}/choose-person`
    const body = {
      id: profile.id,
      choice: true
    }

    try {
      const response = await axios.post(url, body)
      if (response.data.isMatch) {
        alert(`Você deu match com ${profile.name}!`)
      }
      getProfileToChoose(data);

    } catch (error) {
      alert(`Algo de errado não está certo. Tente novamente. ${error.response.data}`);
    };
  };

// Matches
export const getMatches = async (saveData) => {
    const url = `${astroMatchURL}/matches`
    const config = {
      headers: {}
    }

    try {
      const response = await axios.get(url, config)
      saveData(response.data.matches);

    } catch (error) {
      alert(`Algo deu errado. Tente novamente. ${error.response.data}`);
    };
  };

export const clear = async (data) => {
    const url = `${astroMatchURL}/clear`

    try {
     await axios.put(url)
      alert(`Todos os seus matches foram deletados!`)
      getMatches(data)

    } catch (error) {
      alert(`Algo deu errado. Tente novamente. ${error.response.data}`)
    };
  };