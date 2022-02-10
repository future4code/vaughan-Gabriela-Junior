import { useState, useEffect } from "react";
import { MainContainer, NameContainer, MatchesContainer } from "./styled-matches";
import axios from 'axios';
import { astroMatchURL } from '../../constants/astroMatchURL';
import returnIcon from '../../assets/imgs/return.png'
import deleteAllIcon from '../../assets/imgs/delete-all.png'
import { LoadingContainer, LoadingBouncer } from "../../styled-app";

export default function Matches(props) {
  const [matches, setMatches] = useState([])
  useEffect(() => { getMatches() }, [])

  const getMatches = async () => {
    const url = `${astroMatchURL}/matches`
    const config = {
      headers: {}
    }

    try {
      const response = await axios.get(url, config)
      setMatches(response.data.matches);

    } catch (error) {
      alert(`Algo deu errado. Tente novamente. ${error.response.data}`);
    };
  };

  const clear = async () => {
    const url = `${astroMatchURL}/clear`
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
     await axios.put(url, config)
      alert(`Todos os seus matches foram deletados!`)
      getMatches()

    } catch (error) {
      alert(`Algo deu errado. Tente novamente. ${error.response.data}`)
    };
  };

  const renderMatches = matches.map((match) => {
    return (
      <NameContainer key={match.id}>
        {match.name}
        <img src={match.photo} alt="Imagem do Match"/>
      </NameContainer>
    )
  });

  return (
    <MainContainer>
      <MatchesContainer>
        <div>
          <button onClick={props.changeToHome}><img src={returnIcon} alt="Ícone de voltar" /></button>
          <button onClick={() => {
            if (window.confirm(`Tem certeza que deseja deletar todos os matches?`)) {
              return clear()
            }
          }}><img src={deleteAllIcon} alt="Ícone de deletar todos os matches" /></button>
        </div>
        {matches.length > 0 ? (renderMatches) : 
        <LoadingBouncer> 
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </LoadingBouncer>
      }
      </MatchesContainer>
    </MainContainer>
  );
}