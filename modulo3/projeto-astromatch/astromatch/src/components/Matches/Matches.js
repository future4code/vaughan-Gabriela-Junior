import { useState, useEffect } from "react";
import { NameContainer, MatchesContainer } from "./styled-matches";
import returnIcon from '../../assets/imgs/return.png'
import deleteAllIcon from '../../assets/imgs/delete-all.png'
import { LoadingBouncer } from "../../styled-app";
import { clear, getMatches } from "../../services/requests-astromatch-api";

export default function Matches(props) {

  const [matches, setMatches] = useState([]);

  useEffect(() => { getMatches(getProfile) }, []);

  useEffect(() => {
    const keyPressDelete = (event) => {
      if (event.code === "Space") {
        if (window.confirm(`Tem certeza que deseja deletar todos os matches?`)) {
          return clear(getProfile, props.saveProfile)
        }
      }
    }
    document.addEventListener("keydown", keyPressDelete);
    return () => {
      document.removeEventListener("keydown", keyPressDelete);
    };
  }, []);

  useEffect(() => {
    const keyPressBackSpace = (event) => {
      if (event.code === "Backspace") {
        return props.changeToHome()
      }
    }
    document.addEventListener("keydown", keyPressBackSpace);
    return () => {
      document.removeEventListener("keydown", keyPressBackSpace);
    };
  }, []);

  const getProfile = (data) => {
    setMatches(data)
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
    <div>
      <MatchesContainer>
        <div>
          <button onClick={props.changeToHome}><img src={returnIcon} alt="Ícone de voltar" /></button>
          <button onClick={() => {
            if (window.confirm(`Tem certeza que deseja deletar todos os matches?`)) {
              return clear(getProfile, props.saveProfile)
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
    </div>
  );
};