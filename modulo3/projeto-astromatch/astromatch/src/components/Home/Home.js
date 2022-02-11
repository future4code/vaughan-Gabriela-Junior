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
  const [animationLeft, setAnimationLeft] = useState('');
  const [animationRight, setAnimationRight] = useState('')

  useEffect(() => getProfileToChoose(saveProfile), []);

  useEffect(() => {
    const keyPressArrowLeft = (event) => {
      if (event.code === "ArrowLeft") {
        getProfileToChoose(saveProfile)
        setAnimationLeft(true)
        setTimeout(() => {
          setAnimationLeft(false)
        }, 500)
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
        choosePerson(profile, saveProfile)
        setAnimationRight(true)
        setTimeout(() => {
          setAnimationRight(false)
        }, 500)
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
    choosePerson(profile, saveProfile)
    setAnimationRight(true)
    setTimeout(() => {
      setAnimationRight(false)
    }, 500)
  }

  const clickedDislike = () => {
    getProfileToChoose(saveProfile)
    setAnimationLeft(true)
    setTimeout(() => {
      setAnimationLeft(false)
    }, 500)
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
              <ImageProfile animationLeft={animationLeft} animationRight={animationRight} src={profile.photo} alt="Foto da Pessoa" />
              <NameAge>
                <h3>{profile.name}, {profile.age}</h3>

                <p>{profile.bio}</p>
              </NameAge>
            </ImageDiv>
            <ButtonContainer>
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