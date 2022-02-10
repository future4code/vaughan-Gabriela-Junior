import { useEffect, useState } from "react";
import { ButtonMatch, ImageDiv, ImageProfile, CardContainer, ButtonContainer, NameAge, HeartIcon, XIcon, MatchImg } from "./styled-home";
import axios from 'axios';
import { astroMatchURL } from '../../constants/astroMatchURL';
import likeIcon from '../../assets/imgs/purple-heart.png';
import dislikeIcon from '../../assets/imgs/dislike.png';
import MatchIcon from '../../assets/imgs/matches.png';
import { LoadingContainer } from "../../styled-app";

export default function Home(props) {

  const [profile, setProfile] = useState([]);
  const [clicked, setClicked] = useState("");
  const [animation, setAnimation] = useState("");

  useEffect(() => getProfileToChoose(), []);

  useEffect(() => {
    if(clicked) {
      setAnimation('right')
    } else if (clicked === false) {
      setAnimation('left')
    }
  }, [clicked])

  useEffect(() => {
    const keyPressArrowLeft = (event) => {
      if (event.code === "ArrowLeft") {
        return getProfileToChoose()
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
        return choosePerson()
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

  const getProfileToChoose = async () => {
    const url = `${astroMatchURL}/person`
    const config = {
      headers: {}
    }

    try {
      const response = await axios.get(url, config)
      setProfile(response.data.profile);

    } catch (error) {
        alert(`Algo deu errado. Tente novamente. ${error.response.data}`)
    };
  };

  const choosePerson = async () => {
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
      getProfileToChoose();

    } catch (error) {
      alert(`Algo de errado não está certo. Tente novamente. ${error.response.data}`);
    };
  };

  const clickedLike = () => {
    setClicked(true)
    return choosePerson()
  }

  const clickedDislike = () => {
    setClicked(false);
    return getProfileToChoose()

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
              <ImageProfile animation = {animation} src={profile.photo} alt="Foto da Pessoa" />
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