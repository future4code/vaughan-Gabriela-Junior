import { useEffect, useState } from "react";
import { MainStyle, ImageProfile, CardContainer, ButtonContainer, NameAge } from "./styled-home";
import axios from 'axios';
import { astroMatchURL } from '../../constants/astroMatchURL';
import likeIcon from '../../assets/imgs/heart.svg';
import dislikeIcon from '../../assets/imgs/clear.svg';

export default function Home(props) {

  const [profile, setProfile] = useState([]);
  useEffect(() => getProfileToChoose(), []);

  const getProfileToChoose = async () => {
    const url = `${astroMatchURL} gabriela-junior/person`
    const config = {
      headers: {}
    }

    try {
      const response = await axios.get(url, config)
      setProfile(response.data.profile);
      console.log(response.data.profile);

    } catch (error) {
      console.log(error.response.data);
    };
  };

  const choosePerson = async () => {
    const url = `${astroMatchURL} gabriela-junior/choose-person`
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
      console.log(response);
      if (response.data.isMatch) {
        alert(`Você deu match com ${profile.name}!`)
      }
      getProfileToChoose();

    } catch (error) {
      console.log(error.response);
    };
  };

  return (
    <MainStyle>
      <h1>HermeneMatch</h1>
      <CardContainer>
      <button onClick={props.changeToMatches}>Matches</button>
      {profile.length <= 0 ? <p>Carregando...</p> :
        <>
          <ImageProfile src={profile.photo} alt="Foto da Pessoa" />

          <NameAge>{profile.name}, {profile.age}</NameAge>

          <p>{profile.bio}</p>
        </>
      }
      </CardContainer>
      <ButtonContainer>
      <button onClick={getProfileToChoose}><img src={dislikeIcon} alt="Botão de Dislike" /></button>
      <button onClick={() => { choosePerson() }}><img src={likeIcon} alt="Botão de Like" /></button>
      </ButtonContainer>
    </MainStyle>
  );
}