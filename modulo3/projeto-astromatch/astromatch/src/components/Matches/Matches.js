import { useState, useEffect } from "react";
import {} from "./styled-matches";
import axios from 'axios';
import { astroMatchURL } from '../../constants/astroMatchURL';

export default function Matches(props) {
  const [matches, setMatches] = useState([])
  useEffect(() => {getMatches()}, [])

const getMatches = async () => {
    const url = `${astroMatchURL} gabriela-junior/matches`
    const config = {
        headers: {}
    }

    try {
        const response = await axios.get(url, config)
        setMatches(response.data.matches);
        console.log(response.data.matches);

    } catch (error) {
        console.log(error.response);
    };
};

const clear = async () => {
  const url = `${astroMatchURL} gabriela-junior/clear`
  const config = {
      headers: {
          'Content-Type': 'application/json'
      }
  }

  try {
      const response = await axios.put(url, config)
      getMatches()
      console.log(response.data.message);

  } catch (error) {
      console.log (error.response);
  };
};

const renderMatches = matches.map((match) => {
  return (
    <div key={match.id}>
      {match.name}
    </div>
  )
})

    return (
      <div>
        <button onClick={props.changeToHome}>Voltar</button> 
        {matches.length > 0 ? (renderMatches) : <p> Carregando...</p>}
        <button onClick={clear}>Apagar todos os matches</button>
      </div>
    );
  }