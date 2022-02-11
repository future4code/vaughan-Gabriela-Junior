import { useState } from "react";
import Home from "./components/Home/Home";
import Matches from "./components/Matches/Matches";
import { GlobalStyle } from "./styled-app";
import { Header, HermeneImg, KeyboardKeys, Main } from "./styled-app";
import HermeneIcon from './assets/imgs/two-hearts.png';
import arrowLeftIcon from "./assets/imgs/arrow-left.svg";
import arrowRightIcon from "./assets/imgs/arrow-right.svg";

function App() {

  const [currentScreen, setCurrentScreen] = useState("home");
  const [profile, setProfile] = useState([]);

  const saveProfile = (data) => {
    setProfile(data)
  };

  const changeToHome = () => {
    setCurrentScreen("home");
  };

  const changeToMatches = () => {
    setCurrentScreen("matches");
  };


  const renderScreen = () => {
    switch (currentScreen) {
      case "home":
        return <Home
        changeToMatches={changeToMatches}
        changeToHome={changeToHome}
        profile={profile}
        saveProfile={saveProfile}
        />
      case "matches":
        return <Matches changeToHome={changeToHome} 
        saveProfile={saveProfile}
        />
      default:
        return <Home 
        changeToMatches={changeToMatches} 
        changeToHome={changeToHome}
        profile={profile}
        saveProfile={saveProfile}
        />
    }
  };

  return (
    <Main>
      <GlobalStyle />
      <Header>
        <HermeneImg src={HermeneIcon} alt="Ícone HermeneMatch" />
        HermeneMatch
        <HermeneImg src={HermeneIcon} alt="Ícone HermeneMatch" />
      </Header>
      <KeyboardKeys>
        <img src={arrowLeftIcon} alt="Ícone da seta esquerda do teclado" />
        <img src={arrowRightIcon} alt="Ícone da seta direita do teclado" />
        <h3>ESPAÇO</h3>
        <h3>M</h3>
        <h3>BACKSPACE</h3>
        <p>Recusar perfil</p>
        <p>Curtir</p>
        <p> Deletar todos os matches </p>
        <p>Matches</p>
        <p>Voltar</p>
        </KeyboardKeys>
        {renderScreen()}
    </Main>
  );
};

export default App;
