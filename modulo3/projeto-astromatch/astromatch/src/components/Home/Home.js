import { useEffect, useState } from "react";
import { MainStyle, ButtonMatch, ImageDiv, ImageProfile, CardContainer, ButtonContainer, NameAge, HeartIcon, XIcon, MatchImg } from "./styled-home";
import axios from 'axios';
import { astroMatchURL } from '../../constants/astroMatchURL';
import likeIcon from '../../assets/imgs/purple-heart.png';
import dislikeIcon from '../../assets/imgs/dislike.png';
import MatchIcon from '../../assets/imgs/matches.png';
import { LoadingContainer } from "../../styled-app";

export default function Home(props) {

  const [profile, setProfile] = useState([]);

  useEffect(() => getProfileToChoose(), []);


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
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const response = await axios.post(url, body, config)
      if (response.data.isMatch) {
        alert(`Você deu match com ${profile.name}!`)
      }
      getProfileToChoose();

    } catch (error) {
      alert(`Algo de errado não está certo. Tente novamente. ${error.response.data}`);
    };
  };

  return (

    <MainStyle>
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
              <ImageProfile src={profile.photo} alt="Foto da Pessoa" />
              <NameAge>
                <h3>{profile.name}, {profile.age}</h3>

                <p>{profile.bio}</p>
              </NameAge>
            </ImageDiv>
            <ButtonContainer>
              <button
                onClick={getProfileToChoose}
              >
                <XIcon src={dislikeIcon} alt="Botão de Dislike" /></button>
              <button
                onClick={() => { choosePerson() }}
              ><HeartIcon src={likeIcon} alt="Botão de Like" /></button>
            </ButtonContainer>
          </>
        }
      </CardContainer>

    </MainStyle>
  );
};