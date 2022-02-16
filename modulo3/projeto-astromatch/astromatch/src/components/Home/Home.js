import { useEffect, useState } from "react";
import { ButtonMatch, ImageDiv, ImageProfile, CardContainer, ButtonContainer, NameAge, HeartIcon, XIcon, MatchImg } from "./styled-home";
import likeIcon from '../../assets/imgs/purple-heart.png';
import dislikeIcon from '../../assets/imgs/dislike.png';
import MatchIcon from '../../assets/imgs/matches.png';
import { LoadingContainer } from "../../styled-app";
import { getProfileToChoose, choosePerson} from '../../services/requests-astromatch-api';
import Matches from '../Matches/Matches'

export default function Home(props) {

  const [animationLeft, setAnimationLeft] = useState('');
  const [animationRight, setAnimationRight] = useState('');

  useEffect(() => getProfileToChoose(props.saveProfile), []);

  useEffect(() => {
    const keyPressArrowLeft = (event) => {
      if (event.code === "ArrowLeft") {
        getProfileToChoose(props.saveProfile)
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
  }, []);

  useEffect(() => {
    const keyPressArrowRight = (event) => {
      if (event.code === "ArrowRight") {
        choosePerson(props.profile, props.saveProfile)
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
  }, [props.profile]);

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
  }, []);

  const clickedLike = () => {
    choosePerson(props.profile, props.saveProfile)
    setAnimationRight(true)
    setTimeout(() => {
      setAnimationRight(false)
    }, 500)
  };

  const clickedDislike = () => {
    getProfileToChoose(props.saveProfile)
    setAnimationLeft(true)
    setTimeout(() => {
      setAnimationLeft(false)
    }, 500)
  };

  if (props.profile === null) {
    alert (`Os perfis acabaram! Delete todos os matches e atualize a página para retornar.`)
    return <Matches changeToHome={props.changeToHome}
    saveProfile={props.saveProfile}
    />
  };

  return (

    <div>
      <CardContainer>
        <ButtonMatch onClick={props.changeToMatches}><MatchImg src={MatchIcon} alt="Botão de Matches" /></ButtonMatch>

        {props.profile.length <= 0 ?          
        <LoadingContainer>
            <div></div>
            <div></div>
          </LoadingContainer>
          :
          <>
            <ImageDiv>
              <ImageProfile animationLeft={animationLeft} animationRight={animationRight} src={props.profile.photo} alt="Foto da Pessoa" />
              <NameAge>
                <h3>{props.profile.name}, {props.profile.age}</h3>

                <p>{props.profile.bio}</p>
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