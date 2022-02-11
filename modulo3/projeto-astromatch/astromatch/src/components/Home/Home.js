import { useEffect, useState } from "react";
import { ButtonMatch, ImageDiv, ImageProfile, CardContainer, ButtonContainer, NameAge, HeartIcon, XIcon, MatchImg } from "./styled-home";
import likeIcon from '../../assets/imgs/purple-heart.png';
import dislikeIcon from '../../assets/imgs/dislike.png';
import MatchIcon from '../../assets/imgs/matches.png';
import { LoadingContainer } from "../../styled-app";
import { clear, getProfileToChoose, choosePerson, getMatches } from '../../services/requests-astromatch-api';
import Matches from '../Matches/Matches'

export default function Home(props) {

  const [profile, setProfile] = useState([]);
  const [clicked, setClicked] = useState("");
  const [animation, setAnimation] = useState("");

  useEffect(() => getProfileToChoose(saveProfile), []);

  useEffect(() => {
    if (clicked) {
      setAnimation('right')
    } else if (clicked === false) {
      setAnimation('left')
    }
  }, [clicked])

  useEffect(() => {
    const keyPressArrowLeft = (event) => {
      if (event.code === "ArrowLeft") {
        setClicked(false)
        return getProfileToChoose(saveProfile)
      }
    }
    document.addEventListener("keydown", keyPressArrowLeft);
    return () => {
      document.removeEventListener("keydown", keyPressArrowLeft);
    };
  }, [])

  useEffect(() => {
    const keyPressArrowRight = (event) => {
      if (event.code === "ArrowRight") {
        setClicked(true)
        return choosePerson(profile, saveProfile)
      }
    }
    document.addEventListener("keydown", keyPressArrowRight);
    return () => {
      document.removeEventListener("keydown", keyPressArrowRight);
    };
  }, [profile])

  useEffect(() => {
    const keyPressM = (event) => {
      if (event.code === "KeyM") {
        return props.changeToMatches()
      }
    }
    document.addEventListener("keydown", keyPressM);
    return () => {
      document.removeEventListener("keydown", keyPressM);
    };
  }, [])

  const saveProfile = (data) => {
    setProfile(data)
  }

  const clickedLike = () => {
    setClicked(true)
    return choosePerson(profile, saveProfile)
  }

  const clickedDislike = () => {
    setClicked(false);
    return getProfileToChoose(saveProfile)

  }

  if (profile === null) {
    alert (`Os perfis acabaram! Delete todos os matches e atualize a página para retornar.`)
    return <Matches changeToHome={props.changeToHome}/>
  }

  return (

    <div>
      <CardContainer>
        <ButtonMatch onClick={props.changeToMatches}><MatchImg src={MatchIcon} alt="Botão de Matches" /></ButtonMatch>

        {profile.length <= 0 ?          
        <LoadingContainer>
            <div></div>
            <div></div>
          </LoadingContainer>
          :
          <>
            <ImageDiv>
              <ImageProfile animation={animation} src={profile.photo} alt="Foto da Pessoa" />
              <NameAge>
                <h3>{profile.name}, {profile.age}</h3>

                <p>{profile.bio}</p>
              </NameAge>
            </ImageDiv>
            <ButtonContainer>
              <button onClick={() => {
                if (window.confirm(`Tem certeza que deseja deletar todos os matches?`)) {
                  return clear()
                }
              }}><h3>REINICIAR MATCHES</h3></button>
              <button
                onClick={clickedDislike}
              >
                <XIcon src={dislikeIcon} alt="Botão de Dislike" /></button>
              <button
                onClick={clickedLike}
              ><HeartIcon src={likeIcon} alt="Botão de Like" /></button>

            </ButtonContainer>
          </> 

        }
      </CardContainer>

    </div>
  );
};